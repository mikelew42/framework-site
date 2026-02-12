import app, { fieldset, legend, ul, li, label, input, article, footer, a, p, div } from "/app.js";

app.$root.ac("page");

article(() => {
    fieldset(() => {
        legend("Checkboxes");
        p(() => {
            label(input().attr("id", "checkbox1").attr("name", "checkbox").attr("type", "checkbox").attr("checked", "checked"), " Choice A");
        });
        p(() => {
            label(input().attr("id", "checkbox2").attr("name", "checkbox").attr("type", "checkbox"), " Choice B");
        });
        p(() => {
            label(input().attr("id", "checkbox3").attr("name", "checkbox").attr("type", "checkbox"), " Choice C");
        });
    });
});
