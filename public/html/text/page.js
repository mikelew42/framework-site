import app, { div, h1, p, a, ul, li, el, style, View } from "/app.js";

app.$root.ac("page");

h1("Text Elements");
p("Basic HTML elements for structuring text content.");
style(`
    iframe {
        width: 100%;
        height: 500px;
    }

    a.sub { padding: 3em; background: rgba(0,0,0,0.1); text-decoration: none; color: inherit; display: block; font: inherit;  }
`);
// ul(() => {
//     li(() => { 
//         a("Headings").href("/html/text/headings");
//         // el("iframe").attr("src", "/html/text/headings");
//     });
//     li(() => a("Paragraphs").href("/html/text/paragraphs"));
//     li(() => a("Blockquotes").href("/html/text/blockquotes"));
//     li(() => a("Lists").href("/html/text/lists"));
//     li(() => a("Horizontal Rules").href("/html/text/hr"));
//     li(() => a("Tabular Data").href("/html/text/tables"));
//     li(() => a("Code").href("/html/text/code"));
//     li(() => a("Inline Elements").href("/html/text/inline"));
// });

p("The real problem with this technique, is the secondary side effects of each page get added to this root page.  The only way to encapsulate is to use an iframe, but that re-renders the app (nav, sidebar, etc), which might not be wanted.");

p("I could create pages that don't use the app, in order to simply render directly to the `<body>`?")

// View.set_captor(div.c("flex auto gap").style("--column", "30%"));

div.c("flex auto gap", () => {

    for (const sub of ["headings", "paragraphs", "blockquotes", "lists", "hr", "tables", "code", "inline"]) {

        a.c("sub zoom-50")
            .href("/html/text/" + sub)
            .lazy(import.meta, "./" + sub + ".page.js");
    }

}).style("--column", "30%");


// View.restore_captor();

a("Back to HTML Reference").href("/html");
