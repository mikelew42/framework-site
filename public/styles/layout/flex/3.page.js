import app, { el, div, h1, h2, h3, h4, p, is, section, style, ul, li, code, rewidth, button } from "/app.js";

app.$root.ac("page");

style(`
    .small { zoom: 0.5}
`);

style(`
    label { user-select: none; }`);

h1("Flex/3 Column");

// 3-column layout using .flex.three utility
section(() => {
    h3(".flex.three (smart columns)");
    p("Uses calc(((var(--column) * 3) - 100%) * 999) to show 3 columns when wide, 1 when narrow.");
    rewidth.c("mb", () => {
        div.c("flex three viz all-pad dark small gap pad", () => {
            for (let i = 0; i < 3; i++) {
                p().filler("1-2s");
            }
        }).style("--column", "10em");
    });
});

// 3-column using flex-basis
section(() => {
    h3(".flex.wrap with flex-basis: 33%");
    rewidth.c("mb", () => {
        div.c("flex wrap viz all-pad dark small", () => {
            for (let i = 0; i < 6; i++) {
                p().filler("1-2s").style("flex", "1 1 33%");
            }
        });
    });
});

// 3-column auto with different column widths
section(() => {
    h3(".flex.auto with --column: 15em");
    p("Wraps to fewer columns as width decreases.");
    rewidth.c("mb", () => {
        div.c("flex auto viz all-pad dark small gap", () => {
            for (let i = 0; i < 6; i++) {
                p().filler("1-2s");
            }
        }).style("--column", "15em");
    });
});
