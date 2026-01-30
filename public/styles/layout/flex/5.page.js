import app, { el, div, h1, h2, h3, h4, p, is, section, style, ul, li, code, rewidth, button } from "/app.js";

app.$root.ac("page");

style(`
    .small { zoom: 0.5}
`);

style(`
    label { user-select: none; }`);

h1("Flex/5 Column");

// 5-column using flex-basis 20%
section(() => {
    h3(".flex.wrap with flex-basis: 20%");
    rewidth.c("mb", () => {
        div.c("flex wrap viz all-pad dark small gap", () => {
            for (let i = 0; i < 10; i++) {
                div(() => {
                    p().filler("1-2s");
                }).style("flex", "1 1 calc(20% - 0.8em)");
            }
        });
    });
});

// 5-column auto with small --column
section(() => {
    h3(".flex.auto with --column: 6em");
    p("Wraps responsively.");
    rewidth.c("mb", () => {
        div.c("flex auto viz all-pad dark small gap", () => {
            for (let i = 0; i < 10; i++) {
                p().filler("1s");
            }
        }).style("--column", "6em");
    });
});

// 5 equal columns
section(() => {
    h3(".flex.all-1 (5 equal columns)");
    rewidth.c("mb", () => {
        div.c("flex all-1 viz all-pad dark small gap", () => {
            for (let i = 0; i < 5; i++) {
                p().filler("1s");
            }
        });
    });
});
