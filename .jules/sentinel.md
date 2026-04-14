## 2025-05-15 - [Vite singlefile CSP constraints]
**Vulnerability:** Lack of Content Security Policy (CSP).
**Learning:** This project uses `vite-plugin-singlefile`, which inlines all CSS and JS into the `index.html`. This requires the CSP to include `'unsafe-inline'` for `script-src` and `style-src` to function correctly, unless hashes are pre-calculated for all inlined blocks.
**Prevention:** When using inlining plugins, ensure the CSP is balanced between security and functionality, or use a build step to generate SRI hashes for the inlined content.
