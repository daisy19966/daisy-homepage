# Daisy Yuan — Personal Homepage

## Author

Daisy Yuan. Professional details are summarized from Daisy’s supplied résumé. Telephone, personal email, and the original résumé PDF are omitted from the public site.

## Class Link

[Course Canvas page](https://northeastern.instructure.com/courses/261032) · [Project 1 assignment](https://northeastern.instructure.com/courses/261032/assignments/3396151)

These links come from the supplied assignment PDF and may require course login. Daisy’s supplied résumé lists an MS in Computer Science at Northeastern University, expected May 2027.

## Project Objective

Create an accessible, responsive, front-end-only personal homepage in vanilla HTML5, CSS3, and ES6+. Visitors can learn about Daisy's engineering interests, browse a project notebook, and explore design tradeoffs. The visual identity uses plum, berry pink, editorial typography, and a distinctive interactive “engineering desk.”

## Pages and features

- `index.html`: personal introduction, work experience, engineering desk, working process, and four hobby cards.
- `projects.html`: SQL Master Class and Support-Ticket RAG Assistant; filter by Web or Systems.
- `ai-lab.html`: designated AI-generated page with a keyboard-accessible tradeoff mixer and AI disclosure.

The engineering desk and filtering are site-specific JavaScript, not library widgets. All browser scripts use ES modules. The first two pages also received AI assistance; this is disclosed rather than represented as unaided student work. Ask the instructor whether that level of assistance is permitted.

## Run locally and build

Prerequisite: Node.js 20.19+ or a newer supported release, with npm.

```sh
npm ci
npm start
```

Open `http://localhost:4173`. Stop the server with Ctrl+C. Use an HTTP server because browsers restrict ES module imports from `file://` URLs. The local server is a development utility only; the deployed site has no backend.

```sh
npm run format:check
npm run lint
npm test
npm run build
```

`npm run build` copies the three pages and static resources into `dist/`. No compilation or framework is required. Upload the contents of `dist/` to a static host. All internal asset links are relative, so a repository subdirectory is supported. Do not publish `node_modules/`.

To reformat after edits, run `npm run format`. Development dependencies are listed and locked in `package.json` and `package-lock.json`; there are no browser/runtime dependencies.

## Structure

```text
index.html / projects.html / ai-lab.html
css/       Shared responsive styles
js/        Browser ES modules and interaction data
images/    Local favicon and process diagram
scripts/   Local development server, static build, small logic tests
docs/      Design document, mockups, screenshots, disclosure, QA, submission guide
```

## Accessibility and implementation

Semantic landmarks and native links, buttons, and a range input; a skip link; visible focus outlines; live result announcements; alt text for the process image; reduced-motion support; readable content without JavaScript. CSS uses Grid and Flexbox and contains no `!important`. No jQuery, framework, component library, third-party font, analytics, or form submission is used.

## Design Document

See [the full design document](docs/design-document.md), including project description, personas, user stories, desktop/mobile mockups, and design decisions. [View the mockups](docs/mockups.svg).

## GenAI disclosure

- Tool/provider: OpenAI Codex by OpenAI.
- Model family: GPT-5 (as identified by the assistant runtime). Exact model snapshot/version is not exposed here; record the model name shown in your own session before submission. Do not invent a snapshot identifier.
- Date: September 28, 2026.
- Scope: AI assisted with all HTML, CSS, JavaScript, SVG assets, documentation, test code, and packaging. `ai-lab.html` is the explicitly designated AI-generated third page.
- Prompts and workflow: [Full generation record](docs/genai-disclosure.md), including the user request and implementation brief.
- Human role: Daisy supplied the name, requested requirements, and intended subject area. Daisy still needs to verify biographical wording, inspect and understand the code, and complete course submission steps. Daisy also supplied the course ESLint configuration, which has now been integrated and checked.
- Work history and selected performance metrics come from the supplied résumé; the AI mixer’s qualitative tradeoffs are not benchmark results.

## License

[MIT](LICENSE). Copyright © 2026 Daisy Yuan. The original course PDF is not redistributed in this project.
