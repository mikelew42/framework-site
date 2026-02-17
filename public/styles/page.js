import app, { el, div, h1, h2, h3, h4, p, is, section, style, ul, li, code, rewidth, a } from "/app.js";

// app.$root.ac("flex pad");

style(`
    .sub { 
        position: relative;

    }

	.stretchy { position: absolute; inset: 0; }
`);

div.c("flex auto pad gap", () => {

	for (const sub of ["layout", "sections", "text"]) {
		
		div.c("sub zoom-50", () => {
			a.c("stretchy").href("/styles/" + sub + "/");
		}).href("/styles/" + sub + "/").lazy(import.meta, "./" + sub + "/page.js");
	}
});