import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";
import axios from "axios";
import nodemailer from "nodemailer";
import cron from "node-cron";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_ANON_KEY as string
);

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Function to fetch GitHub events + send emails
async function sendUpdates(): Promise<string> {
  const response = await axios.get("https://api.github.com/events");
  const events = response.data.slice(0, 5);

  const updates = events
    .map((e: any) => `🔹 ${e.type} by ${e.actor.login} in ${e.repo.name}`)
    .join("\n");

  const { data: subscribers, error } = await supabase.from("subscribers").select("email");
  if (error) throw new Error(error.message);

  for (const sub of subscribers || []) {
    await transporter.sendMail({
      from: `"GitHub Updates" <${process.env.EMAIL_USER}>`,
      to: sub.email,
      subject: "Latest GitHub Updates 🚀",
      text: updates,
    });
  }

  return "Updates sent successfully!";
}

// Signup route
app.post("/signup", async (req: Request, res: Response) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email required" });

  try {
    const { error } = await supabase.from("subscribers").insert([{ email }]);
    if (error) throw error;
    res.json({ message: "Email saved successfully!" });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Manual trigger route
app.post("/send-updates", async (req: Request, res: Response) => {
  try {
    const msg = await sendUpdates();
    res.json({ message: msg });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Cron job → every day at 9 AM
cron.schedule("0 9 * * *", async () => {
  console.log("⏰ Cron: Sending daily updates...");
  try {
    await sendUpdates();
  } catch (err: any) {
    console.error("Cron failed:", err.message);
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
