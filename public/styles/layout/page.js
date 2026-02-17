import app, { el, div, h1, h2, h3, h4, p, is, section, style, ul, li, a } from "/app.js";

// app.$root.ac("pad");

// div.c("content page flex-1", () => {
    h1("Layout");
// });

for (const sub of ["flex", "grid"]) {

	a.c("sub zoom-50")
		.href("/styles/layout/" + sub + "/")
		.lazy(import.meta, "./" + sub + "/page.js");
}