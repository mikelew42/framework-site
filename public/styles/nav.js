import app, { el, div, h1, h2, h3, h4, p, is, section, style, ul, li, a } from "/app.js";

export default function(){
    return el("nav", () => {
        a("Styles").attr("href", "/styles/");
        ul.c("sidenav", () => {
            li(() => {
                el("a").attr("href", "/styles/layout/").text("Layout");
            });
            li(() => {
                el("a").attr("href", "/styles/sticky-section/").text("Sticky Section");
            });
        }).style("min-width", "10em");
    });
}