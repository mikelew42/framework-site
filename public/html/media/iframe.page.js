import app, { h2, iframe, article, header, footer, a, p, div } from "/app.js";

app.$root.ac("page");

article(() => {
    header(() => h2("IFrame"));
    div(() => {
        iframe().attr("src", "/");
    });
    footer(() => p(() => a("[Back]").href("/html/media")));
});
