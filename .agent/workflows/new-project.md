---
description: Create project directories (and page.js) for new projects (conversations).
---

We're going to create a new project (directory) in the /public/ai/ directory, using lowercase-hyphen form.

You're going to create ai/<project-name>/page.js.

Use the ai/page.js as a template.

Add a new GridNavItem to the ai/page.js so I can easily browse the projects.

For the rest of the conversation, you can modify the /<project-name>/page.js, create new /<project-name>/sub/page.js, etc.

ai/<project-name>/page.js will be rendered at /ai/project-name/ in the browser, and so you would use a("Link Text").href("sub/") on that page to link to /ai/project-name/sub/page.js.

When possible, create interactive, concise UX for understanding the project's problem + solution.  Try to summarize the essentials on the first page, and link to additional information when necessary.

When opening the browser to test the project, do not take screenshots or screen recordings, as this eats up the token allowance way too fast.