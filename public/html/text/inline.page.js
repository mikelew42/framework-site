import app, { el, h1, p, a, strong, em, b, i, u, del, ins, s, sup, sub, small, abbr, q, cite, dfn, mark, time, article, header, footer, div, span } from "/app.js";

app.$root.ac("page");

article(() => {
    header(() => h1("Inline elements"));
    div(() => {
        p(() => a("This is a text link").href("#!"));
        p(() => strong("Strong is used to indicate strong importance."));
        p(() => em("This text has added emphasis."));
        p(() => { span("The "); b("b element"); span(" is stylistically different text from normal text, without any special importance."); });
        p(() => { span("The "); i("i element"); span(" is text that is offset from the normal text."); });
        p(() => { span("The "); u("u element"); span(" is text with an unarticulated, though explicitly rendered, non-textual annotation."); });
        p(() => { del("This text is deleted"); span(" and "); ins("This text is inserted."); });
        p(() => s("This text has a strikethrough."));
        p(() => { span("Superscript"); sup("®"); span("."); });
        p(() => { span("Subscript for things like H"); sub("2"); span("O."); });
        p(() => small("This small text is small for for fine print, etc."));
        p(() => { span("Abbreviation: "); abbr("HTML").attr("title", "HyperText Markup Language"); });
        p(() => q("This text is a short inline quotation.").attr("cite", "https://developer.mozilla.org/en-US/docs/HTML/Element/q"));
        p(() => cite("This is a citation."));
        p(() => { span("The "); dfn("dfn element"); span(" indicates a definition."); });
        p(() => { span("The "); mark("mark element"); span(" indicates a highlight."); });
        p(() => { span("The "); el("var", "variable element"); span(", such as "); el("var", "x"); span(" = "); el("var", "y"); span("."); });
        p(() => { span("The time element: "); time("2 weeks ago").attr("datetime", "2013-04-06T12:32+00:00"); });
    });
    footer(() => p(() => a("[Back]").href("/html/text")));
});
