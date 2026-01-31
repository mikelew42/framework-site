import Lew42 from "./framework/ext/Lew42/Lew42.js";
import dum from "./framework/dum/dum.js";
import "./framework/core/View/ResizeObserver.js";

const app = new Lew42();

app.dum = dum;

export default app;

export * from "./framework/ext/Lew42/Lew42.js";
export { dum };