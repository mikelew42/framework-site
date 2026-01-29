import app, { el, div, h1, h2, h3, h4, p, is, section, style, ul, li, a } from "/app.js";

export default el("nav", nav => {
    a("Styles").attr("href", "/styles/");
    ul.c("insideside-nav", () => {
        nav.layout = li(a("Layout").attr("href", "/styles/layout/"));
        nav.sticky = li(a("Sticky Section").attr("href", "/styles/sticky-section/"));
    })//.style("min-width", "10em");
});