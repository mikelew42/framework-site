import app, { el, div, h1, h2, h3, h4, p, is, section, style, ul, li, code, rewidth, button } from "/app.js";

app.$root.ac("page");

style(`
    label { user-select: none; }`);

h1("Flex/");

rewidth.c("mb", () => {
    h3(".flex");
    div.c("flex auto viz all-pad dark", () => {
        for (let i = 0; i < 10; i++) {
            p().filler("2-4s");
        }
    }).style("--column", "10em");
});