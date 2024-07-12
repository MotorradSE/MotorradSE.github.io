import { createContentLoader } from "vitepress";

export default createContentLoader("/entries/blog/**/*.md", { includeSrc: true });
