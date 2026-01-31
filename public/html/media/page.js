import app, { div, h1, p, a, ul, li } from "/app.js";

app.$root.ac("page");

h1("Media Elements");
p("HTML elements for embedding images, audio, video, and other multimedia content.");

ul(() => {
    li(() => a("Images").href("/html/media/images"));
    li(() => a("Audio").href("/html/media/audio"));
    li(() => a("Video").href("/html/media/video"));
    li(() => a("Canvas").href("/html/media/canvas"));
    li(() => a("Meter").href("/html/media/meter"));
    li(() => a("Progress").href("/html/media/progress"));
    li(() => a("Inline SVG").href("/html/media/svg"));
    li(() => a("IFrames").href("/html/media/iframe"));
});

a("Back to HTML Reference").href("/html");
