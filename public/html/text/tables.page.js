import app, { el, h1, h4, table, thead, tbody, tr, th, td, code, span, article, header, footer, a, p, br, div } from "/app.js";

app.$root.ac("page");

article(() => {
    header(() => h1("Tabular Data"));
    div(() => {
        table(() => {
            el("caption", "Table Caption");
            thead(() => {
                tr(() => {
                    th("Table Heading 1"); th("Table Heading 2"); th("Table Heading 3"); th("Table Heading 4"); th("Table Heading 5");
                });
            });
            el("tfoot", () => {
                tr(() => {
                    th("Table Footer 1"); th("Table Footer 2"); th("Table Footer 3"); th("Table Footer 4"); th("Table Footer 5");
                });
            });
            tbody(() => {
                tr(() => { td("Table Cell 1"); td("Table Cell 2"); td("Table Cell 3"); td("Table Cell 4"); td("Table Cell 5"); });
                tr(() => { td("Table Cell 1"); td("Table Cell 2"); td("Table Cell 3"); td("Table Cell 4"); td("Table Cell 5"); });
            });
        });

        br();
        h4(() => {
            span("Table with stripes. Just add the ");
            code("striped");
            span(" class to ");
            code("<table>");
            span(".");
        });

        table.c("striped", () => {
            el("caption", "Table Caption");
            thead(() => {
                tr(() => {
                    th("Table Heading 1"); th("Table Heading 2"); th("Table Heading 3"); th("Table Heading 4"); th("Table Heading 5");
                });
            });
            el("tfoot", () => {
                tr(() => {
                    th("Table Footer 1"); th("Table Footer 2"); th("Table Footer 3"); th("Table Footer 4"); th("Table Footer 5");
                });
            });
            tbody(() => {
                tr(() => { td("Table Cell 1"); td("Table Cell 2"); td("Table Cell 3"); td("Table Cell 4"); td("Table Cell 5"); });
                tr(() => { td("Table Cell 1"); td("Table Cell 2"); td("Table Cell 3"); td("Table Cell 4"); td("Table Cell 5"); });
                tr(() => { td("Table Cell 1"); td("Table Cell 2"); td("Table Cell 3"); td("Table Cell 4"); td("Table Cell 5"); });
                tr(() => { td("Table Cell 1"); td("Table Cell 2"); td("Table Cell 3"); td("Table Cell 4"); td("Table Cell 5"); });
            });
        });
    });
    footer(() => p(() => a("[Back]").href("/html/text")));
});
