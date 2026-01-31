import app, { h2, el, article, header, footer, a, p, div } from "/app.js";

app.$root.ac("page");

article(() => {
    header(() => h2("Inline SVG"));
    div(() => {
        // Framework's svg() might need internal elements via el() if not specifically defined
        el("svg").attr("width", "100px").attr("height", "100px").attr("viewBox", "0 0 100 100").append(() => {
            el("circle").attr("cx", "50").attr("cy", "50").attr("r", "40").attr("fill", "#1fa3ec");
        });
    });
    footer(() => p(() => a("[Back]").href("/html/media")));
});
