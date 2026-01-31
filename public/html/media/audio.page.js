import app, { h2, audio, article, header, footer, a, p, div } from "/app.js";

app.$root.ac("page");

article(() => {
    header(() => h2("Audio"));
    div(() => {
        audio("audio").attr("controls", "");
    });
    footer(() => p(() => a("[Back]").href("/html/media")));
});
