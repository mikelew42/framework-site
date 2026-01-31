import app, { fieldset, legend, ul, li, label, input, article, footer, a, p, div } from "/app.js";

app.$root.ac("page");

article(() => {
    fieldset(() => {
        legend("Radio buttons");
        ul.c("list list--bare", () => {
            li(() => {
                label(() => {
                    input().ac("radio").attr("id", "radio1").attr("name", "radio").attr("type", "radio").attr("checked", "checked");
                    p(" Option 1");
                }).attr("for", "radio1");
            });
            li(() => {
                label(() => {
                    input().ac("radio").attr("id", "radio2").attr("name", "radio").attr("type", "radio");
                    p(" Option 2");
                }).attr("for", "radio2");
            });
            li(() => {
                label(() => {
                    input().ac("radio").attr("id", "radio3").attr("name", "radio").attr("type", "radio");
                    p(" Option 3");
                }).attr("for", "radio3");
            });
        });
    });
    footer(() => p(() => a("[Back]").href("/html/input")));
});
