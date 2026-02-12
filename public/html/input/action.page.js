import app, { fieldset, legend, p, input, button, a, article, footer, div, append } from "/app.js";

app.$root.ac("page");

article(() => {
    fieldset(() => {
        legend("Action buttons");
        p(() => {
            input().attr("type", "submit").attr("value", "<input type=submit>");
            append(" ");
            input().attr("type", "button").attr("value", "<input type=button>");
            append(" ");
            input().attr("type", "reset").attr("value", "<input type=reset>");
            append(" ");
            input().attr("type", "submit").attr("value", "<input disabled>").attr("disabled", "");
        });
        p(() => {
            button("<button type=submit>").attr("type", "submit");
            append(" ");
            button("<button type=button>").attr("type", "button");
            append(" ");
            button("<button type=reset>").attr("type", "reset");
            append(" ");
            button("<button disabled>").attr("type", "button").attr("disabled", "");
        });
        p(() => {
            a("a.button").ac("button").href("#");
            append(" ");
            a("a.button.primary").ac("button primary").href("#");
            append(" ");
            a("a.button.secondary").ac("button secondary").href("#");
            append(" ");
            a("a.button.dark").ac("button dark").href("#");
            append(" ");
            a("a.button.error").ac("button error").href("#");
            append(" ");
            a("a.button.success").ac("button success").href("#");
        });
        p(() => {
            a("a.button.outline").ac("button outline").href("#");
            append(" ");
            a("a.button.outline.primary").ac("button outline primary").href("#");
            append(" ");
            a("a.button.outline.secondary").ac("button outline secondary").href("#");
            append(" ");
            a("a.button.outline.dark").ac("button outline dark").href("#");
            append(" ");
            a("a.button.clear").ac("button clear").href("#");
        });
    });
    footer(() => p(() => a("[Back]").href("/html/input")));
});
