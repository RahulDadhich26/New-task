import Header from "@/components/sections/Header";
import SubscribeCard from "@/components/sections/SubscribeCard";
import Prism from "@/components/ui/prism";
import MailList from "@/components/sections/MailList/MailList";
import Scheduler from "@/components/sections/Scheduler";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-1  justify-items-center min-h-screen ">
      <div className="w-full h-full absolute pt-20">
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={2.5}
          hueShift={0}
          colorFrequency={1}
          glow={1}
          noise={0}
        />
      </div>
      <main className="flex flex-col mx-auto justify-cente gap-2 h-auto mt-16">
        <Header />
        <SubscribeCard />
        <Scheduler />
        <MailList />
      </main>
    </div>
  );
}
