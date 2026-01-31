import app, { div, h1, p, a, ul, li } from "/app.js";

app.$root.ac("page");

h1("Input Elements");
p("HTML elements for user input and forms.");

ul(() => {
    li(() => a("Input Fields").href("/html/input/input"));
    li(() => a("Select Menus").href("/html/input/select"));
    li(() => a("Checkboxes").href("/html/input/checkbox"));
    li(() => a("Radio Buttons").href("/html/input/radio"));
    li(() => a("Textareas").href("/html/input/textareas"));
    li(() => a("HTML5 Inputs").href("/html/input/html5"));
    li(() => a("Action Buttons").href("/html/input/action"));
});

a("Back to HTML Reference").href("/html");
