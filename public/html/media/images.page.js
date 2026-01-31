import app, { h2, h3, img, figure, figcaption, article, header, footer, a, p, div, code } from "/app.js";

app.$root.ac("page");

article(() => {
    header(() => h2("Images"));
    div(() => {
        h3(() => { p("No "); code("<figure>"); p(" element"); });
        p(() => img().attr("src", "http://unsplash.it/480/480").attr("alt", "Image alt text"));

        h3(() => { p("Wrapped in a "); code("<figure>"); p(" element, no "); code("<figcaption>"); });
        figure(() => {
            img().attr("src", "http://unsplash.it/420/420").attr("alt", "Image alt text");
        });

        h3(() => { p("Wrapped in a "); code("<figure>"); p(" element, with a "); code("<figcaption>"); });
        figure(() => {
            img().attr("src", "http://unsplash.it/420/420").attr("alt", "Image alt text");
            figcaption("Here is a caption for this image.");
        });
    });
    footer(() => p(() => a("[Back]").href("/html/media")));
});
