import app, { fieldset, legend, p, input, button, a, article, footer, div } from "/app.js";

app.$root.ac("page");

article(() => {
    fieldset(() => {
        legend("Action buttons");
        p(() => {
            input().attr("type", "submit").attr("value", "<input type=submit>");
            input().attr("type", "button").attr("value", "<input type=button>");
            input().attr("type", "reset").attr("value", "<input type=reset>");
            input().attr("type", "submit").attr("value", "<input disabled>").attr("disabled", "");
        });
        p(() => {
            button("<button type=submit>").attr("type", "submit");
            button("<button type=button>").attr("type", "button");
            button("<button type=reset>").attr("type", "reset");
            button("<button disabled>").attr("type", "button").attr("disabled", "");
        });
        p(() => {
            a("a.button").ac("button").href("#");
            a("a.button.primary").ac("button primary").href("#");
            a("a.button.secondary").ac("button secondary").href("#");
            a("a.button.dark").ac("button dark").href("#");
            a("a.button.error").ac("button error").href("#");
            a("a.button.success").ac("button success").href("#");
        });
        p(() => {
            a("a.button.outline").ac("button outline").href("#");
            a("a.button.outline.primary").ac("button outline primary").href("#");
            a("a.button.outline.secondary").ac("button outline secondary").href("#");
            a("a.button.outline.dark").ac("button outline dark").href("#");
            a("a.button.clear").ac("button clear").href("#");
        });
    });
    footer(() => p(() => a("[Back]").href("/html/input")));
});
