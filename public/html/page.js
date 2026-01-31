import app, { div, h1, p, a, ul, li } from "/app.js";

app.$root.ac("page");

h1("HTML Reference");
p("A comprehensive guide to basic HTML elements, organized by category.");

ul(() => {
    li(() => a("Text Elements").href("/html/text/"));
    li(() => a("Media Elements").href("/html/media/"));
    li(() => a("Input Elements").href("/html/input/"));
});
