# personal_portfolio

Personal portfolio website built with plain HTML, CSS, and vanilla JavaScript 
— no frameworks or build tools required. Open `index.html` directly in a browser.

---

## File Structure

```
personal_portfolio/
├── index.html           # Main portfolio page
├── style.css            # External stylesheet
└── README.md
```

---

## index.html — Page Structure
The file is a single-page layout with all CSS and JavaScript embedded inside the HTML file. 
No external dependencies except Google Fonts.

### Document Head (`<head>`)

| Element | Purpose |
|---|---|
| `<meta charset="UTF-8">` | Full Unicode support |
| `<meta name="viewport">` | Responsive scaling on mobile |
| `<title>` | Browser tab title |
| `<link rel="preconnect">` (×2) | Early DNS connection to Google Fonts servers |
| `<link rel="stylesheet">` | Loads **Inter** (body font) and **Fira Code** (monospace) from Google Fonts |
| `<style>` | All CSS written inline — no external stylesheet |

---

### Page Sections (HTML Body)

The page is made up of 7 sections + a sticky header and footer, all stacked vertically.

```
<header>         ← Sticky navbar
<section#hero>   ← 01. Landing / Intro
<section#about>  ← 02. About Me
<section#skills> ← 03. Tech Stack
<section#projects> ← 04. Featured Projects
<section#experience> ← 05. Work Experience
<section#contact> ← 06. Contact
<footer>         ← Footer
```

### JavaScript Functions (`<script>`)

All JS is embedded at the bottom of `<body>`.

| Function | Trigger | Behavior |
|---|---|---|
| `toggleMenu()` | Hamburger button `onclick` | Toggles `.open` class on both `.mobile-menu` and `.hamburger` — shows/hides menu and animates lines to ✕ |
| `closeMenu()` | Each mobile menu link `onclick` | Removes `.open` from menu and button after navigating to a section |
| `handleSubmit(e)` | Form `onsubmit` | Prevents page reload; changes submit button text to "Sent! ✅" and disables it; resets button and form after 3 seconds |

---

### Responsive Breakpoints

| Breakpoint | Changes |
|---|---|
| `≤ 768px` | Desktop nav hidden → hamburger shown; hero becomes single column, text centered; about image hidden; projects and contact stack to 1 column |
| `≤ 480px` | Section padding reduced; skill grid uses narrower `110px` minimum card width |

---

### How to Customize

- **Profile photo** — replace `<div class="hero-avatar-placeholder">🧑‍💻</div>` with `<img src="photo.jpg" class="hero-avatar" alt="Miu" />`
- **About photo** — replace `<div class="about-photo">🧑‍💻</div>` with `<img src="photo.jpg" class="about-photo" alt="Miu" />`
- **Projects** — update the 3 `.project-card` blocks with real names, descriptions, tech tags, and live/GitHub URLs
- **Experience** — edit the 3 `.timeline-item` blocks with real dates, roles, and companies
- **Social links** — update `href` values in the contact section and footer to real profile URLs
- **Colors** — change the CSS variables in `:root` to retheme the entire site instantly

### Q&A

**Q1: Can we add tag render in head?**

No. The `<head>` is for metadata — information the browser needs before rendering the page. Tags that produce visible output (like `<p>`, `<div>`, `<img>`) are ignored or cause invalid HTML when placed inside `<head>`. The only tags that belong in `<head>` are metadata tags such as `<meta>`, `<title>`, `<link>`, `<script>`, and `<style>`.

---

**Q2: Why does `<style>` have to be in `<head>`?**

It doesn't have to be, but it should be. The browser parses the page top-to-bottom. If `<style>` is placed inside `<body>`, the browser may render elements before the styles are applied — causing a brief flash of unstyled content (FOUC). Putting `<style>` in `<head>` guarantees that all CSS is loaded before any element is painted on screen.

---

**Q3: Can we use `<div>` instead of every tag?**

Technically yes — `<div>` is a generic block container and the browser will render the page. However it is bad practice because:

| Semantic tag | What it communicates |
|---|---|
| `<header>` | This block is the site header |
| `<nav>` | This block contains navigation links |
| `<section>` | This is a standalone thematic section of the page |
| `<footer>` | This block is the site footer |
| `<h1>`–`<h6>` | This text is a heading at a specific level |
| `<button>` | This element is an interactive button |

Screen readers, search engines, and browser accessibility tools all rely on these tags to understand the page. Using only `<div>` makes the page harder to navigate, hurts SEO, and breaks accessibility.

---

**Q4: Why use `<section>` instead of `<div>`?**

`<div>` means "generic container with no semantic meaning." `<section>` means "a self-contained thematic block of content." The difference matters in three ways:

1. **Accessibility** — screen readers announce `<section>` as a landmark region, allowing users to jump between sections. A page full of `<div>` has no landmarks.
2. **SEO** — search engines give more weight to content inside semantic elements because the tag signals what kind of content it is.
3. **Readability** — `<section id="about">` tells any developer reading the code what that block represents. `<div id="about">` requires the reader to infer it from the id alone.

Use `<div>` when you need a wrapper purely for styling or layout with no semantic meaning (e.g., a flex container inside a section). Use `<section>` when the block represents a distinct piece of content on the page.

---

**Q5: What is difference between <div>, <p>, <span>?**

| | `<div>` | `<p>` | `<span>` |
|---|---|---|---|
| **Type** | Block | Block | Inline |
| **Meaning** | Generic container, no semantic meaning | A paragraph of text | Generic inline container, no semantic meaning |
| **Default behavior** | Starts on a new line, takes full width | Starts on a new line, takes full width, adds top/bottom margin | Flows inline with surrounding text, only as wide as its content |
| **When to use** | Grouping/layout with no semantic meaning (flex/grid wrappers, card shells) | A block of prose text | Styling or targeting a word/phrase inside a larger block |

Key practical differences:

- `<p>` carries semantic meaning — it tells the browser, screen readers, and search engines "this is a paragraph." `<div>` and `<span>` carry no meaning on their own.
- `<p>` adds default vertical margin above and below; `<div>` does not.
- `<span>` lives *inside* text content (e.g., highlight one word in a sentence). `<div>` and `<p>` always break onto their own line.

Rule of thumb: use `<p>` for text you'd describe as a sentence or paragraph, `<span>` to style part of that text, and `<div>` for everything else that's purely structural.

---

**Q6: What is the structure of HTML?**

Every HTML document follows this skeleton:

```
Document
└── <html>               ← root element, wraps everything
    ├── <head>           ← metadata (not visible)
    │   ├── <meta>       ← character set, viewport, SEO info
    │   ├── <title>      ← browser tab title
    │   ├── <link>       ← external CSS, fonts
    │   └── <style>      ← embedded CSS
    └── <body>           ← visible page content
        ├── <header>     ← site header / navbar
        ├── <main>       ← primary content area
        │   ├── <section>
        │   ├── <article>
        │   └── ...
        ├── <footer>     ← site footer
        └── <script>     ← JavaScript (usually at bottom of body)
```

In this portfolio specifically:

```
<html>
└── <head>   fonts, CSS variables, all embedded styles
└── <body>
    ├── <header>            sticky navbar
    ├── <section id="hero">
    ├── <section id="about">
    ├── <section id="skills">
    ├── <section id="projects">
    ├── <section id="experience">
    ├── <section id="contact">
    ├── <footer>
    └── <script>            toggleMenu, closeMenu, handleSubmit
```
