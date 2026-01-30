import app, { el, div, h1, h2, h3, h4, p, is, section, style, ul, li, code, rewidth, button } from "/app.js";

app.$root.ac("page");

style(`
    .small { zoom: 0.5}
    .split-demo { min-height: 150px; }
`);

h1("Flex/Split Layouts");

// Using .flex.split (space-between)
section(() => {
    h3(".flex.split (justify-content: space-between)");
    p("Pushes items to opposite ends.");
    rewidth.c("mb", () => {
        div.c("flex split viz all-pad dark small", () => {
            p("Left");
            p("Right");
        });
    });
});

// 3-way split
section(() => {
    h3("3-way split");
    rewidth.c("mb", () => {
        div.c("flex split viz all-pad dark small", () => {
            p("Left");
            p("Center");
            p("Right");
        });
    });
});

// Split with grouped items
section(() => {
    h3("Split with grouped items");
    p("Group items on one side using a nested flex.");
    rewidth.c("mb", () => {
        div.c("flex split v-center viz all-pad dark small gap", () => {
            div.c("flex gap", () => {
                p("Logo");
                p("Home");
                p("About");
            });
            div.c("flex gap", () => {
                p("Login");
                p("Sign Up");
            });
        });
    });
});

// Variable width columns
section(() => {
    h3("Variable Width Columns (1:2:1)");
    rewidth.c("mb", () => {
        div.c("flex viz all-pad dark small gap split-demo", () => {
            div(() => p("1x")).style("flex", "1");
            div(() => p("2x")).style("flex", "2");
            div(() => p("1x")).style("flex", "1");
        });
    });
});

// Uneven split (2:1)
section(() => {
    h3("Uneven Split (2:1)");
    rewidth.c("mb", () => {
        div.c("flex viz all-pad dark small gap split-demo", () => {
            div(() => p("Main (2x)")).style("flex", "2");
            div(() => p("Side (1x)")).style("flex", "1");
        });
    });
});

// Golden ratio split
section(() => {
    h3("Golden Ratio (~1.618:1)");
    rewidth.c("mb", () => {
        div.c("flex viz all-pad dark small gap split-demo", () => {
            div(() => p("Main")).style("flex", "1.618");
            div(() => p("Side")).style("flex", "1");
        });
    });
});
