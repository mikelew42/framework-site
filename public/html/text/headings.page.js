import app, { h1, h2, h3, h4, h5, h6, div, article, header, footer, a, p } from "/app.js";

app.$root.ac("page");

article(() => {
    header(() => h1("Headings"));
    div(() => {
        h1("Heading 1");
        h2("Heading 2");
        h3("Heading 3");
        h4("Heading 4");
        h5("Heading 5");
        h6("Heading 6");
    });
    footer(() => p(() => a("[Back]").href("/html/text")));
});
