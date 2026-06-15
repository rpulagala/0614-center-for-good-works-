# Center for Good Works — Website

Static single-page website for the Center for Good Works retreat and event space in Kankakee, Illinois.

**Live site:** https://rpulagala.github.io/0614-center-for-good-works-/  
**GitHub repo:** https://github.com/rpulagala/0614-center-for-good-works-

---

## Stack

Plain HTML/CSS/JS — no build step, no dependencies, no framework.  
Hosted on GitHub Pages from the `main` branch root.

---

## File Structure

```
index.html              Single-page website
README.md               This file
CLAUDE.md               AI assistant context and guidelines
package.json            Dev tooling only (Playwright)
check-mobile.js         Playwright mobile audit script
images/
  sUNSET.jpg            Hero background
  River View Great Room.jpg
  Canoeing.jpeg
  AV & Rob Woodworking.jpg
  Sarina Archery 2.jpg
  Gathering Room.jpeg
  Gathering to Staircase.jpeg
  Kitchen.jpeg
  Dining.jpg
  Bob n Pia Hike.jpg
  Bike Trail.jpg
  On the trail 1.jpg
  River Trail.jpg
  Fire.jpg
  Learn & Grow.jpg
  totum pole.jpg
  Painting.JPG
```

---

## Page Sections

| # | Section | Description |
|---|---|---|
| 1 | Hero | Full-screen sunset photo, title, tagline, dual CTAs |
| 2 | Welcome | About the space, MKP heritage, location pills |
| 3 | Experience | Three image pillars: Relax / Learn & Grow / Activities |
| 4 | Journey | Six-step arc from arrival to departure |
| 5 | Spaces | Gathering Room, River View Great Room, Kitchen, Bedrooms |
| 6 | Activities | Area amenities list with mosaic images |
| 7 | Getting Here | Drive times, Amtrak, shuttle bus info |
| 8 | Host a Retreat | Packages, offerings grid, curated features |
| 9 | Contact | Inquiry form + email/phone/location |

---

## Design Decisions

- **Base font size: 20px** — set on `html {}` so all `rem` values scale from it. Intentionally larger than default (16px) for 60+ audience readability.
- **Color palette:** forest green `#2D5016`, warm earth `#7A5230`, gold `#C8A45A`, cream `#FAF8F5`
- **Mobile breakpoints:** 800px (tablet/mobile) and 520px (small phone)
- **Scroll reveal:** `IntersectionObserver` animates elements into view as the user scrolls
- **Ken Burns hero:** hero background starts at `scale(1)` and zooms to `scale(1.04)` on load — starts normal size to avoid overflow on small screens

---

## Mobile Testing

Uses Playwright with Chromium. Run the audit script:

```bash
node check-mobile.js
```

Tested devices: iPhone SE (375px), iPhone 14 (390px), Android (360px).

---

## Deployment

Push to `main` — GitHub Pages publishes automatically from the repo root.

```bash
git add .
git commit -m "your message"
git push
```
