import app, { el, div, h1, h2, h3, h4, p, is, section, style, ul, li, code, rewidth, button } from "/app.js";

import "/framework/core/View/ResizeObserver.js";

app.$root.ac("page");

style(`
    .small { zoom: 0.5}
    label { user-select: none; }
`);

h1("Flex/Padding");

rewidth.c("mb", () => {
    h3(".flex.all-1");
    p("`flex: 1` creates `flex-basis: 0`, which means the padding differential is a problem.")
    div.c("flex viz all-1 all-pad dark bg-plus-20 small", () => {
        p().filler("1-2s").style("padding", "3em").append({
            $width: 0
        }).resize(p => {
            p.$width.text(p.el.offsetWidth);
        });
        p().filler("1-2s").append({
            $width: 0
        }).resize(p => {
            p.$width.text(p.el.offsetWidth);
        });
    }).style("--column", "10em");
});
rewidth.c("mb", () => {
    h3(".flex.auto");
    p("`.flex.auto` creates a large enough `flex-basis` that the padding differential doesn't seem to be a problem.")
    div.c("flex auto viz all-pad dark bg-plus-20 small", () => {
        p().filler("1-2s").style("padding", "3em").append({
            $width: 0
        }).resize(p => {
            p.$width.text(p.el.offsetWidth);
        });
        p().filler("1-2s").append({
            $width: 0
        }).resize(p => {
            p.$width.text(p.el.offsetWidth);
        });
    }).style("--column", "10em");
});