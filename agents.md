# AI Agent Guidelines

This document provides context, constraints, and instructions for any AI assistant or agent modifying this repository.

## Context

- This is the **professional portfolio website** for **Allen Abraham**, a software developer.
- The website is hosted on **GitHub Pages (github.io)**. Because of this, the stack is entirely static.
- **Primary Technologies**: Vanilla HTML, CSS, and JavaScript. Do not introduce server-side logic or complex build pipelines (like Webpack, React, Next.js) unless explicitly requested by the user.

## Nature of Updates

- The general structure of the website is relatively stable.
- Most updates requested by the user will be to **add or modify information** such as:
  - New work experiences
  - New projects
  - Recent studies or certifications
  - Small stylistic tweaks or detail updates
- When updating sections, try to maintain the structural integrity and semantic HTML used throughout the rest of the site (e.g., using existing classes for the resume timeline).

## Design Philosophy

- **Latest Technology/Designs**: The user strongly prefers using the latest modern design trends and web technologies whenever possible.
- If you are asked to design a new component or redesign an existing one, do not default to plain or outdated styles. Aim for premium, sleek, and modern aesthetics.
- Prioritize making styles **configurable and consistent** (e.g., using CSS variables) as outlined in `design.md`.

## Workflow Guidelines

1. **Check Existing Patterns**: Before adding new HTML structures or CSS classes, look for existing patterns in `index.html` and the `css/`/`scss/` folders.
2. **Assets**: Any new images should be placed in `assets/images/Portfolio/` (or the appropriate subfolder) and properly linked using relative paths.
3. **No Build Steps**: Remember that changes to CSS or JS should be directly reflected in the files served to GitHub Pages. While there is an `scss/` folder, ensure any SCSS compilation (if applicable and requested) is handled, or simply write to the CSS directly if that's the prevailing workflow.
4. **Preserve Content**: Do not delete existing experiences or projects unless instructed. When adding new entries, place them chronologically in the correct section.
