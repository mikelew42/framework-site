import app, { h2, video, article, header, footer, a, p, div } from "/app.js";

app.$root.ac("page");

article(() => {
    header(() => h2("Video"));
    div(() => {
        video("video").attr("controls", "");
    });
    footer(() => p(() => a("[Back]").href("/html/media")));
});
