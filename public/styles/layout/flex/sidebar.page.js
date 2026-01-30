import app, { el, div, h1, h2, h3, h4, p, is, section, style, ul, li, code, rewidth, button } from "/app.js";

app.$root.ac("page");

style(`
    .small { zoom: 0.5}
    .sidebar-demo { min-height: 200px; }
`);

h1("Flex/Sidebar Layouts");

// Left sidebar - fixed width
section(() => {
    h3("Left Sidebar (fixed width)");
    p("Sidebar has fixed width, main content fills remaining space.");
    rewidth.c("mb", () => {
        div.c("flex viz all-pad dark small gap sidebar-demo", () => {
            div(() => p("Sidebar")).style("flex", "0 0 200px");
            div.c("flex-1", () => p("Main Content"));
        });
    });
});

// Right sidebar - fixed width
section(() => {
    h3("Right Sidebar (fixed width)");
    rewidth.c("mb", () => {
        div.c("flex viz all-pad dark small gap sidebar-demo", () => {
            div.c("flex-1", () => p("Main Content"));
            div(() => p("Sidebar")).style("flex", "0 0 200px");
        });
    });
});

// Both sidebars
section(() => {
    h3("Both Sidebars (Holy Grail)");
    rewidth.c("mb", () => {
        div.c("flex viz all-pad dark small gap sidebar-demo", () => {
            div(() => p("Left")).style("flex", "0 0 150px");
            div.c("flex-1", () => p("Main Content"));
            div(() => p("Right")).style("flex", "0 0 150px");
        });
    });
});

// Collapsible sidebar using auto
section(() => {
    h3("Responsive Sidebar (stacks on narrow)");
    p("Uses .flex.auto so sidebar stacks below main content when narrow.");
    rewidth.c("mb", () => {
        div.c("flex auto viz all-pad dark small gap sidebar-demo", () => {
            div.c("flex-1", () => p("Main Content")).style("flex-basis", "20em");
            div(() => p("Sidebar")).style("flex", "0 0 12em");
        });
    });
});

// Sidebar with header/footer
section(() => {
    h3("Sidebar + Header/Footer");
    rewidth.c("mb", () => {
        div.c("flex v viz dark small gap", () => {
            div.c("pad", () => p("Header"));
            div.c("flex flex-1 gap", () => {
                div.c("pad", () => p("Sidebar")).style("flex", "0 0 150px");
                div.c("flex-1 pad", () => p("Main Content"));
            });
            div.c("pad", () => p("Footer"));
        }).style("min-height", "300px");
    });
});
