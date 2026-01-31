import app, { h2, progress, article, header, footer, a, p, div } from "/app.js";

app.$root.ac("page");

article(() => {
    header(() => h2("Progress"));
    div(() => {
        progress("progress");
    });
    footer(() => p(() => a("[Back]").href("/html/media")));
});
