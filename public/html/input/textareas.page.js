import app, { fieldset, legend, p, label, textarea, article, footer, a, div } from "/app.js";

app.$root.ac("page");

article(() => {
    fieldset(() => {
        legend("Textareas");
        p(() => {
            label("Textarea").attr("for", "textarea");
            textarea().attr("id", "textarea").attr("placeholder", "Enter your message here");
        });
    });
    footer(() => p(() => a("[Back]").href("/html/input")));
});
