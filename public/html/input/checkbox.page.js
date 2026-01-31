import app, { fieldset, legend, ul, li, label, input, article, footer, a, p, div } from "/app.js";

app.$root.ac("page");

article(() => {
    fieldset(() => {
        legend("Checkboxes");
        ul.c("list list--bare", () => {
            li(() => {
                label(() => {
                    input().attr("id", "checkbox1").attr("name", "checkbox").attr("type", "checkbox").attr("checked", "checked");
                    p(" Choice A");
                }).attr("for", "checkbox1");
            });
            li(() => {
                label(() => {
                    input().attr("id", "checkbox2").attr("name", "checkbox").attr("type", "checkbox");
                    p(" Choice B");
                }).attr("for", "checkbox2");
            });
            li(() => {
                label(() => {
                    input().attr("id", "checkbox3").attr("name", "checkbox").attr("type", "checkbox");
                    p(" Choice C");
                }).attr("for", "checkbox3");
            });
        });
    });
    footer(() => p(() => a("[Back]").href("/html/input")));
});
