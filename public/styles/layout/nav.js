import app, { el, div, h1, h2, h3, h4, p, is, section, style, ul, li, a, nav } from "/app.js";
import pnav from "../nav.js";
// this way, parent nav is rendered when imported
// we probably want to actually export the parent nav

// let nv; 

pnav.layout.ac("active").append(ul(() => {
    pnav.layout.flex = li(a("Flex").attr("href", "flex/"));
    pnav.layout.grid = li(a("Grid").attr("href", "grid/"));
}));

export default pnav;

// export const named = {
//     "flex/": "Flex",
//     "grid/": "Grid",
// };