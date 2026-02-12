import app, { fieldset, legend, ul, li, label, input, article, footer, a, p, div } from "/app.js";

app.$root.ac("page");

article(() => {
    fieldset(() => {
        legend("Radio buttons");
        p(() => {
            label(input().ac("radio").attr("id", "radio1").attr("name", "radio").attr("type", "radio").attr("checked", "checked"), " Option 1");
        });       
        p(() => {
            label(input().ac("radio").attr("id", "radio2").attr("name", "radio").attr("type", "radio"), " Option 2");
        });
        p(() => {
            label(input().ac("radio").attr("id", "radio3").attr("name", "radio").attr("type", "radio"), " Option 3");
        });
    });
});
