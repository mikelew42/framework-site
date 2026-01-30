import app, { el, div, h1, h2, h3, h4, p, is, section, style, ul, li, code, rewidth, button } from "/app.js";

app.$root.ac("page");

style(`
    .small { zoom: 0.5}
`);

style(`
    label { user-select: none; }`);

h1("Flex/2");

rewidth.c("mb", () => {
    h3(".flex");
    div.c("flex auto viz all-pad dark bg-plus-20 small", () => {
        for (let i = 0; i < 2; i++) {
            p().filler("1-2s");
        }
    }).style("--column", "10em");
});