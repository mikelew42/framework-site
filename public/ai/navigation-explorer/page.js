import app, { View, el, div, h1, h2, h3, p, section, ul, li, button, a } from "/app.js";

View.stylesheet(import.meta, "styles.css");

app.$root.ac("page navigation-explorer");

// Hero Section
section.c("hero", () => {
    h1("Navigation Explorer");
    p.c("lead", "Interactive demonstrations of different navigation techniques: tabs, buttons, and links. Each approach has different use cases and behaviors.");
});

// Tab Navigation Section
section.c("demo-section", () => {
    h2("Tab Navigation");
    p("Tabs switch content within the same page without changing the URL. Perfect for organizing related content.");
    
    div.c("tab-demo", () => {
        const panels = [];
        const buttons = [];
        
        // Tab buttons
        div.c("tab-buttons flex gap", () => {
            const tabs = ["Overview", "Features", "Examples"];
            
            tabs.forEach((name, i) => {
                const btn = button(name).ac(i === 0 ? "active" : "");
                buttons.push(btn);
                
                btn.click(() => {
                    // Remove active from all tabs and panels
                    buttons.forEach(b => b.rc("active"));
                    panels.forEach(p => p.rc("active"));
                    
                    // Add active to clicked tab and corresponding panel
                    btn.ac("active");
                    panels[i].ac("active");
                });
            });
        });
        
        // Tab panels
        div.c("tab-panels", () => {
            panels.push(
                div.c("tab-panel active card", () => {
                    h3("Overview");
                    p("This is the overview panel. Tabs are great for reducing page clutter and organizing related information.");
                })
            );
            
            panels.push(
                div.c("tab-panel card", () => {
                    h3("Features");
                    ul(() => {
                        li("No page reload required");
                        li("Fast content switching");
                        li("URL stays the same");
                        li("Good for forms and settings");
                    });
                })
            );
            
            panels.push(
                div.c("tab-panel card", () => {
                    h3("Examples");
                    p("Common uses: Settings panels, product details, dashboard sections, multi-step forms.");
                })
            );
        });
    });
});

// Button Navigation Section
section.c("demo-section", () => {
    h2("Button Navigation");
    p("Buttons can trigger actions or navigate to new pages. They're interactive and can execute JavaScript before navigation.");
    
    div.c("card", () => {
        h3("Action Buttons");
        div.c("flex gap wrap", () => {
            button("Show Alert")
                .ac("prim")
                .click(() => alert("This button triggered an action!"));
            
            button("Navigate to Home")
                .ac("bg")
                .click(() => window.location.href = "/");
            
            button("Open in New Tab")
                .click(() => window.open("/framework/css", "_blank"));
        });
        
        p.c("mt", "Use cases: Form submissions, triggering modals, executing code before navigation, AJAX requests.");
    });
});

// Link Navigation Section
section.c("demo-section", () => {
    h2("Link Navigation");
    p("Traditional anchor links navigate between pages. They're semantic, SEO-friendly, and work without JavaScript.");
    
    div.c("card", () => {
        h3("Different Link Types");
        ul(() => {
            li(() => {
                a("Internal Link (same tab)").attr("href", "/");
            });
            li(() => {
                a("External Link (new tab)").attr("href", "https://github.com").attr("target", "_blank");
            });
            li(() => {
                a("Anchor Link (same page)").attr("href", "#comparison");
            });
            li(() => {
                a("Styled as Button").ac("button prim").attr("href", "/framework");
            });
        });
        
        p.c("mt", "Use cases: Page-to-page navigation, external resources, downloads, SEO-important links.");
    });
});

// Comparison Section
section.c("comparison", () => {
    h2("Quick Comparison").attr("id", "comparison");
    
    div.c("flex gap wrap", () => {
        div.c("flex-1 card", () => {
            h3("Tabs");
            p("✓ Same page content switching");
            p("✓ No URL change");
            p("✓ Fast, no reload");
            p("✗ Not bookmarkable");
        });
        
        div.c("flex-1 card", () => {
            h3("Buttons");
            p("✓ Execute code first");
            p("✓ Full control");
            p("✓ Can prevent navigation");
            p("✗ Requires JavaScript");
        });
        
        div.c("flex-1 card", () => {
            h3("Links");
            p("✓ Semantic HTML");
            p("✓ SEO friendly");
            p("✓ Works without JS");
            p("✓ Bookmarkable URLs");
        });
    });
});

// Call-to-Action
section.c("cta", () => {
    h2("Try It Out");
    p("Experiment with each navigation type above to see how they behave. Notice the differences in URL changes, page reloads, and interaction patterns.");
});
