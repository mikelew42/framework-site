import app, { el, div, h1, h2, h3, h4, p, is, section, style, ul, li, code, rewidth } from "/app.js";

app.$root.ac("page");

h1("Styles");

rewidth.c("dark pad mb", () => {
    h2("Layout");
    p().filler("2-4s");
});

rewidth.c("light pad mb", () => {
    h2("Tags");
    
    div.c("flex wrap gap", () => {
        for (let i = 0; i < 10; i++) {
            div.c("prim btn").filler("1w");
        }
    });
});

rewidth.c("light pad mb", () => {
    h2("Toggles");
    
    div.c("flex wrap gap", () => {
        for (let i = 0; i < 10; i++) {
            el("label", el("input").attr("type", "checkbox").attr("checked", "true").style("margin-right", "0.5em")).filler("1w");
        }
    });
});


el("label", 
    el("input")
        .attr("type", "checkbox")
        .attr("checked", "true")
        .attr("tabindex", "-1"), 
    "Toggle"
);