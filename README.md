# OrbitOS — React Front-End Portfolio Project

OrbitOS is a polished, responsive workspace dashboard built with React. It is designed as a portfolio-ready product UI, not just a static landing page.

## Features
- Responsive dashboard with KPI cards, activity charts, project progress, task table, schedule and activity feed.
- Projects page with progress cards and create-project modal.
- Tasks page with search, status filters, priority, due dates, and interactive completion checkboxes.
- English/Arabic language switch with RTL layout.
- Light/dark theme toggle.
- Notifications popover, toast feedback, settings page, calendar/clients/reports/invoices views.
- Tasks, language and theme persist with `localStorage`.
- Reusable components, Lucide icons, Recharts chart, responsive CSS.
- Seed/demo data included.

## Run locally
Install Node.js LTS, unzip the project, open a terminal in this folder, then run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

Create a production build:
```bash
npm run build
npm run preview
```

## Important demo limitations
This is a front-end demo. Login/authentication, real user accounts, live notifications, database, payment processing, email delivery, and real client/team collaboration are not connected. They require a backend and appropriate APIs. Demo content and task preferences are stored in the browser's localStorage.

## Suggested next steps
1. Replace sample workspace data with your own brand and content.
2. Add a backend (e.g. Supabase/Firebase or a custom API) for authentication and persistence across devices.
3. Add automated tests and accessibility checks.
4. Deploy the `dist` build with Vercel or Netlify.
5. Add a portfolio case study with screenshots, feature list, and architecture notes.

## Tech stack
React 18 · Vite · CSS · Recharts · Lucide React
