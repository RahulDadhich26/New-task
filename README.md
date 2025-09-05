# GitHub Activity Email Notifier

A full-stack application that captures email subscriptions, fetches GitHub public timeline activities, and sends automated email updates to subscribers.

## Features

- **Email Subscription**: Beautiful signup form with validation
- **Supabase Integration**: Stores subscriber emails securely
- **GitHub API**: Fetches real-time public timeline activities
- **Responsive UI**: Modern React/Next.js frontend
- **Production Ready**: Deployed on Vercel (frontend) and Render (backend)

## Tech Stack

**Frontend:**
- Next.js 14 with TypeScript
- TailwindCSS for styling
- Axios for API calls

**Backend:**
- Node.js with Express
- Supabase for database
- Nodemailer for email sending
- GitHub Events API integration

## Prerequisites

- Node.js 18+ installed
- Supabase account and project
- SMTP email service (Gmail recommended)
- GitHub account (for API access)

## Setup Instructions

### 1. Backend Setup

```bash
# Clone and navigate to backend directory
git clone <your-repo-url>
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env with your credentials:
# - SUPABASE_URL and SUPABASE_ANON_KEY
# - SMTP configuration
# - Other required variables
```

### 2. Supabase Database Setup

1. Create a new Supabase project
2. Run the SQL commands from `supabase-setup.sql` in the SQL editor
3. This creates the necessary tables and security policies

### 3. Frontend Setup

```bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies
npm install

# Create environment file
echo "NEXT_PUBLIC_API_URL=http://localhost:5000" > .env.local

# For production, use your deployed backend URL
```

### 4. Email Configuration

#### Using Gmail SMTP:
1. Enable 2-factor authentication on your Gmail account
2. Generate an "App Password" for your application
3. Use these credentials in your `.env` file:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
FROM_EMAIL=your_email@gmail.com
```

## Running the Application

### Development Mode

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

Visit `http://localhost:3000` to see the application.

### Production Mode

**Backend:**
```bash
npm start
```

**Frontend:**
```bash
npm run build
npm start
```

## Deployment

### Backend Deployment (Render)

1. Push your code to GitHub
2. Create a new Web Service on Render
3. Connect your GitHub repository
4. Set these configuration options:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment:** Node
5. Add all environment variables from your `.env` file
6. Deploy!

### Frontend Deployment (Vercel)

1. Install Vercel CLI: `npm i -g vercel`
2. From frontend directory: `vercel`
3. Follow the prompts
4. Set environment variable: `NEXT_PUBLIC_API_URL=your-backend-url`
5. Deploy!

## API Endpoints

- `GET /api/health` - Health check
- `POST /api/subscribe` - Subscribe email
- `GET /api/subscribers` - List subscribers (testing)
- `POST /api/send-updates` - Manual trigger updates (testing)

## Cron Jobs

The application includes two scheduled jobs:

- **Daily Updates**: Every day at 9:00 AM UTC
- **Weekly Summary**: Every Monday at 10:00 AM UTC

Customize the schedule by modifying the cron expressions in `server.js`.

## Environment Variables

### Backend (.env)
```env
PORT=5000
FRONTEND_URL=http://localhost:3000
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
FROM_EMAIL=your_email@gmail.com
NODE_ENV=production
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## Email Templates

The application sends two types of emails:

1. **Welcome Email**: Sent immediately after subscription
2. **Activity Updates**: Daily/weekly GitHub activity summaries

Both emails are HTML-formatted with responsive design.

## Security Features

- Email validation on both frontend and backend
- Supabase Row Level Security (RLS) policies
- CORS protection
- Environment variable protection
- Rate limiting (recommended for production)

## Testing

Test the subscription flow:

1. Visit your deployed frontend URL
2. Enter an email address
3. Submit the form
4. Check the subscriber list in Supabase
5. Verify welcome email delivery
6. Test manual update trigger: `POST /api/send-updates`

## Customization

### Modifying Email Content
Edit the `generateEmailHTML()` function in `server.js` to customize email templates.

### Changing Cron Schedule
Modify cron expressions in the `cron.schedule()` calls:
- `'0 9 * * *'` = Daily at 9:00 AM
- `'0 10 * * 1'` = Weekly on Mondays at 10:00 AM

### Adding Features
- User unsubscribe functionality
- Email preferences (frequency, content type)
- Admin dashboard for managing subscribers
- Analytics and metrics tracking

## 📝 Project Structure

```
├── backend/
│   ├── server.js           # Main server file
│   ├── package.json        # Backend dependencies
│   └── .env.example        # Environment template
├── frontend/
│   ├── app/
│   │   └── page.tsx        # Main page component
│   ├── package.json        # Frontend dependencies
│   ├── tailwind.config.js  # Tailwind configuration
│   └── next.config.js      # Next.js configuration
├── supabase-setup.sql      # Database schema
└── README.md               # This file
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

**Live Demo:** [Your Vercel URL]
**Backend API:** [Your Render URL]

Built with ❤️ for the GitHub community!
