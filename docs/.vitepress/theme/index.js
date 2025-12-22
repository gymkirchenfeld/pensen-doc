// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import { inBrowser, useRoute } from "vitepress";
import { enhanceAppWithTabs } from "vitepress-plugin-tabs/client";
import MyLayout from "./MyLayout.vue";
import mediumZoom from "medium-zoom";
import { nextTick, watch } from "vue";
import "./style.css";
import "markdown-it-katex/node_modules/katex/dist/katex.min.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(MyLayout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    enhanceAppWithTabs(app);
  },
  setup() {
    const route = useRoute();
    watch(
      () => route.path,
      () =>
        nextTick(() => {
          if (inBrowser) mediumZoom(".zoom");
        }),
      { immediate: true },
    );
  },
};
