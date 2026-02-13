import { View, div, icon } from "/app.js";

View.stylesheet(import.meta, "styles.css");

export class IconItem extends View {
    render() {
        this.ac("icon-item");
        this.icon_view = icon(this.name || "star").ac(this.size || "md");
        div.c("label", this.label || "Icon Item");
    }
}

export class IconTab extends View {
    render() {
        this.ac("icon-tab");
        if (this.active) this.ac("active");
        
        icon(this.name || "home").ac("md");
        div.c("label", this.label || "Home");
        
        this.click(() => {
            Array.from(this.el.parentNode.children).forEach(el => el.classList.remove("active"));
            this.ac("active");
        });
    }
}

export class GridItem extends View {
    render() {
        this.ac("grid-item");
        icon(this.name || "extension").ac("lg");
        div.c("label", this.label || "Component");
    }
}

export class GridNavItem extends View {
    render() {
        this.ac("grid-item grid-nav-item").href(this.path || "#");
        icon(this.name || "extension").ac("lg");
        div.c("label", this.label || "Grid Nav Item");
    }
}

GridNavItem.prototype.tag = "a";
