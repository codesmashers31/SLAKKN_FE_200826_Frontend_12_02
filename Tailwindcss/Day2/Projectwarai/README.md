# AI WAR 2030

A responsive, interactive educational dashboard built with **HTML, Tailwind CSS via CDN, custom CSS, and vanilla JavaScript**. No React, npm packages, backend, or build step.

## Run

Open `index.html` in a browser, or serve this directory with your editor's static preview. An internet connection loads Tailwind and Google Fonts. Core custom styling has system-font fallbacks.

## Features

- Eleven hash-routed views with mobile navigation
- Filterable qualitative provider profiles
- Searchable, sortable historical model cards and a comparison table
- Timeline with clearly labeled future projections
- Three future narratives, a year slider, and eight scenario cards
- Seven-level developer roadmap and workflow comparison
- Job-transformation filters and fourteen illustrative AI-enabled roles
- Skill-gap checklist with browser-local persistence and reset
- Clickable agent inspector and selectable simulated AI team builder
- Primary-source links, methodology, keyboard focus styles, and reduced-motion support

## Files

- `index.html`: app shell and Tailwind CDN
- `styles.css`: visual design, responsiveness, and animations
- `data.js`: local content and historical model snapshots
- `app.js`: routing, rendering, and interactions
- `original-page.html`: backup of the pre-existing page
- `smoke-test.cjs`: dependency-free Node smoke checks (optional; not needed to run the app)

## Verification

Run `node smoke-test.cjs` to check view rendering, model filtering and comparison, scenario updates, skill analysis, and team generation against a lightweight DOM stub. These checks validate application logic, not browser layout or full DOM behavior. JavaScript syntax checks also pass. Visual browser verification was unavailable in the build session.

## Content and future integrations

Models describe **2024 announcement snapshots**, not current availability or rankings. Provider sources are linked in the app. Forecasts, job categories, and simulator bars are illustrative. Skill results count selected items against a curated role checklist; they are not employability scores.

The app performs no AI calls or autonomous actions. To add live data, replace the local data boundary with requests to your own backend. Keep secrets in that backend's environment configuration, never in browser JavaScript or a public `.env` file. Tailwind's browser CDN matches this project's requested setup; a deployment requiring a strict content security policy or offline assets would need a separately prepared static stylesheet and local fonts.
