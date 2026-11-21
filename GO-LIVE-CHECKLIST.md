# Go-live checklist: Kivu Resort website

✅ = done in this code. 🟡 = needs Kivu or you. Nothing marked 🟡 can be finished by changing code alone.

## 1. Legal and privacy (Kenya Data Protection Act, 2019)
- ✅ Privacy Policy, Terms, Cancellation and refund policy and Cookie Policy pages, linked from every page footer.
- ✅ The Privacy Policy lists every outside service (hosting, booking system, Safaricom M-Pesa, WhatsApp, email, Google Maps links, AI chat), the rights under the Act, retention periods and the ODPC complaint route.
- ✅ Forms warn people not to type ID, passport or card numbers. Food allergies (health data) need a separate, explicit tick box. Kids Park bookings ask only how many children are coming.
- 🟡 **ODPC registration.** Hotels, bars and restaurants must register with the Office of the Data Protection Commissioner whatever their size. Add the certificate number to the Privacy Policy.
- 🟡 **Fill in every yellow-highlighted item** in the legal pages: registered company name, data protection contact, hosting, booking and email providers, pool rules, park fees, and every cancellation time limit and percentage. These must match what Kivu actually does.
- 🟡 **Advocate review** of all four legal pages, then remove the yellow "Draft for review" notes.

## 2. Consent and cookies
- ✅ Cookie banner with equal "Necessary only" and "Accept all" buttons, plus a "Cookie settings" link in every footer.
- ✅ No analytics, no Meta Pixel and no embedded maps or YouTube. Fonts are self-hosted (no Google Fonts requests).
- ✅ The only optional storage (remembering name and phone on the device) is written only after "Accept all", and is deleted on "Necessary only".
- ✅ Every form has a required privacy tick box. Room, activity and trip bookings also have a separate, unticked box for offers. Reviews need a tick box to publish.
- 🟡 If Kivu ever sends offers by email or SMS, every message needs an unsubscribe link, and only people who ticked the offers box may receive them.
- 🟡 If analytics are added later, they must load only after "Accept all".

## 3. Honesty of content
- ✅ Removed claims that couldn't be proved: "Olympic-size pool", "under a kilometre from the park", "certified instructors", "every single day". Distances and travel times are marked as approximate.
- ✅ Removed the "Jane" and "John" safari testimonials (no proof of permission). Reviews now come only from real guests through the review form, with consent, and are checked before publishing.
- ✅ Replaced the 10 safari destination photos (they appeared to be copied from the web, and two showed the wrong place) with original illustrations.
- ✅ Prices show the currency (KES) and what's included. "On request" where Kivu hasn't confirmed a price.
- 🟡 **Hero flamingo photo:** confirm Kivu owns it or has a licence. If not, replace it with Kivu's own photo (`_build/src/img/flamingos.jpg`).
- 🟡 Confirm Kivu owns the other photos (rooms, pool, Kids Park, safari vans, conference room, food) and the menu.
- 🟡 Confirm the pool lifeguard and coaching wording, the 15% gym discount, Msafiri rates and the safari list.
- 🟡 Fix menu PDF typos: matumbo 1 kg price (shows 100/=), "Gizzerds", "Macon".
- 🟡 Replace the placeholder social media links (Facebook, Instagram, TikTok, X, YouTube) with Kivu's real accounts, or remove the ones they don't use.

## 4. Forms and emails
- ✅ Validation for empty forms, apostrophes in names (O'Neil), capital letters in email (saved in lower case), very long text (limited) and double-taps on Send.
- 🟡 Send one real test from each form after launch and confirm it reaches the right WhatsApp number or inbox.
- 🟡 Set up SPF, DKIM and DMARC for kivuresort.com email.
- 🟡 Check +254 726 026 894, info@kivuresort.com and adventuresafaris@kivuresort.com all reach a real person.

## 5. Speed and phones
- ✅ Every image is under 200 KB (WebP), the hero has a small phone version, and pages lazy-load hidden images.
- ✅ Shared CSS and script files are cached between pages.
- ✅ Tested at 360, 390 and 820 px wide: no sideways scroll on any page.
- ✅ Home page appears in about 2 seconds in a slow-4G test with a slowed-down phone processor.
- 🟡 Run each page through PageSpeed Insights (pagespeed.web.dev) after launch and fix anything red.

## 6. Search and AI visibility
- ✅ Every page has its own title, description, canonical link and social preview image.
- ✅ Hotel structured data on the home and contact pages; `sitemap.xml`; `robots.txt`; accurate `llms.txt`.
- ✅ Old Kivu URLs keep working or redirect (301 rules in `.htaccess` and `nginx-redirects.conf`).
- 🟡 Rebuild for production without `--staging` (removes `noindex`), add www.kivuresort.com to Google Search Console and submit the sitemap.
- 🟡 Set up and verify the Google Business Profile with the same name, address and phone as the website.

## 7. Accessibility
- ✅ Skip-to-content link, strong visible focus outline, labels on every field and button, image descriptions.
- ✅ Button and text colours meet WCAG AA contrast (the coral and green were darkened).
- ✅ No accessibility overlay widgets.

## 8. Security and admin
- ✅ No API keys or passwords in this repository.
- ✅ Content Security Policy and referrer policy on every page; guest records checked before display; 6-character booking references and 6-digit PINs from Web Crypto; PBKDF2-encrypted stay records; login locks after 5 wrong PINs.
- ✅ `.htaccess` forces HTTPS and sends kivuresort.com to www.kivuresort.com.
- 🟡 The guest login, reviews, availability and staff dashboard need a real backend before launch (for example Frappe/ERPNext), with strong staff passwords, two-factor sign-in and the least access each person needs.
- 🟡 Daily backups on the server and the booking database, with one restore tested.
- 🟡 Keep the server and backend updated.

## 9. Switching the domain
- 🟡 Lower the DNS TTL a day before, then switch.
- 🟡 Check old URLs redirect, www and non-www both reach the site, and every mailbox still sends and receives.
- 🟡 Final check on a real mid-range Android phone on mobile data, including one booking and one food order.

## 10. After launch
- 🟡 One person owns and records the domain, hosting, GitHub, Google and email logins.
- 🟡 Review the legal pages and prices every 6 to 12 months and remove expired offers.
- 🟡 Someone checks info@kivuresort.com for "Data request" emails and replies promptly.
