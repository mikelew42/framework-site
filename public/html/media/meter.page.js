import app, { h2, meter, article, header, footer, a, p, div } from "/app.js";

app.$root.ac("page");

article(() => {
    header(() => h2("Meter"));
    div(() => {
        meter("2 out of 10").attr("value", "2").attr("min", "0").attr("max", "10");
    });
    footer(() => p(() => a("[Back]").href("/html/media")));
});
