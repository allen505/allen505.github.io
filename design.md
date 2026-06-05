# Design System and Guidelines

This document outlines the design principles and styling guidelines for Allen Abraham's professional portfolio website.

## Core Philosophy

1. **Modern Aesthetics**: The design must feel premium, state-of-the-art, and engaging. We favor clean layouts, subtle micro-animations, and vibrant but professional color palettes.
2. **Consistency**: UI elements (buttons, cards, typography, spacing) should remain consistent across the entire website. Re-use existing patterns rather than creating ad-hoc solutions.
3. **Configurability**: The design should be easily configurable. Whenever possible, rely on CSS variables (Custom Properties) or a unified SCSS structure to define universal colors, fonts, and spacing.

## Typography

- **Primary Font**: `Poppins` (Google Fonts)
  - Weights used: 100, 200, 300, 400, 500, 600, 700, 800, 900
- Ensure modern typographic hierarchy. Headings (`h1`, `h2`, `h3`) should stand out clearly from body text. Use line-height and letter-spacing to improve readability and visual appeal.

## Color Palette

The site uses a specific color scheme defined in its stylesheets. When adding new elements, adhere to these colors to maintain brand consistency.

*Note for future updates: If redesigning or introducing new colors, try to define them as CSS variables in the `:root` scope so they can be universally applied and updated easily.*

**Example Variable Structure (Recommended):**
```css
:root {
  --primary-color: #A70AF7; /* Example accent color */
  --text-color: #333333;
  --bg-color-light: #ffffff;
  --bg-color-dark: #f8f9fa;
  --highlight-color: rgba(167, 10, 247, 0.1);
}
```

## UI Components

### Buttons
- Buttons should have smooth hover transitions (e.g., color fills, slight upward translation, or shadow changes).
- Maintain consistent padding and border-radius.

### Cards & Sections
- Use subtle box-shadows to create depth (Glassmorphism or soft modern shadows).
- Ensure ample padding/margins (whitespace) to prevent the UI from feeling cluttered.
- Section transitions should be smooth.

### Animations
- The site uses `animate.css` and `AOS.js` for scroll animations.
- When adding new content blocks, apply appropriate `data-aos` attributes or `ftco-animate` classes to ensure they fade in smoothly, keeping the site feeling dynamic and alive.

## Best Practices for Developers/Agents

- **Do NOT use inline styles** unless absolutely necessary for dynamic JavaScript behavior.
- Use the existing SCSS/CSS structure. If adding a completely new feature, create reusable CSS classes.
- Avoid generic browser defaults.
- Always check responsive behavior on mobile and tablet breakpoints. The site uses Bootstrap 4 grid classes (`col-md-*`, `col-lg-*`) to manage responsiveness.
