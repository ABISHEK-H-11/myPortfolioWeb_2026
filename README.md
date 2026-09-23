# Abishek H — Portfolio Website

Personal portfolio site built with React 19, TypeScript, Vite, and Tailwind CSS, with an Express backend that handles a working contact form (sends real emails via SMTP, not just a mailto link). Deployed on Vercel.

## Sections

- **Hero** — animated 3D scene using Spline (`@splinetool/react-spline`), with a glassmorphism navbar (Home / Skills / Projects / Contact).
- **Skills** — Spring Boot, React, MySQL, Java, Python, GitHub, each with an icon and short description, in an animated grid (Framer Motion).
- **Projects** — showcases two real projects, pulled straight from the actual repos:
  - **Company Employee Discovery API** — the DataForSEO / Spring Boot backend, linking to [`Final_employee_finder_DataForSeo`](https://github.com/ABISHEK-H-11/Final_employee_finder_DataForSeo).
  - **TradeNest** — the full-stack e-commerce platform, linking to both the [backend](https://github.com/ABISHEK-H-11/tradnest-backend) and [frontend](https://github.com/ABISHEK-H-11/tradnest-frontend) repos.
- **Contact** — a real, working contact form. Submissions are sent via Nodemailer/SMTP (Gmail by default) to the site owner's email, with both a local Express endpoint (`server.ts`) for `npm run dev` and a Vercel serverless function (`api/contact.ts`) for production.

## Tech stack

- **React 19**, **TypeScript**, **Vite 6**
- **Tailwind CSS 4**
- **Framer Motion** — animations
- **Spline** (`@splinetool/react-spline`, `@splinetool/runtime`) — 3D hero scene
- **lucide-react** — icons
- **Express** (dev server) + **Vercel serverless functions** (production) — contact form backend
- **Nodemailer** — SMTP email sending
- Deployed on **Vercel**

## Project structure

```
├── api/contact.ts       # Vercel serverless function - handles contact form in production
├── server.ts             # Express dev server - handles contact form + Vite middleware locally
├── src/
│   ├── App.tsx           # Page layout: Navbar, Hero, Skills, Projects, Contact, Footer
│   └── components/ui/    # Navbar, skills grid, projects section, contact form, footer, etc.
├── .env.example           # Template for required environment variables
└── vercel.json
```

## Running locally

```bash
git clone https://github.com/ABISHEK-H-11/myPortfolioWeb_2026.git
cd myPortfolioWeb_2026
npm install
```

Copy `.env.example` to `.env` and fill in SMTP credentials so the contact form can actually send email:

```bash
cp .env.example .env
```

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password   # generate at https://myaccount.google.com/apppasswords
SMTP_SECURE=false
```

Then:

```bash
npm run dev
```

If SMTP variables aren't set, the contact form still works end-to-end but just logs the submission to the console instead of emailing it — useful for local testing without setting up SMTP.

## Building for production

```bash
npm run build
npm run start
```

## What this project demonstrates

Modern React/TypeScript frontend work with animation and 3D integration, plus a genuinely functional backend feature (server-side email sending with proper input validation) rather than a static template — showing the same backend instincts (validation, environment-based config, graceful fallback when config is missing) as the Spring Boot projects.
