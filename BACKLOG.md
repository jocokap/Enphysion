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
