import app, { el, div, h1, h2, h3, h4, p, is, section, style, ul, li, code, rewidth, button } from "/app.js";

app.$root.ac("page");

style(`
    .small { zoom: 0.5}
`);

style(`
    label { user-select: none; }`);

h1("Flex/");

rewidth.c("mb", () => {
    h3(".flex");
    div.c("flex auto viz all-pad dark small", () => {
        for (let i = 0; i < 10; i++) {
            p().filler("1-2s");
        }
    }).style("--column", "10em");
});

rewidth.c("mb", () => {
    h3(".flex");
    p("Using a larger `--column`, we can avoid the 4+1 at desktop resolutions.  However, we still get 2+2+1 as it downsizes.")
    div.c("flex auto viz all-pad dark", () => {
        for (let i = 0; i < 5; i++) {
            p().filler("1-2s");
        }
    }).style("--column", "15em");
});
rewidth.c("mb", () => {
    h3(".grid");
    p("Grid prevents the Big Orphan problem, but introduces the Small Orphan problem.")
    div.c("grid auto viz all-pad dark", () => {
        for (let i = 0; i < 5; i++) {
            p().filler("1-2s");
        }
    }).style("--column", "12em");
});