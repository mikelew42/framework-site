import app, { h1, hr, article, header, footer, a, p, div } from "/app.js";

app.$root.ac("page");

article(() => {
    header(() => h1("Horizontal Rules"));
    div(() => {
        hr();
    });
    footer(() => p(() => a("[Back]").href("/html/text")));
});
