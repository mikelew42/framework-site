import app, { el, h2, article, header, footer, a, p, div } from "/app.js";

app.$root.ac("page");

article(() => {
    header(() => h2("Canvas"));
    div(() => {
        el("canvas").attr("width", "400").attr("height", "200");
    });
    footer(() => p(() => a("[Back]").href("/html/media")));
});
