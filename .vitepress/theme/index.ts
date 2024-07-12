// https://vitepress.dev/guide/custom-theme
import { h, watch } from "vue";
import Theme from "vitepress/theme";
import "./style.css";
import Blog from "./layout_blog.vue";
import History from "./layout_history.vue";
import NaritaNexus_Activity from "./layout_nexus_activity.vue";
import { install } from 'element-plus';
import 'element-plus/dist/index.css';

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    app.component("blog", Blog);
    app.component("history", History);
    app.component("narita-nexus_activities", NaritaNexus_Activity);
    install(app);

    if (globalThis && globalThis.gtag) {
      watch(router.route, () => {
        globalThis.gtag("config", globalThis.GA_MEASUREMENT_ID, {
          page_path: router.route.path,
        });
      });
    }
  },
};
