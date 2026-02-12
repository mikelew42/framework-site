import app, { div, h1, h2, section, icon, View, button } from "/app.js";

app.stylesheet(import.meta, "styles.css");

app.$root.ac("page icon-layouts-demo");

// Components

class IconItem extends View {
    render() {
        this.ac("icon-item");
        this.icon = icon(this.name || "star").ac(this.size || "md");
        div.c("label", this.label || "Icon Item");
    }
}

class IconTab extends View {
    render() {
        this.ac("icon-tab");
        if (this.active) this.ac("active");
        
        icon(this.name || "home").ac("md");
        div.c("label", this.label || "Home");
        
        this.click(() => {
            // Use parent.el.children and View.lookup if needed, 
            // but here we can just iterate over siblings via the element for simple class toggle
            Array.from(this.el.parentNode.children).forEach(el => el.classList.remove("active"));
            this.ac("active");
        });
    }
}

class GridItem extends View {
    render() {
        this.ac("grid-item");
        icon(this.name || "extension").ac("lg");
        div.c("label", this.label || "Component");
    }
}

// Demo Page

section.c("demo-header", () => {
    h1("Icon Layout System");
    div.c("lead", "Flexible components built with Material Icons and CSS Grid/Flexbox.");
});

// Size Control System Demo
section.c("size-demo", () => {
    h2("Icon Size System");
    
    let current_size = "md";
    const sizes = ["sm", "md", "lg", "xl"];
    const demo_icons_list = [];
    const size_buttons = [];
    
    div.c("size-controls", () => {
        div("Control Size: ");
        sizes.forEach(size => {
            const btn = button(size.toUpperCase()).ac("size-btn");
            if (size === current_size) btn.ac("active");
            
            btn.click(() => {
                size_buttons.forEach(b => b.rc("active"));
                btn.ac("active");
                
                demo_icons_list.forEach(i => {
                    sizes.forEach(s => i.rc(s));
                    i.ac(size);
                });
            });
            size_buttons.push(btn);
        });
    });

    div.c("flex gap wrap pad bg-light shadow-inner rd-lg", () => {
        const names = ["home", "search", "settings", "favorite", "person", "notifications", "cloud", "verified_user"];
        names.forEach(name => {
            demo_icons_list.push(icon(name).ac(current_size));
        });
    });
});

section.c("items-demo", () => {
    h2("Icon Items (Flex List)");
    div.c("flex flex-col gap-sm", () => {
        new IconItem({ name: "mail", label: "Inbox Messages", size: "md" });
        new IconItem({ name: "send", label: "Sent Items", size: "md" });
        new IconItem({ name: "delete", label: "Trash Bin", size: "md" });
        new IconItem({ name: "report", label: "Spam Folder", size: "md" });
    });
});

section.c("tabs-demo", () => {
    h2("Icon Tabs (Navigation)");
    div.c("icon-tabs", () => {
        new IconTab({ name: "dashboard", label: "Stats", active: true });
        new IconTab({ name: "visibility", label: "Views" });
        new IconTab({ name: "group", label: "Users" });
        new IconTab({ name: "settings", label: "Admin" });
    });
});

section.c("grid-demo", () => {
    h2("Icon Grid (Feature Cards)");
    div.c("icon-grid", () => {
        new GridItem({ name: "bolt", label: "Fast Performance" });
        new GridItem({ name: "security", label: "Secure Data" });
        new GridItem({ name: "palette", label: "Custom Themes" });
        new GridItem({ name: "language", label: "Global Reach" });
        new GridItem({ name: "auto_awesome", label: "AI Powered" });
        new GridItem({ name: "sync", label: "Realtime Sync" });
    });
});
