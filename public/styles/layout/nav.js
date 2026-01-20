import app, { el, div, h1, h2, h3, h4, p, is, section, style, ul, li, a, nav } from "/app.js";
import pnav from "../nav.js";

export default pnav.layout.ac("active").append(nav(nav => {
    nav.flex = a("Flex").href("flex/");
    nav.flex = a("Grid").href("grid/");
}));

export const named = {
    "flex/": "Flex",
    "grid/": "Grid",
};