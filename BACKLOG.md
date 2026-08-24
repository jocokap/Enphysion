# Backlog

Small site-wide improvements deferred from other work. Not urgent, but worth doing
in a single focused pass so the site stays consistent.

---

## 1. Unique `<title>` on every page

**Status:** open
**Raised:** 2026-08-24, while adding team profiles
**Effort:** ~30 min, one commit

Eleven of thirteen pages share the same `<title>Enphysion</title>`. Every search
result and every browser tab reads identically, and the title tag is one of the
strongest on-page SEO signals there is.

Two blog posts already do this correctly, and one of them establishes the
convention to follow: **`Page Name | EnPhysion`**.

### Pages needing a title

| File | Current | Proposed |
|---|---|---|
| `index.html` | `Enphysion` | `EnPhysion \| Movement Is Medicine` — needs a real tagline, see open question |
| `about.html` | `Enphysion` | `About Us \| EnPhysion` |
| `body.html` | `Enphysion` | `Your Body \| EnPhysion` |
| `pricing.html` | `Enphysion` | `Pricing \| EnPhysion` |
| `team.html` | `Enphysion` | `Our Team \| EnPhysion` |
| `faq.html` | `Enphysion` | `FAQs \| EnPhysion` |
| `blog.html` | `Enphysion` | `Blog \| EnPhysion` |
| `blog/how-to-start-mobility-training.html` | `Enphysion` | `How to Start Mobility Training \| EnPhysion` |
| `blog/Reasons-Mobility-Training-Matters-for-Health-and-Peak-Performance.html` | `Enphysion` | `Why Mobility Training Matters for Health and Peak Performance \| EnPhysion` |

### Already correct — leave alone

- `blog/5-Best-Tips-for-Virtual-Physical-Therapy-at-Home.html` — matches the convention exactly

### Needs only the suffix

- `blog/5-Best-Home-Exercise-Programs-for-Adults-Aged-50.html` — good title, missing the ` | EnPhysion` suffix; add it for consistency

### Templates

`template.html` and `blog-template.html` should get an obvious placeholder rather
than a real title, so the next page copied from them doesn't silently inherit
someone else's:

```html
<title>PAGE TITLE HERE | EnPhysion</title>
```

### Open question

`index.html` needs a tagline, not a page name — this is the title that represents
the whole site in search results. "Movement Is Medicine" is drawn from existing
body copy on the team page; confirm with Josh before using it.

### Also noticed

The brand is written **`Enphysion`** in every `<title>` and in `blog.html`'s nav,
but **`EnPhysion`** in body copy, the footer copyright, and the blog post titles.
Pick one — body copy and the footer both favor `EnPhysion` — and normalize it in
the same pass.

---

## 2. Kate needs a real headshot

**Status:** open — blocked on Kate
**Raised:** 2026-08-24, while adding Maggie and Susan
**Effort:** 10 min once a photo exists

`img/kate-osullivan.png` is not a headshot. It is a full-body vacation snapshot taken
at Horseshoe Bend — seated on a canyon rim, wearing sunglasses, face roughly 40px
across in a 400×400 file.

It cannot be fixed by cropping. The source is only 400×400, so zooming to her face
yields a blurry ~80px square. It needs a new photo from Kate.

With four proper portraits now surrounding it, this reads as clearly wrong rather
than merely inconsistent. Ask Kate for a headshot framed like the others — head and
upper shoulders, plain background.

The file is also disproportionately large — 316K for a 400×400 image, versus 24–36K
for the JPEG headshots. Re-encoding as JPEG when the photo is replaced will fix this
too.

---

## 3. Headshot backgrounds are inconsistent

**Status:** open
**Raised:** 2026-08-24, while adding Maggie and Susan
**Effort:** real project, needs a photographer or an editing pass

All five headshots are now the same *shape*. They are not the same *style*:

| Person | Background |
|---|---|
| Josh | mottled purple studio |
| Kate | red canyon (see item 2) |
| Maggie | beige wall |
| Rebecca | neutral gray studio |
| Susan | outdoor green bokeh |

Squaring the images fixed alignment, which was the visible defect. Making the set
genuinely uniform means either a group reshoot against one backdrop or a background
replacement pass on all five. Worth doing if the team page gets a design refresh;
not worth doing on its own.

---

## 4. Instagram footer icon has the wrong alt text

**Status:** open
**Raised:** 2026-08-24, during final review of the team profile additions
**Effort:** ~15 min, one commit — one-word fix repeated across 13 files

Every page's footer has two social icons, and the Instagram one is mislabeled:

```html
<img src="img/facebook.png" alt="facebook">
<img src="img/instagram.png" alt="facebook">
```

A screen reader announces two consecutive links as "facebook", so the Instagram
link has no distinguishing name and is effectively unreachable by name. The fix is
changing the second `alt` to `"instagram"`, but it has to happen in all 13 HTML
files that carry the footer.

This predates the current branch — it goes back to the original migration commit
`e3346d4` — so it was correctly left out of the team-profile work. It surfaced now
because that work just cleaned up the team page's image alt text, which made the
footer's identical-alt-text bug next door easy to spot.

---
