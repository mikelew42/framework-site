import app, { el, div, p, dum, h3, style } from "/app.js";
style(`
    .half-squeeze {
        max-width: 30em;
    }
    .left > .half-squeeze, .left.half-squeeze {
        margin-left: auto;
    }

    .class-ctrls {
    
        display: flex;
        flex-wrap: wrap;
        zoom: 0.8;
        bottom: 0;
        left: 0;
        background: white;
    }
    .class-ctrls label { cursor: pointer; }
    .class-ctrls > * {
        padding: 0 0.5em;
    }

    *:has(> .class-ctrls) {
        position: relative;
    }

    *:has(> .class-ctrls):hover > .class-ctrls {
        display: flex;
    }
`);
el.c("section", "squeeze mx-auto viz mb", () => {
    p("Squeeze me?")
});
el.c("section", "squeeze mx-auto viz mb flex auto", () => {
    div.c("left", dum(h3(), p()));
    div.c("right", dum(h3(), p()));
});

el.c("section", "mb flex auto reverse", () => {
    div.c("right", dum.image.c("ar-2"));
    div.c("left flex v h-center", left => {
        left.ctrl("pad half-squeeze flex v-center h-center v viz");
        dum.c("half-squeeze", dm => {
            dm.ctrl("half-squeeze pad");
        }, h3(), p());
    });
});

el.c("section", "flex auto viz mb reverse", () => {
    div.c("right", dum.image.c("ar-2"));
    div.c("left pad flex v h-center gap", left => {
        left.ctrl("half-squeeze");
        h3.c("capitalize").filler("3-5w");
        p("Use `.flex.reverse` to reverse stack.  The right column must come first (in the html), but then it will be on top after wrapping.");
        p("Compare with below, with normal stacking.");
    });
});

el.c("section", "flex auto viz mb", () => {
    div.c("left pad flex v-center", dum(h3(), p()));
    div.c("right", dum.image.c("ar-2"));
});

el.c("section", "flex auto viz gap pad", () => {
    div.c("left", () => {
        el("h3", ".flex.auto");
        p().filler("2-4s");
    });
    div.c("right", () => {
        el.c("section", "flex auto", () => {
            div.c("left", () => {
                el("h3", ".flex.auto");
                p().filler("2-4s");
            });
            div.c("right", () => {
                el("h3", ".flex.auto");
                p().filler("2-4s");
            });
        });
    });
});