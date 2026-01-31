import app, { el, div, h1, h2, h3, h4, p, is, section, style, ul, li, code, rewidth, button, dum } from "/app.js";

app.$root.ac("page");

style(`
    label { user-select: none; }`);

h1("Grid");

rewidth.c("mb", () => {
    h3(".grid.auto");

    div.c("col-viz pad mb", () => {
        const c = code().style("width", "var(--column)").style("display", "block").style("text-align", "center");

        c.update = () => {
            c.text(c.compute().width);
        };

        c.resize(() => c.update());
        
        app.ready.then(() => c.update());
    });
    div.c("grid auto viz dark all-pad gap pad", () => {
        div("one");
        div("two");
        div("three");
    });
});

rewidth.c("mb", () => {

    h3(".grid.auto ", code("--column: 20em"));

    el("label", 
        el("input")
            .attr("type", "checkbox").style("margin-right", "0.5em").style("cursor", "pointer"), 
        "viz"
    ).style("cursor", "pointer").click(e => {
        if (e.target.tagName !== 'INPUT') return;
        cont.tc("viz");
    });

    div.c("col-viz pad mb zoom-50", () => {
        const c = code().style("width", "var(--column)").style("display", "block").style("text-align", "center");
        
        app.ready.then(() => c.append(c => c.compute().width));
    });

    const cont = div.c("grid auto all-dark pad gap pad zoom-50", () => {
        for (let i = 0; i < 10; i++) {
            dum(
                dum.image.c("ar-16-9"), 
                dum.c("pad", 
                    h3().filler("1-20w"), 
                    button.c("prim").filler("1-2w")
                )
            );

            // dum.image();
        }
    });

}).style("--column", "20em");