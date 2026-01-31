import app, { div, h1, p, a, ul, li } from "/app.js";

app.$root.ac("page");

h1("Text Elements");
p("Basic HTML elements for structuring text content.");

ul(() => {
    li(() => a("Headings").href("/html/text/headings"));
    li(() => a("Paragraphs").href("/html/text/paragraphs"));
    li(() => a("Blockquotes").href("/html/text/blockquotes"));
    li(() => a("Lists").href("/html/text/lists"));
    li(() => a("Horizontal Rules").href("/html/text/hr"));
    li(() => a("Tabular Data").href("/html/text/tables"));
    li(() => a("Code").href("/html/text/code"));
    li(() => a("Inline Elements").href("/html/text/inline"));
});

a("Back to HTML Reference").href("/html");
