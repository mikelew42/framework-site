import app, { el, div, h1, h2, h3, h4, p, is, section, style, ul, li, code, rewidth, button } from "/app.js";

app.$root.ac("page");

style(`
    label { user-select: none; }`);

h1("Grid");

rewidth.c("mb", () => {
    h3(".auto");
    div.c("grid auto viz dark all-pad gap pad", () => {
        div("one");
        div("two");
        div("three");
    });
    p("This is called the Albatross method?  It uses a clever calculation to go from 3 columns directly to 1 column.  This would work for 4 columns, but that jump is less practical.");
});