# Kivu Resort website (kivutest)

A redesigned website for **Kivu Resort, Nakuru**: rooms and Msafiri Lodge, restaurant with tap-to-order menu, pool passes, Kids Park, gym, packages, safaris with a trip planner, guest reviews, guest login and a staff dashboard.

## Files
- `index.html` – the whole site in one file (styles, scripts and images included)
- `kivu-menu.pdf` – the restaurant menu, linked from the Dine page

## View it
- Open `index.html` in any browser, or
- Turn on **GitHub Pages**: Settings → Pages → Source: *Deploy from a branch* → Branch: `main`, folder `/ (root)` → Save. The site appears at `https://samogera.github.io/kivutest/`.

## What works where
| Feature | On GitHub Pages / any host | In the Claude preview |
|---|---|---|
| All pages, design, menu, trip planner, packages | ✅ | ✅ |
| Bookings, food orders, trip and event requests | Sent to the front desk on WhatsApp | Saved to the booking database |
| Live availability, staff dashboard, guest login, reviews | ❌ needs a backend | ✅ |
| AI concierge | Built-in answers | Full AI answers |

To run bookings, payments, login and the dashboard on kivuresort.com, connect the site to a backend (for example Frappe/ERPNext, Firebase or Supabase) and Safaricom Daraja for automatic M-Pesa.

## Before going live
- Set real room counts, room rates and the M-Pesa Paybill/Till
- Replace placeholder social media links (Facebook, Instagram, TikTok, X, YouTube)
- Confirm gym, Kids Park and package prices, and the safari list and travel times
- Fix menu PDF typos (matumbo 1 kg price, “Gizzerds”, “Macon”)
