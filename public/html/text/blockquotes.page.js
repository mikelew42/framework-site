import app, { h1, p, blockquote, cite, a, article, header, footer, div } from "/app.js";

app.$root.ac("page");

article(() => {
    header(() => h1("Blockquotes"));
    div(() => {
        blockquote(() => {
            p("A block quotation (also known as a long quotation or extract) is a quotation in a written document, that is set off from the main text as a paragraph, or block of text.");
            p("It is typically distinguished visually using indentation and a different typeface or smaller size quotation. It may or may not include a citation, usually placed at the bottom.");
            cite(() => a("Said no one, ever.").href("#!"));
        });
    });
    footer(() => p(() => a("[Back]").href("/html/text")));
});
