import app, { fieldset, legend, p, label, select, el, article, footer, a, div } from "/app.js";

app.$root.ac("page");

article(() => {
    fieldset(() => {
        legend("Select menus");
        p(() => {
            label("Select").attr("for", "select");
            select(() => {
                el("optgroup").attr("label", "Option Group").append(() => {
                    el("option", "Option One");
                    el("option", "Option Two");
                    el("option", "Option Three");
                });
            }).attr("id", "select");
        });
    });
    footer(() => p(() => a("[Back]").href("/html/input")));
});
