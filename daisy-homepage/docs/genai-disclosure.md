# GenAI generation record

## Tool, model, and date

OpenAI Codex, GPT-6 family according to the assistant runtime, September 28, 2026. The exact backend snapshot/version was not available. Daisy should record the visible model selector label or session export if the course requires an exact version; no snapshot is guessed here.

## User prompt

> 根据用户上传的《Project 1: Your personal home page》作业要求，先解释作业要求，再帮用户完成一个可提交的个人主页项目。项目应严格覆盖 rubric：vanilla HTML5/CSS3/ES6+、前端静态站点、ES6 modules、至少两个普通 HTML 页面和第三个 AI-generated page、原创 JS 功能、原创创意组件、资源分文件夹、meta author/description/icon、所有图片 alt、语义化标准标签、清晰 CSS（不用 !important）、flexbox/grid、Prettier/W3C/ESLint 兼容、package.json(type=module)、MIT LICENSE、README（Author/Class Link/Objective/Screenshot/build instructions/GenAI disclosure）、以及 Design Document（project description/user personas/user stories/design mockups）。尽量生成完整项目文件，并说明哪些部分仍需用户亲自完成，例如公开视频、Google Form、code review、部署 URL。用户是 Daisy Yuan；个人主页内容可围绕其 CS/SWE 背景和项目经历，但不要放敏感或不必要的个人信息。

Follow-up from Daisy:

> 这个ESLint，我可以去哪里找呢

Daisy later supplied the course configuration with the message:

> 我找到**ESLint了**

## Implementation brief used by the assistant

The assistant translated the request into a static engineering notebook with an ink/electric-blue visual identity; Home, Projects, and AI Lab pages; an original engineering-priority selector; static project cards with filtering; a qualitative AI tradeoff mixer; local assets; responsive and accessible behavior; and explicit concept labels because real project histories were not supplied. This paragraph is a summary of the implementation plan, not a claimed extra user prompt or a separate model call.

## How AI was used

AI read the assignment, drafted all three HTML pages, shared CSS, JavaScript modules, local SVG diagram/favicon, build and preview scripts, tests, README, design document, and submission guide. It also ran checks and revised defects. There was no separate image-generation model or external image asset.

`ai-lab.html` is the designated AI-generated third page. The two regular pages were also AI-assisted; they must not be described as entirely human-authored. “Original” here means custom site-specific code and design, not proof of unaided student authorship or instructor approval.

## Human input and remaining responsibility

Daisy supplied the name, intended CS/SWE theme, and requested rubric. No real project descriptions were supplied at generation time. Daisy later provided the course `eslint.config.js`; the assistant integrated its unchanged rules, added its required dependencies, aligned formatting, and reran validation. In a later revision, Daisy supplied a résumé and requested work experience, projects, and LinkedIn. The concept entries were replaced with résumé-based project summaries and Rivian/Meta experience was added to the homepage. The résumé’s embedded LinkedIn URL was used; private contact information and the PDF were not copied into the site. Daisy should review and personalize the content, read and understand the code, record the actual visible model label, confirm AI policy, and complete public deployment, narrated video, form, and code review.

## Verification limits

The generation record and QA report distinguish checks actually run from checks still required. No automatic check establishes that coursework complies with an instructor's authorship policy.

## Résumé-based update

User request: “这是我的简历，我希望你把我的工作经历和项目经历更新进去，还有我的领英账号”. AI extracted and summarized the supplied résumé, added Rivian and Meta roles, SQL Master Class and Support-Ticket RAG Assistant, and the embedded LinkedIn link. Selected metrics reproduce the résumé and are not independent measurements. No new model or external verification was used.

## Personal style update

Daisy requested the full name in the header, removal of the homepage portfolio entry, cuter wording and colors, and hobbies: movies, shopping, cats, and food. AI applied a pink/plum theme, added four hobby cards, retained only the two résumé projects, and adjusted their counts and links. Hobby icons are Unicode emoji, not generated images.
