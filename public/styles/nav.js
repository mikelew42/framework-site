import app, { el, div, h1, h2, h3, h4, p, is, section, style, ul, li, a } from "/app.js";

export default el("nav", nav => {
    a("Styles").attr("href", "/styles/");
    ul.c("sidenav", () => {
        nav.layout = li(() => {
            el("a").attr("href", "/styles/layout/").text("Layout");
        });
        nav.sticky = li(() => {
            el("a").attr("href", "/styles/sticky-section/").text("Sticky Section");
        });
    }).style("min-width", "10em");
});