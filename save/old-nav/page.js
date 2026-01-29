import app, { el, div, h1, h2, h3, h4, p, is, section, style, ul, li } from "/app.js";
import nav from "./nav.js";

app.$root.ac("flex gap h-center wrap");


// appending an async function actually appends "[object Promise]"
// this pattern is awkward
// i'm not sure we can do async capturing easily
// we can async capture the returned view, but we can't properly capture async interim steps
//
// div.c("sidebar", async sidebar => {
//     await app.directory.ready;
//     sidebar.append(() => {
//         div.c("directory", () => {
//             const dir = app.directory.files.find(fd => fd.name === "styles");
//             const $dir = app.directory.render_files(dir.children);
//         });
//     });
// });


div.c("sidebar", nav);

div.c("page", () => {
    h1("Style");

    el("input").attr("type", "checkbox").attr("id", "theme-toggle").attr("checked", "true").attr("tabindex", "-1");
    el("label").attr("for", "theme-toggle").text("Toggle Theme");
    // Hero Section
    section(() => {
        h1("Welcome to the Theme System");
        p("This page demonstrates two distinct themes that can be toggled with a single CSS class. Each theme has its own typography scale, color palette, spacing system, and component styles.");
    });

    // Typography Examples
    section(() => {
        h2("Typography Hierarchy");
        h1("Heading 1 - Main Title");
        h2("Heading 2 - Section Title");
        h3("Heading 3 - Subsection");
        h4("Heading 4 - Minor Heading");
        el("h5", "Heading 5 - Smaller Heading");
        el("h6", "Heading 6 - Smallest Heading");
        p("This is a paragraph with regular body text. Notice how the line height, font family, and spacing change between themes. The fluid typography uses clamp() to scale smoothly across different viewport sizes.");
        p("Here's another paragraph to show consistent spacing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
    });        
    
    // Typography Examples
    section(() => {
        h2("Typography Hierarchy");
        h1("Heading 1 - This page demonstrates two distinct themes that can be toggled with a single CSS class. Each theme has its own typography scale, color palette, spacing system, and component styles.");
        h2("Heading 2 - This page demonstrates two distinct themes that can be toggled with a single CSS class. Each theme has its own typography scale, color palette, spacing system, and component styles.");
        h3("Heading 3 - This page demonstrates two distinct themes that can be toggled with a single CSS class. Each theme has its own typography scale, color palette, spacing system, and component styles.");
        h4("Heading 4 - This page demonstrates two distinct themes that can be toggled with a single CSS class. Each theme has its own typography scale, color palette, spacing system, and component styles.");
        el("h5", "Heading 5 - This page demonstrates two distinct themes that can be toggled with a single CSS class. Each theme has its own typography scale, color palette, spacing system, and component styles.");
        el("h6", "Heading 6 - This page demonstrates two distinct themes that can be toggled with a single CSS class. Each theme has its own typography scale, color palette, spacing system, and component styles.");
        p("This is a paragraph with regular body text. Notice how the line height, font family, and spacing change between themes. The fluid typography uses clamp() to scale smoothly across different viewport sizes.");
        p("Here's another paragraph to show consistent spacing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
    });

    // Buttons
    section(() => {
        h2("Buttons");
        div.c("flex gap wrap", () => {
            el("button").ac("prim").text("Primary Button");
            el("button").ac("bg").text("Secondary Button");
            el("button").text("Default Button");
        });
    });

    // Forms
    section(() => {
        h2("Form Elements");
        
        div.c("card", () => {
            el("label").text("Text Input");
            el("input").attr("type", "text").attr("placeholder", "Enter your name");
            
            el("hr");

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
    section(() => {
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
    section(() => {
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
    section(() => {
        h2("Code Display");
        
        p("Inline code looks like this: ", el("code").text("const theme = 'awesome';"));
        
        el("pre").text(
`function switchTheme(themeName) {
    const app = document.querySelector('.app');
    app.classList.remove('theme-1', 'theme-2');
    app.classList.add(themeName);
}`);
    });

    // Links
    section(() => {
        h2("Links & Navigation");
        p(() => {
            el("span").text("Here's a ");
            el("a").attr("href", "#").text("sample link");
            el("span").text(" in the middle of a paragraph. And here's ");
            el("a").attr("href", "#").text("another link");
            el("span").text(" to show the styling.");
        });
    });

});