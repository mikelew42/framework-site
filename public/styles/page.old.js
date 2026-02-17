import app, { el, div, h1, h2, h3, h4, p, is, section, style, ul, li, code, rewidth, a } from "/app.js";

app.$root.ac("flex pad");
div.c("sidebar", () => {
    app.directory.render("/styles/")
});

	div.c("flex auto gap", () => {

		for (const sub of ["layout", "sections", "text"]) {

			a.c("sub zoom-50")
				.href("/styles/" + sub + "/")
				.lazy(import.meta, "./" + sub + "/page.js");
		}

	}).style("--column", "30%");

div.c("page", () => {

    h1("Styles");


    
    rewidth.c("dark pad mb", () => {
        h2("Layout");
        p().filler("2-4s");
    });
    
    rewidth.c("light pad mb", () => {
        h2("Tags");
        
        div.c("flex wrap gap", () => {
            for (let i = 0; i < 10; i++) {
                div.c("prim btn").filler("1w");
            }
        });
    });
    
    rewidth.c("light pad mb", () => {
        h2("Toggles");
        
        div.c("flex wrap gap", () => {
            for (let i = 0; i < 10; i++) {
                el("label", el("input").attr("type", "checkbox").attr("checked", "true").style("margin-right", "0.5em")).filler("1w");
            }
        });
    });
    
    
    el("label", 
        el("input")
            .attr("type", "checkbox")
            .attr("checked", "true")
            .attr("tabindex", "-1"), 
        "Toggle"
    );
});