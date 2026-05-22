# Scalbl.io – Demo Booking Landing Page

Lead-gen landing page for the appointment-setter + paid-ads offer.

## Stack
- Single static `index.html` — no build step
- Helvetica, `letter-spacing: -2px` site-wide
- Wistia VSL embed (media id: `hxkoq5jwbt`) — autoplay + muted
- Calendly inline embed inside the qualifier modal
- Qualifier survey: 5-question funnel with disqualification logic

## Deploy
Drag the folder onto Vercel or Netlify. No build settings needed.

## TODO before going live
1. Replace `CALENDLY_URL` in `index.html` with the real Calendly event link.
2. Add Meta pixel + GA4 in `<head>`.
3. (Optional) Log disqualified answers via Formspree / GHL webhook — currently client-side only.
