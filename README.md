# Kivu Resort website (test copy)

The new website for **Kivu Resort, Nakuru**, built as a multi-page site: rooms and Msafiri Lodge, restaurant with tap-to-order menu, pool, Kids Park, gym, packages, safaris with a trip planner, events, guest reviews, guest login and a staff dashboard.

This copy is a **test site**. Every page carries `noindex`, so search engines won't list it. The live version will be www.kivuresort.com.

## View it
GitHub Pages: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: the branch holding this build (`claude/compliance-multipage`, or the default branch once this is merged), folder `/ (root)` → Save.**
After a minute it appears at `https://samogera.github.io/kivutest/`.

## What's in the repo
| Path | What it is |
|---|---|
| `index.html`, `rooms/`, `restaurant/`, `pool/`, … | One folder per page, each with its own title, description and canonical link |
| `privacy/`, `terms/`, `cancellation/`, `cookies/` | Legal pages (drafts, see below) |
| `assets/` | Shared stylesheet, script, self-hosted fonts (Inter, SIL Open Font Licence), images (all under 200 KB) and the menu PDF |
| `signin/`, `register/` and a few others | Redirects from old Kivu website links |
| `sitemap.xml`, `robots.txt`, `llms.txt`, `404.html` | Search and AI files |
| `.htaccess`, `nginx-redirects.conf` | 301 redirects and HTTPS rules for the live server |
| `_build/` | The source and the build script |

Old Kivu website addresses keep working: `/restaurant`, `/pool`, `/contact`, `/msafiri-lodge`, `/tours`, `/kids-park`, `/gallery` and `/gym` are now the new pages, and `/signin` and `/register` go to guest login.

## Rebuild
Edit `_build/src/site.tpl.html`, then run (needs Python 3 and Pillow):

```
# test copy on GitHub Pages
python3 _build/build_site.py --site https://samogera.github.io/kivutest/ --base /kivutest/ --staging --out .
# live site on www.kivuresort.com
python3 _build/build_site.py --site https://www.kivuresort.com/ --base / --out dist
```

`--out .` rebuilds into the repo root and replaces the generated pages; the `_build` folder is kept.

## What works where
| Feature | GitHub Pages / any static host | Needs a backend |
|---|---|---|
| All pages, menu, trip planner, packages, cookie banner, legal pages | ✅ | |
| Bookings, orders, trip, event and activity requests | Sent to the front desk on WhatsApp | Saved to a database |
| Live availability, guest login, reviews, staff dashboard | | ✅ |
| Automatic M-Pesa (STK push) | | ✅ Safaricom Daraja |

## Security
- Every page sends a Content Security Policy (scripts, styles, fonts and images only from this site; no frames; forms may only go to this site or WhatsApp) and a strict referrer policy.
- Guest data from the backend is checked before display (`safeRec`, `SAFE_ID`), and all text is escaped.
- Booking references use 6 random characters and PINs 6 random digits (Web Crypto). Stay records are encrypted with a key derived by PBKDF2, and repeated wrong PINs lock the login for a while.
- No API keys or passwords are in this repository.

See **GO-LIVE-CHECKLIST.md** before switching www.kivuresort.com over.
