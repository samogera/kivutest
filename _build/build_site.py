#!/usr/bin/env python3
"""Build the Kivu Resort multi-page website from src/site.tpl.html.

Usage:
  python3 build_site.py --site https://samogera.github.io/kivutest/ --base /kivutest/ --staging --out dist
  python3 build_site.py --site https://www.kivuresort.com/ --base / --out dist      (live site)
"""
import argparse, html, json, os, re, shutil
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "src")

ap = argparse.ArgumentParser()
ap.add_argument("--site", default="https://www.kivuresort.com/")
ap.add_argument("--base", default="/")
ap.add_argument("--out", default=os.path.join(HERE, "dist"))
ap.add_argument("--staging", action="store_true", help="add noindex to every page")
args = ap.parse_args()
SITE = args.site if args.site.endswith("/") else args.site + "/"
BASE = args.base if args.base.endswith("/") else args.base + "/"
OUT = args.out

tpl = open(os.path.join(SRC, "site.tpl.html"), encoding="utf-8").read()

# ---------------------------------------------------------------- split
css = re.search(r"<style>(.*?)</style>", tpl, re.S).group(1)
js = re.search(r"<script>(.*?)</script>", tpl, re.S).group(1)
body = re.search(r"<body[^>]*>(.*?)<script>", tpl, re.S).group(1)

PAGES = json.loads(re.search(r"const PAGES=(\[[^\]]*\])", js).group(1))
STAY_KEYS = re.findall(r"^\s{2}(\w+):\{who:", js, re.M)
SLUG = {"dine": "restaurant", "kids": "kids-park", "safaris": "tours", "msafiri": "msafiri-lodge", "stays": "rooms"}


def page_path(k):
    if k == "home":
        return ""
    if k.startswith("stay-"):
        return "rooms/" + k[5:] + "/"
    return SLUG.get(k, k) + "/"


# ---------------------------------------------------------------- output dirs
KEEP = {"_build", ".git", ".github", "README.md", "GO-LIVE-CHECKLIST.md", ".gitignore", "CNAME"}
if os.path.exists(OUT):
    if os.path.abspath(OUT) == os.path.abspath(HERE) or os.path.abspath(OUT) == os.path.abspath(SRC):
        raise SystemExit("--out must not be the _build folder")
    for name in os.listdir(OUT):
        if name in KEEP:
            continue
        p = os.path.join(OUT, name)
        shutil.rmtree(p) if os.path.isdir(p) and not os.path.islink(p) else os.remove(p)
else:
    os.makedirs(OUT)
A = os.path.join(OUT, "assets")
os.makedirs(os.path.join(A, "img"), exist_ok=True)
os.makedirs(os.path.join(A, "fonts"), exist_ok=True)

# ---------------------------------------------------------------- images
used = sorted(set(re.findall(r"%%([a-z0-9_]+)%%", tpl)))
IMGFILE, DIMS = {}, {}
LIMIT = 200 * 1024


def save_webp(im, path, q):
    while True:
        im.save(path, "WEBP", quality=q, method=6)
        if os.path.getsize(path) <= LIMIT or q <= 40:
            return
        q -= 6


for k in used:
    src = next((os.path.join(SRC, "img", f"{k}.{e}") for e in ("png", "jpg", "webp") if os.path.exists(os.path.join(SRC, "img", f"{k}.{e}"))), None)
    if not src:
        raise SystemExit("missing image " + k)
    im = Image.open(src)
    if src.endswith(".png") and k.startswith("ic_"):
        name = f"{k}.png"
        im.save(os.path.join(A, "img", name), optimize=True)
    elif src.endswith(".png"):
        name = f"{k}.webp"
        im.save(os.path.join(A, "img", name), "WEBP", quality=88, method=6)
    else:
        im = im.convert("RGB")
        maxw = 1920 if k == "flamingos" else (1131 if k.startswith("mp") else 1400)
        if im.width > maxw:
            im = im.resize((maxw, round(im.height * maxw / im.width)), Image.LANCZOS)
        name = f"{k}.webp"
        save_webp(im, os.path.join(A, "img", name), 82 if k.startswith("mp") else 78)
    IMGFILE[k] = name
    DIMS[k] = im.size
# hero small variant + social image
hero = Image.open(os.path.join(SRC, "img", "flamingos.jpg")).convert("RGB")
small = hero.resize((760, round(hero.height * 760 / hero.width)), Image.LANCZOS)
save_webp(small, os.path.join(A, "img", "flamingos-760.webp"), 76)
og = hero.copy()
og_h = round(og.width * 630 / 1200)
top = max(0, (og.height - og_h) // 2)
og = og.crop((0, top, og.width, top + og_h)).resize((1200, 630), Image.LANCZOS)
og.save(os.path.join(A, "img", "og.jpg"), "JPEG", quality=80, optimize=True, progressive=True)
shutil.copy(os.path.join(SRC, "img", "logo.png"), os.path.join(A, "img", "logo-full.png"))

# ---------------------------------------------------------------- fonts
FONTS = [("Inter", 400, "inter-400"), ("Inter", 500, "inter-500"), ("Inter", 600, "inter-600"), ("Inter", 700, "inter-700"),
         ("Inter Display", 400, "interdisplay-400"), ("Inter Display", 500, "interdisplay-500"), ("Inter Display", 600, "interdisplay-600")]
for _, _, f in FONTS:
    shutil.copy(os.path.join(SRC, "fonts", f + ".woff"), os.path.join(A, "fonts", f + ".woff"))
shutil.copy(os.path.join(SRC, "fonts", "LICENSE-Inter.txt"), os.path.join(A, "fonts", "LICENSE-Inter.txt"))
font_css = "".join(
    f'@font-face{{font-family:"{fam}";font-style:normal;font-weight:{w};font-display:swap;src:url(fonts/{f}.woff) format("woff")}}\n'
    for fam, w, f in FONTS)

# ---------------------------------------------------------------- CSS
css_out = font_css + css
css_out = re.sub(r"%%([a-z0-9_]+)%%", lambda m: "img/" + IMGFILE[m.group(1)], css_out)
open(os.path.join(A, "site.css"), "w", encoding="utf-8").write(css_out)

# ---------------------------------------------------------------- JS
js_out = js
js_out = re.sub(r'"%%([a-z0-9_]+)%%"', lambda m: '__R+"assets/img/' + IMGFILE[m.group(1)] + '"', js_out)
js_out = re.sub(r'"url\(%%([a-z0-9_]+)%%\)"', lambda m: '"url("+new URL(__R+"assets/img/' + IMGFILE[m.group(1)] + '",location.href).href+")"', js_out)
assert "%%" not in js_out, re.findall(r".{30}%%.{30}", js_out)[:3]
js_out = js_out.replace('href="#stay-${k}"', 'href="${__R}rooms/${k}/"')
js_out = re.sub(r'href="#([a-z][\w-]*)"', lambda m: f'href="${{__R}}{page_path(m.group(1))}"' if m.group(1) in PAGES else m.group(0), js_out)
js_out = 'var __R=document.documentElement.dataset.root||"";\n' + js_out
for i in range(5):
    im = Image.open(os.path.join(SRC, "img", f"mp{i}.jpg")).convert("RGB")
    im.thumbnail((96, 136)); im.save(os.path.join(A, "img", f"mp{i}-thumb.webp"), "WEBP", quality=70)
js_out = js_out.replace("const ROUTE=", "".join(f'IMG.mp{i}t=__R+"assets/img/mp{i}-thumb.webp";' for i in range(5)) + "\nconst ROUTE=", 1)
open(os.path.join(A, "site.js"), "w", encoding="utf-8").write(js_out)

# ---------------------------------------------------------------- page metadata
STAY_META = {
    "executive": ("Executive room", "Our most spacious room at Kivu Resort, Nakuru: double bed, private bathroom, desk, breakfast, pools and Wi-Fi included."),
    "standard": ("Standard room", "Comfortable single, double or twin rooms a few steps from the pool at Kivu Resort, Nakuru. Breakfast and pools included."),
    "suite": ("Self-catering suite", "Self-catering suites for families and longer stays at Kivu Resort, Nakuru, with the pools, gym and Kids Park on site."),
    "camping": ("Campsite and bunk beds", "Secure, private campsite and bunk rooms for groups, schools and adventurers at Kivu Resort, Nakuru."),
}
META = {
    "home": ("Kivu Resort, Nakuru | Rooms, pools and safaris near Lake Nakuru", "Garden resort off Flamingo Road, Nakuru, close to Lake Nakuru National Park. Rooms, camping, two pools, a restaurant, Kids Park and safaris."),
    "stays": ("Rooms and suites | Kivu Resort, Nakuru", "Executive and standard rooms, self-catering suites, camping and bunks at Kivu Resort, Nakuru. Breakfast, pools, gym and Wi-Fi included."),
    "msafiri": ("Msafiri Lodge, Nakuru town | Rooms from KES 3,500", "Affordable rooms in central Nakuru, close to shops and restaurants. Bed and breakfast, half board and full board rates in Kenya shillings."),
    "dine": ("Restaurant and menu | Kivu Resort, Nakuru", "Kenyan favourites, nyama choma, pizza and fresh juice at Kivu Resort. Tap dishes on our menu to order to your table, poolside or room."),
    "pool": ("Swimming pool, day passes and lessons | Kivu Resort, Nakuru", "Pool day passes from KES 500, swimming coaching, monthly plans and the KivuSwim Club at Kivu Resort, Nakuru. Children’s pool on site."),
    "kids": ("Kids Park | Kivu Resort, Nakuru", "Bouncy castles, a carousel and trampolines for children, plus birthday parties and school visits at Kivu Resort, Nakuru."),
    "safaris": ("Safaris and day trips from Nakuru | Kivu Tours", "Lake Nakuru game drives, Menengai Crater, Lake Naivasha, Hell’s Gate, Lake Bogoria and Maasai Mara trips with Kivu Tours. Plan your trip online."),
    "gym": ("Kivu Gym, Nakuru | Classes and personal training", "Fitness classes, personal training and guest passes at Kivu Gym, Nakuru. Free for resort guests."),
    "events": ("Conferences, team building and events | Kivu Resort, Nakuru", "Conference rooms, lawns for team building and space for training camps in Nakuru. Send an enquiry for a quote."),
    "experiences": ("Pools, gym and facilities | Kivu Resort, Nakuru", "Two pools, a gym, a children’s park, bicycles and game drives at Kivu Resort, Nakuru."),
    "explore": ("Things to do near Kivu Resort, Nakuru", "Lake Nakuru National Park, Hyrax Hill, Menengai Crater and Lake Elmenteita, all within easy reach of Kivu Resort."),
    "gallery": ("Photo gallery | Kivu Resort, Nakuru", "Photos of the pools, rooms, campsite, Kids Park, food and grounds at Kivu Resort, Nakuru."),
    "contact": ("Contact and directions | Kivu Resort, Nakuru", "Kivu Resort is off Flamingo Road, Nakuru. Call or WhatsApp +254 726 026 894 or email info@kivuresort.com."),
    "reviews": ("Guest reviews | Kivu Resort, Nakuru", "Read and write reviews of your stay, meal or trip at Kivu Resort, Nakuru."),
    "privacy": ("Privacy Policy | Kivu Resort", "How Kivu Resort collects, uses and protects your personal data under the Kenya Data Protection Act, 2019."),
    "terms": ("Terms of use and booking terms | Kivu Resort", "The terms for using the Kivu Resort website and booking rooms, food, activities and safaris."),
    "cancellation": ("Cancellation and refund policy | Kivu Resort", "How to cancel a booking at Kivu Resort, Msafiri Lodge or Kivu Tours, and how refunds are paid."),
    "cookies": ("Cookie Policy | Kivu Resort", "The small items this website stores in your browser, and how to change your choice."),
    "mystay": ("My stay | Kivu Resort", "Your booking, room and room charges at Kivu Resort."),
    "admin": ("Staff dashboard | Kivu Resort", "Staff only."),
    "notfound": ("Page not found | Kivu Resort", "This page could not be found."),
}
for k, (n, d) in STAY_META.items():
    META["stay-" + k] = (f"{n} | Kivu Resort, Nakuru", d)
NOINDEX = {"mystay", "admin", "notfound"}

JSONLD = {
    "@context": "https://schema.org", "@type": "Hotel", "name": "Kivu Resort", "url": SITE,
    "image": SITE + "assets/img/og.jpg", "logo": SITE + "assets/img/logo-full.png",
    "telephone": "+254726026894", "email": "info@kivuresort.com",
    "address": {"@type": "PostalAddress", "streetAddress": "Off Flamingo Road", "addressLocality": "Nakuru", "postalCode": "20100", "addressCountry": "KE"},
    "checkinTime": "13:00", "checkoutTime": "10:30", "petsAllowed": False, "priceRange": "KES",
    "amenityFeature": [{"@type": "LocationFeatureSpecification", "name": n, "value": True} for n in ["Swimming pool", "Children's pool", "Restaurant", "Gym", "Free parking", "Free Wi-Fi", "Children's playground", "Conference rooms"]],
}

# ---------------------------------------------------------------- markup helpers
def convert_links(markup, prefix, page="home"):
    def rel(path):
        return (prefix + path) or "./"

    markup = re.sub(r'href="#([a-z][\w-]*)"', lambda m: f'href="{rel(page_path(m.group(1)))}"' if (m.group(1) in PAGES or m.group(1).startswith("stay-")) else m.group(0), markup)
    markup = markup.replace("/_blob/c8291682ec32cf9dd9ae466ba1c5717c", prefix + "assets/kivu-menu.pdf")
    markup = markup.replace('class="consent-link" href="', 'class="consent-link" target="_blank" rel="noopener" href="')

    def img(m):
        attrs, k = m.group(0), m.group(1)
        w, h = DIMS[k]
        src = f'{prefix}assets/img/{IMGFILE[k]}'
        if k == "flamingos" and "hero" not in attrs and 'alt="Flamingos flying over Lake Nakuru"' in attrs:
            pass
        extra = f' src="{src}" width="{w}" height="{h}"'
        if 'alt="Flamingos flying over Lake Nakuru"' in attrs and page != "home":
            attrs = attrs.replace("<img ", '<img loading="lazy" ', 1) if "loading=" not in attrs else attrs
        if 'alt="Flamingos flying over Lake Nakuru"' in attrs and page == "home":
            extra = (f' src="{src}" srcset="{prefix}assets/img/flamingos-760.webp 760w, {src} {w}w" sizes="100vw"'
                     f' width="{w}" height="{h}" fetchpriority="high" decoding="async"')
            attrs = attrs.replace(' loading="lazy"', "")
        return attrs.replace(f'data-img="{k}"', f'data-img="{k}"{extra}', 1)

    markup = re.sub(r'<img [^>]*?data-img="(\w+)"[^>]*>', img, markup)
    assert "%%" not in markup
    return markup


def page_html(key, prefix, base=None):
    vis = "stay" if key.startswith("stay-") else key
    m = body
    m = m.replace('<div class="page" data-page="home">', '<div class="page" data-page="home" hidden>', 1)
    m = m.replace(f'<div class="page" data-page="{vis}" hidden>', f'<div class="page" data-page="{vis}">', 1)
    m = convert_links(m, prefix, key)
    title, desc = META[key]
    url = SITE + page_path(key)
    robots = "noindex, nofollow" if (args.staging or key in NOINDEX) else "index, follow"
    head = f'''<!doctype html>
<html lang="en" data-route="path" data-root="{prefix}" data-page="{key}">
<head>
<meta charset="utf-8">
{f'<base href="{base}">' if base else ''}
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="color-scheme" content="only light">
<meta name="theme-color" content="#ffffff">
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; font-src 'self' data:; img-src 'self' data: blob:; connect-src 'self'; media-src 'self'; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self' https://wa.me">
<meta name="referrer" content="strict-origin-when-cross-origin">
<title>{html.escape(title)}</title>
<meta name="description" content="{html.escape(desc)}">
<meta name="robots" content="{robots}">
<link rel="canonical" href="{url}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Kivu Resort">
<meta property="og:title" content="{html.escape(title)}">
<meta property="og:description" content="{html.escape(desc)}">
<meta property="og:url" content="{url}">
<meta property="og:image" content="{SITE}assets/img/og.jpg">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="{prefix}favicon.ico" sizes="48x48">
<link rel="icon" type="image/png" sizes="32x32" href="{prefix}assets/icons/favicon-32.png">
<link rel="apple-touch-icon" href="{prefix}assets/icons/apple-touch-icon.png">
<link rel="manifest" href="{prefix}site.webmanifest">
<link rel="preload" href="{prefix}assets/fonts/interdisplay-400.woff" as="font" type="font/woff" crossorigin>
{'<link rel="preload" as="image" href="'+prefix+'assets/img/flamingos.webp" imagesrcset="'+prefix+'assets/img/flamingos-760.webp 760w, '+prefix+'assets/img/flamingos.webp '+str(DIMS["flamingos"][0])+'w" imagesizes="100vw" fetchpriority="high">' if key=="home" else ''}
<link rel="stylesheet" href="{prefix}assets/site.css">
{('<script type="application/ld+json">'+json.dumps(JSONLD, ensure_ascii=False)+'</script>') if key in ("home","contact") else ''}
<script src="{prefix}assets/site.js" defer></script>
</head>
<body class="ready" data-page="{vis}">'''
    return head + m + "</body>\n</html>\n"


def write(rel, text):
    p = os.path.join(OUT, rel)
    os.makedirs(os.path.dirname(p), exist_ok=True)
    open(p, "w", encoding="utf-8").write(text)


keys = [k for k in PAGES if k != "notfound"] + ["stay-" + s for s in STAY_KEYS]
for k in keys:
    path = page_path(k)
    depth = path.count("/")
    write(path + "index.html", page_html(k, "../" * depth))
write("404.html", page_html("notfound", "", base=BASE))

# ---------------------------------------------------------------- old site redirects
REDIRECTS = {"signin": "mystay/", "register": "mystay/", "home": "", "index.php": "", "stay": "rooms/", "dine": "restaurant/",
             "safaris": "tours/", "kids": "kids-park/", "msafiri": "msafiri-lodge/"}
for old, new in REDIRECTS.items():
    if old.endswith(".php"):
        continue
    target = "../" + new if new else "../"
    write(f"{old}/index.html", f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Moved | Kivu Resort</title>
<meta name="robots" content="noindex"><link rel="canonical" href="{SITE}{new}"><meta http-equiv="refresh" content="0; url={target}">
<script>location.replace("{target}"+location.hash)</script></head>
<body><p>This page has moved. <a href="{target}">Continue to the new page</a>.</p></body></html>
''')
ht = ["# Apache (.htaccess): send old Kivu website links to the new pages", "RewriteEngine On",
      "RewriteCond %{HTTPS} off", "RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]",
      "RewriteCond %{HTTP_HOST} ^kivuresort\\.com$ [NC]", "RewriteRule ^ https://www.kivuresort.com%{REQUEST_URI} [L,R=301]"]
ng = ["# nginx: put inside the server { } block for www.kivuresort.com"]
for old, new in REDIRECTS.items():
    ht.append(f"RedirectMatch 301 ^/{re.escape(old)}/?$ /{new}")
    ng.append(f"location ~ ^/{re.escape(old)}/?$ {{ return 301 /{new}; }}")
ht += ["ErrorDocument 404 /404.html", ""]
ng += ["error_page 404 /404.html;", "location / { try_files $uri $uri/ =404; }", ""]
write(".htaccess", "\n".join(ht))
write("nginx-redirects.conf", "\n".join(ng))

# ---------------------------------------------------------------- SEO files
from datetime import date
today = date.today().isoformat()
urls = [k for k in keys if k not in NOINDEX]
write("sitemap.xml", '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
      "".join(f"  <url><loc>{SITE}{page_path(k)}</loc><lastmod>{today}</lastmod></url>\n" for k in urls) + "</urlset>\n")
if args.staging:
    write("robots.txt", "# Test copy: please don't index. The live site will be www.kivuresort.com\nUser-agent: *\nDisallow: /\n")
else:
    write("robots.txt", f"User-agent: *\nAllow: /\nDisallow: /admin/\nDisallow: /mystay/\n\nSitemap: {SITE}sitemap.xml\n")
write("llms.txt", f"""# Kivu Resort, Nakuru

> Garden resort off Flamingo Road, Nakuru, Kenya, a short drive from the main gate of Lake Nakuru National Park. Run by Kivu Hospitality, with Msafiri Lodge in Nakuru town and Kivu Tours.

Contact: +254 726 026 894 (phone and WhatsApp), info@kivuresort.com, safaris: adventuresafaris@kivuresort.com
Check-in from 1:00 pm, check-out by 10:30 am. Pets are not allowed. Prices are in Kenya shillings (KES).

## Main pages
- [Rooms and suites]({SITE}rooms/): executive and standard rooms, self-catering suites, camping and bunks. Breakfast, pools, gym and Wi-Fi included. Room rates are confirmed by the front desk and differ for residents and non-residents.
- [Msafiri Lodge]({SITE}msafiri-lodge/): rooms in Nakuru town. Per room per night (KES), bed and breakfast / half board / full board: standard single 3,500 / 4,500 / on request; standard double or twin 5,000 / 7,000 / 9,000; superior single 4,000 / 5,000 / 6,000; superior double or twin 6,000 / 8,000 / 10,000.
- [Restaurant and menu]({SITE}restaurant/): Kenyan and continental food, nyama choma, pizza (450 / 750 / 1,200), juices. Orders for dine in, poolside, room service or take away.
- [Swimming pool]({SITE}pool/): day pass 500; swimming and training 1,000 per day; club members 850 per day; monthly swimming 5,000; monthly swimming and training for club members 6,500 (10 sessions, extra sessions 350); club registration 1,000; Kenya Aquatics fee 600 per year.
- [Kids Park]({SITE}kids-park/): bouncy castles, carousel, trampoline, birthday parties (birthday child free), school and group visits. Prices on request.
- [Gym]({SITE}gym/): classes, personal training, guest passes; free for resort guests. Prices on request.
- [Safaris and trips]({SITE}tours/): Lake Nakuru National Park, Menengai Crater, Hyrax Hill, Lake Elmenteita, Lake Naivasha, Hell's Gate, Thomson's Falls, Mount Longonot, Lake Bogoria, Lake Baringo, Maasai Mara. Travel times are approximate; quotes on request.
- [Events]({SITE}events/): conference rooms, team building and training camps. Quotes on request.
- [Contact]({SITE}contact/)

## Policies
- [Privacy Policy]({SITE}privacy/)
- [Terms]({SITE}terms/)
- [Cancellation and refunds]({SITE}cancellation/)
- [Cookie Policy]({SITE}cookies/)
""")
write(".nojekyll", "")
shutil.copy(os.path.join(HERE, "assets-extra", "kivu-menu.pdf"), os.path.join(A, "kivu-menu.pdf"))
shutil.copy(os.path.join(HERE, "assets-extra", "favicon.ico"), os.path.join(OUT, "favicon.ico"))
shutil.copy(os.path.join(HERE, "assets-extra", "site.webmanifest"), os.path.join(OUT, "site.webmanifest"))
shutil.copytree(os.path.join(HERE, "assets-extra", "icons"), os.path.join(A, "icons"), dirs_exist_ok=True)

print("built", len(keys), "pages into", OUT)
