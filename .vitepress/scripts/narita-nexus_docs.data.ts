import { createContentLoader } from "vitepress";

export default createContentLoader("/narita-nexus/docs/**/*.md", { includeSrc: true });
