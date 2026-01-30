import app, { el, div, h1, h2, h3, h4, p, is, section, style, ul, li, code, rewidth, button } from "/app.js";

app.$root.ac("page");

style(`
    .fullscreen-demo { 
        min-height: 300px; 
        background: var(--bg);
    }
    .fullscreen-demo.small { zoom: 0.5; }
`);

h1("Flex/Fullscreen Layouts");

// Centered content (login/modal style)
section(() => {
    h3("Centered Content (Login/Modal)");
    p("Perfect for login pages, modals, or hero sections.");
    rewidth.c("mb", () => {
        div.c("flex h-center v-center viz dark small fullscreen-demo", () => {
            div.c("pad", () => {
                h4("Sign In");
                p("Center me perfectly.");
            }).style("background", "rgba(255,255,255,0.1)");
        });
    });
});

// Sticky footer
section(() => {
    h3("Sticky Footer");
    p("Footer stays at bottom even with little content.");
    rewidth.c("mb", () => {
        div.c("flex v viz dark small fullscreen-demo", () => {
            div.c("pad", () => p("Header"));
            div.c("flex-1 pad", () => p("Content (grows to push footer down)"));
            div.c("pad", () => p("Footer"));
        });
    });
});

// Split screen
section(() => {
    h3("Split Screen (50/50)");
    rewidth.c("mb", () => {
        div.c("flex all-1 viz dark small fullscreen-demo", () => {
            div.c("pad flex v-center h-center", () => p("Left Panel"));
            div.c("pad flex v-center h-center light", () => p("Right Panel"));
        });
    });
});

// App shell with header, sidebar, main
section(() => {
    h3("App Shell");
    p("Common app layout: header, sidebar, main content, and footer.");
    rewidth.c("mb", () => {
        div.c("flex v viz dark small fullscreen-demo", () => {
            div.c("pad", () => p("Header / Navbar"));
            div.c("flex flex-1", () => {
                div.c("pad", () => p("Nav")).style("flex", "0 0 120px");
                div.c("flex-1 pad light", () => p("Main Content Area"));
            });
            div.c("pad", () => p("Footer"));
        });
    });
});

// Hero with overlaid content
section(() => {
    h3("Hero Section");
    p("Full-width hero with centered content.");
    rewidth.c("mb", () => {
        div.c("flex v-center h-center viz dark small", () => {
            div.c("pad", () => {
                h2("Hero Title").style("margin", "0");
                p("Subtitle goes here");
                button("Call to Action").ac("prim");
            }).style("text-align", "center");
        }).style("min-height", "200px");
    });
});
