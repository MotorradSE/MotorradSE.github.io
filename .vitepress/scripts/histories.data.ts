import { createContentLoader } from "vitepress";

export default createContentLoader("/entries/histories/**/*.md", { includeSrc: true });
