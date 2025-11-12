import app, { el, div, h1, h2, h3, p } from "./app.js";

app.$root.ac("page");

h1("Home Page");

p("This is `/docs/page.js`.  This is your homepage.  To create a new page:");

app.checklist("Create a new directory inside /docs/", "Create a 'page.js' inside the directory");

p("For example, `/docs/my-page/page.js`.  Then you can link to it, ", el("a", "like this").attr("href", "my-page/"));