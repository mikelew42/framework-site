import app, { el, div, h1, h2, h3, h4, p, is, section, style, ul, li, a } from "/app.js";

import nav from "./nav.js";

app.$root.ac("flex gap h-center wrap");

div.c("sidebar pad", nav);
// app.$root.ac("flex gap h-center wrap");

// await app.directory.ready;
// div.c("directory", () => {
//     const dir = app.directory.files.find(fd => fd.name === "styles");
//     const $dir = app.directory.render_files(dir.children);
// });

div.c("content page flex-1", () => {
    h1("Content");
});