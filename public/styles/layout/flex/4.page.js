import app, { el, div, h1, h2, h3, h4, p, is, section, style, ul, li, code, rewidth, button } from "/app.js";

app.$root.ac("page");

style(`
    .small { zoom: 0.5}
`);

style(`
    label { user-select: none; }`);

h1("Flex/4 Column");

// 4-column using flex-basis 25%
section(() => {
    h3(".flex.wrap with flex-basis: 25%");
    rewidth.c("mb", () => {
        div.c("flex wrap viz all-pad dark small gap", () => {
            for (let i = 0; i < 8; i++) {
                div(() => {
                    p().filler("1-2s");
                }).style("flex", "1 1 calc(25% - 0.75em)");
            }
        });
    });
});

// 4-column auto with smaller --column
section(() => {
    h3(".flex.auto with --column: 8em");
    p("Wraps responsively based on container width.");
    rewidth.c("mb", () => {
        div.c("flex auto viz all-pad dark small gap", () => {
            for (let i = 0; i < 8; i++) {
                p().filler("1-2s");
            }
        }).style("--column", "8em");
    });
});

// 4 equal columns with .all-1
section(() => {
    h3(".flex.all-1 (equal widths, no wrap)");
    p("All children get flex: 1.");
    rewidth.c("mb", () => {
        div.c("flex all-1 viz all-pad dark small gap", () => {
            for (let i = 0; i < 4; i++) {
                p().filler("1-2s");
            }
        });
    });
});
