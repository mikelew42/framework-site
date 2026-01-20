import app, { div, h1, h2, h3, h4, p, el } from "/app.js";

// Load theme stylesheets
app.stylesheet(import.meta, "./theme-1/theme-1.css");
app.stylesheet(import.meta, "./theme-2/theme-2.css");

// Load Google Fonts
const link1 = el("link").attr("rel", "stylesheet")
    .attr("href", "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap");
link1.append_to(document.head);

const link2 = el("link").attr("rel", "stylesheet")
    .attr("href", "https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Montserrat:wght@600;700&display=swap");
link2.append_to(document.head);

// Set default theme
app.$root.ac("theme-1");

// Theme Switcher
div.c("pad", () => {
    div.c("flex v-center gap", () => {
        h2("Theme Switcher");
        
        const select = el("select");
        select.append(
            el("option").attr("value", "theme-1").text("Theme 1: Modern & Vibrant"),
            el("option").attr("value", "theme-2").text("Theme 2: Classic & Professional")
        );
        
        select.on("change", (e) => {
            app.$root.rc("theme-1 theme-2");
            app.$root.ac(e.target.value);
        });
    });
});

// Hero Section
div.c("pad", () => {
    h1("Welcome to the Theme System");
    p("This page demonstrates two distinct themes that can be toggled with a single CSS class. Each theme has its own typography scale, color palette, spacing system, and component styles.");
});

// Typography Examples
div.c("pad", () => {
    h2("Typography Hierarchy");
    h1("Heading 1 - Main Title");
    h2("Heading 2 - Section Title");
    h3("Heading 3 - Subsection");
    h4("Heading 4 - Minor Heading");
    p("This is a paragraph with regular body text. Notice how the line height, font family, and spacing change between themes. The fluid typography uses clamp() to scale smoothly across different viewport sizes.");
    p("Here's another paragraph to show consistent spacing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
});

// Buttons
div.c("pad", () => {
    h2("Buttons");
    div.c("flex gap wrap", () => {
        el("button").ac("primary").text("Primary Button");
        el("button").ac("secondary").text("Secondary Button");
        el("button").text("Default Button");
    });
});

// Forms
div.c("pad", () => {
    h2("Form Elements");
    
    div.c("card", () => {
        el("label").text("Text Input");
        el("input").attr("type", "text").attr("placeholder", "Enter your name");
        
        el("label").text("Email Input");
        el("input").attr("type", "email").attr("placeholder", "your@email.com");
        
        el("label").text("Select Dropdown");
        const select = el("select");
        select.append(
            el("option").text("Option 1"),
            el("option").text("Option 2"),
            el("option").text("Option 3")
        );
        
        el("label").text("Textarea");
        el("textarea").attr("rows", "4").attr("placeholder", "Enter your message here...");
        
        div.c("flex gap", () => {
            el("button").ac("primary").text("Submit");
            el("button").ac("secondary").text("Cancel");
        });
    });
});

// Cards
div.c("pad", () => {
    h2("Card Components");
    
    div.c("flex gap wrap", () => {
        div.c("card flex-1", () => {
            h3("Card Title 1");
            p("This is a card component. Cards have consistent padding, borders, and shadows that adapt to each theme.");
            el("button").ac("primary").text("Learn More");
        });
        
        div.c("card flex-1", () => {
            h3("Card Title 2");
            p("Notice how the card styling changes between themes while maintaining the same structure.");
            el("button").ac("secondary").text("Explore");
        });
        
        div.c("card flex-1", () => {
            h3("Card Title 3");
            p("The hover effects and transitions are also theme-specific for a cohesive experience.");
            el("button").ac("primary").text("Get Started");
        });
    });
});

// Columns Layout
div.c("pad", () => {
    h2("Multi-Column Layout");
    
    div.c("flex gap", () => {
        div.c("flex-1", () => {
            h3("Column 1");
            p("This demonstrates a flexible column layout. The content flows naturally and responds to different screen sizes.");
        });
        
        div.c("flex-1", () => {
            h3("Column 2");
            p("Each column can contain any type of content - text, images, forms, or other components.");
        });
        
        div.c("flex-1", () => {
            h3("Column 3");
            p("The spacing and typography remain consistent across all columns within the active theme.");
        });
    });
});

// Code Examples
div.c("pad", () => {
    h2("Code Display");
    
    p("Inline code looks like this: ", el("code").text("const theme = 'awesome';"));
    
    el("pre").text(`function switchTheme(themeName) {
    const app = document.querySelector('.app');
    app.classList.remove('theme-1', 'theme-2');
    app.classList.add(themeName);
}`);
});

// Links
div.c("pad", () => {
    h2("Links & Navigation");
    p(() => {
        el("span").text("Here's a ");
        el("a").attr("href", "#").text("sample link");
        el("span").text(" in the middle of a paragraph. And here's ");
        el("a").attr("href", "#").text("another link");
        el("span").text(" to show the styling.");
    });
});
