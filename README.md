# wellness-vitality-website

Frontend UI for [Wellness Vitality Australia](https://www.wellnessvitalityaustralia.com.au/), built with React, Vite and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Other scripts: `npm run build` (production build into `dist/`), `npm run preview`, `npm run lint`.

## Pages

Home, About, Services, Training, Booking, Contact, FAQ, Refund Policy, Custom IV Drips, and the service pages under `/services/*` (IV Infusions, Health Assessments, Blood Collection, Teeth Whitening, Aged Care & NDIS, Corporate Health, Integrated Health & Wellness).

## Notes

- UI only: the contact form, newsletter and booking payment show their success states but do not send data anywhere yet.
- The booking wizard (`src/pages/Booking.jsx`) uses MUI to match the live site; the rest of the site uses Tailwind CSS.
- It is a single-page app, so the host must serve `index.html` for every route (SPA fallback).
