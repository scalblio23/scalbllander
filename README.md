# Harbourview Growth – Demo Booking Landing Page

Lead-gen landing page for the appointment-setter + paid-ads offer.

## Stack
- Single static `index.html` — no build step
- Helvetica, `letter-spacing: -2px` system-wide
- Wistia VSL embed (media id: `hxkoq5jwbt`)
- Calendly inline embed inside the qualifier modal
- Qualifier survey: 5-question funnel with disqualification logic

## Deploy
Drop on Vercel / Netlify / any static host, or point a subdomain at it.

## TODO before going live
1. Replace `CALENDLY_URL` in `index.html` with the real Calendly event link.
2. Hook up analytics / pixel (Meta + GA4) — Harbourview pixel goes in `<head>`.
3. Add lead-capture (Formspree / GHL webhook) if you want to record disqualified answers too. Currently answers stay client-side.

## Structure
- Hero (eyebrow → headline → sub → VSL → orange CTA)
- Social proof strip (3 testimonials)
- Footer
- Modal qualifier (progress bar, 5 steps, DQ screen, qualified → Calendly)
