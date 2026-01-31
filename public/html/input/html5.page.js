import app, { fieldset, legend, p, label, input, article, footer, a, div } from "/app.js";

app.$root.ac("page");

article(() => {
    fieldset(() => {
        legend("HTML5 inputs");
        p(() => {
            label("Color input").attr("for", "ic");
            input().attr("type", "color").attr("id", "ic").attr("value", "#000000");
        });
        p(() => {
            label("Number input").attr("for", "in");
            input().attr("type", "number").attr("id", "in").attr("min", "0").attr("max", "10").attr("value", "5");
        });
        p(() => {
            label("Range input").attr("for", "ir");
            input().attr("type", "range").attr("id", "ir").attr("value", "10");
        });
        p(() => {
            label("Date input").attr("for", "idd");
            input().attr("type", "date").attr("id", "idd").attr("value", "1970-01-01");
        });
        p(() => {
            label("Month input").attr("for", "idm");
            input().attr("type", "month").attr("id", "idm").attr("value", "1970-01");
        });
        p(() => {
            label("Week input").attr("for", "idw");
            input().attr("type", "week").attr("id", "idw").attr("value", "1970-W01");
        });
        p(() => {
            label("Datetime input").attr("for", "idt");
            input().attr("type", "datetime").attr("id", "idt").attr("value", "1970-01-01T00:00:00Z");
        });
        p(() => {
            label("Datetime-local input").attr("for", "idtl");
            input().attr("type", "datetime-local").attr("id", "idtl").attr("value", "1970-01-01T00:00");
        });
    });
    footer(() => p(() => a("[Back]").href("/html/input")));
});
