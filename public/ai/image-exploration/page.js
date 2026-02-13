import app, { View, el, div, h1, h2, h3, h4, p, section, img } from "/app.js";

View.stylesheet("/ai/image-exploration/styles.css");

app.$root.ac("page image-exploration");

// Title Section
section.c("intro", () => {
    h1("The Image Layout Catalog");
    p.c("lead", "Exploring effective ways to integrate high-quality AI images into modern web interfaces.");
});

// 1. Fullscreen Hero Layout
section.c("hero-full", () => {
    img().attr("src", "/ai/image-exploration/space.jpg");
    div.c("content", () => {
        h2("The Cosmic Background");
        p("Using images as atmospheric backdrops. Glassmorphism allows the content to stay readable while showcasing the detailed nebulae and depth of the background.");
        el("button").ac("prim").text("Explore Space");
    });
});

// 2. Asymmetric Split Layout
section.c("split-layout", () => {
    div.c("text-side", () => {
        h2("Brutalist Architecture");
        h3("Form Follows Future");
        p("A split layout is perfect for balancing descriptive copy with striking visuals. The industrial aesthetic of the building is complemented by a clean, minimalist text column.");
        p("This layout is commonly used in landing pages to introduce core features or services with a strong visual punch.");
    });
    div.c("image-side", () => {
        img().attr("src", "/ai/image-exploration/building.jpg");
    });
});

// 3. Product/Character Showcase
section.c("product-showcase", () => {
    div.c("product-card", () => {
        img().attr("src", "/ai/image-exploration/robot.jpg");
        h2("Model-X Scout");
        p("Showcasing isolated subjects with glow effects and clean lighting. This layout emphasizes the design details of a specific character or product.");
        el("button").ac("prim").text("Configure Robot");
    });
});

// 4. Reversed Split (for rhythm)
section.c("split-layout reverse", () => {
    div.c("text-side", () => {
        h2("Automated Landscaping");
        p("Alternating the side of the image creates a natural reading rhythm that prevents horizontal fatigue. It keeps the user engaged as they scroll down long-form content.");
    });
    div.c("image-side", () => {
        img().attr("src", "/ai/image-exploration/building.jpg");
    });
});

// 5. Banner Layout
section.c("image-banner", () => {
    img().attr("src", "/ai/image-exploration/space.jpg");
    div.c("overlay", () => {
        h2("Call to Adventure");
        p("Banners are great for dividing sections and providing a visual break with high-impact imagery.");
    });
});

// Navigation Back
section.c("footer-nav", () => {
    el("button").ac("bg").text("Back to AI Lab").click(() => {
        window.location.href = "/ai/";
    });
});
