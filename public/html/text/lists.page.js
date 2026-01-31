import app, { el, h1, h3, ol, ul, li, article, header, footer, a, p, div } from "/app.js";

app.$root.ac("page");

article(() => {
    header(() => h1("Lists"));
    div(() => {
        h3("Definition List");
        el("dl", () => {
            el("dt", "Definition List Title");
            el("dd", "This is a definition list division.");
            el("dt", "Definition List Title");
            el("dd", "This is a definition list division.");
            el("dt", "Definition List Title");
            el("dd", "This is a definition list division.");
        });

        h3("Ordered List");
        ol(() => {
            li("List Item 1");
            li("List Item 2");
            li("List Item 3");
        });

        h3("Unordered List");
        ul(() => {
            li("List Item 1");
            li("List Item 2");
            li("List Item 3");
        });
    });
    footer(() => p(() => a("[Back]").href("/html/text")));
});
