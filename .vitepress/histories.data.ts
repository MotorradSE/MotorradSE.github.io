import { createContentLoader } from "vitepress";

export default createContentLoader("histories/**/*.md", { includeSrc: true });
