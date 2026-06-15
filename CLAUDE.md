# CLAUDE.md — Center for Good Works Website

Context for Claude Code when working on this project.

---

## What This Is

A static single-page website for **Center for Good Works**, a retreat and event space in Kankakee, Illinois. The site targets groups looking to host retreats, workshops, and community events.

**Live:** https://rpulagala.github.io/0614-center-for-good-works-/  
**Repo:** https://github.com/rpulagala/0614-center-for-good-works-  
**Deploy:** push to `main` → GitHub Pages publishes automatically (takes ~1 min)

---

## Architecture

Single file: `index.html` contains all HTML, CSS, and JS inline. No build step, no framework, no npm dependencies (Playwright is dev-only for testing).

Images live in `images/` and are referenced with URL-encoded paths (spaces → `%20`, `&` → `%26`).

---

## Audience

Primary users are **60+ adults**. This drives key decisions:
- Base font size is `20px` on `html {}` (not the browser default 16px)
- All sizing uses `rem` so everything scales from that single value
- If asked to change font size, adjust `html { font-size: Xpx; }` — do not hunt individual rules
- Line heights are generous (1.72–1.85)

---

## CSS Architecture

All styles are in a single `<style>` block in `index.html`.

**Key rules to know:**
- `html { font-size: 20px; }` — controls all text size site-wide
- Mobile breakpoints: `@media (max-width: 800px)` and `@media (max-width: 520px)`
- Colors are CSS variables defined in `:root` — always use variables, not hex values directly
- `.reveal` + IntersectionObserver handles scroll animations — elements start `opacity:0`

**Color variables:**
```css
--forest:       #2D5016   /* primary green, nav, buttons */
--forest-light: #4A7A28   /* hover states, accents */
--earth:        #7A5230   /* Getting Here section background */
--gold:         #C8A45A   /* accent, eyebrows, dividers */
--cream:        #FAF8F5   /* main background */
--warm-white:   #F3EDE3   /* alternate section background */
--charcoal:     #242424   /* dark sections (Experience, Contact) */
```

---

## Section IDs

Use these for anchor links and JS targeting:

| ID | Section |
|---|---|
| `#hero` | Hero / landing |
| `#about` | Welcome |
| `#experience` | Three pillars |
| `#journey` | Six-step journey |
| `#spaces` | Spaces / rooms |
| `#activities` | Area activities |
| `#location` | Getting here |
| `#host` | Host a retreat |
| `#contact` | Contact form |

---

## Images

All 17 images are in `images/`. Filenames have spaces and special characters — always URL-encode in `src` attributes:

```html
<!-- correct -->
<img src="images/River%20View%20Great%20Room.jpg">
<img src="images/AV%20%26%20Rob%20Woodworking.jpg">

<!-- wrong -->
<img src="images/River View Great Room.jpg">
```

**Hero background** is set via CSS (`background: url('images/sUNSET.jpg')`), not an `<img>` tag.

---

## Mobile Testing

Run the Playwright audit before pushing layout changes:

```bash
node check-mobile.js
```

This tests iPhone SE (375px), iPhone 14 (390px), Android (360px) and checks for horizontal overflow, section layout issues, and nav alignment. Node and Playwright are already installed locally.

To take section-by-section screenshots for visual review, update `check-mobile.js` to use `file:///` URLs for local testing before pushing.

---

## Known Decisions & Why

- **Hero Ken Burns starts at `scale(1)`** not `scale(1.06)` — starting zoomed out caused `scrollWidth` overflow on iPhone SE; reversed to zoom-in instead.
- **`FireTable.jpg` removed from Host section** — two stacked images pushed the Contact section down; now shows only `Fire.jpg`.
- **`white-space: nowrap` on `.dist-time`** — "5 min" was wrapping to two lines on mobile without it.
- **`<br>` removed from hero subtitle** — forced a bad line break on narrow screens; text now wraps naturally.
- **Hero title uses `clamp(2rem, 8vw, 5.5rem)`** — minimum was reduced from `2.8rem` to `2rem` to prevent the title being too large on 320px phones.

---

## Contact Info (used throughout the site)

- Email: AvBbRetreats@gmail.com
- Phone: (847) 877-5066
- Website: AvBbRetreats.com
- Location: Kankakee, Illinois — along the Kankakee River, 5 min from Amtrak
