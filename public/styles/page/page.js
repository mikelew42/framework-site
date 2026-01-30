import app, { el, div, h1, h2, h3, h4, p, is, section, style, ul, li, code, rewidth, View } from "/app.js";
import "/framework/core/View/ResizeObserver.js";

app.$root.fs = div();
app.$root.prepend(app.$root.fs);
app.$root.ac("page").resize(() => {
    // console.log(app.$root.compute()["font-size"]);
    app.$root.fs.text(app.$root.compute()["font-size"]);
});

app.$html = new View({
    tag: "html",
    el: document.documentElement,
    capture: false,
});

app.$html.fs = div();
app.$root.prepend(app.$html.fs);
app.$html.resize(() => {
    // console.log(app.$root.compute()["font-size"]);
    app.$html.fs.text(app.$html.compute()["font-size"]);
});

style(`
    html { font-size: clamp(0px, 1.2vw, 20px); }
    .page:has(section){
        background: none;
    }

    .page > section { padding: 3rem 4rem; background: white; margin: 0 0 0.25em; }
`);

// section(() => {
    h1("Page");

// });

section(() => {
	h2().filler("3-6w").ac("cap");
	p().filler("2-4s");
	p().filler("2-4s");
});


section(() => {
	h2().filler("3-6w").ac("cap");
	p().filler("2-4s");
	p().filler("2-4s");
	p().filler("2-4s");
});

