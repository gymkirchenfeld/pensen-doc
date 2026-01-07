import { defineConfig } from "vitepress";
import AutoSidebar from "./plugins/auto-sidebar";

import deflist from "markdown-it-deflist";
import kbd from "markdown-it-kbd";
import multimdtable from "markdown-it-multimd-table";
import implicitfigures from "markdown-it-implicit-figures";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";
import tasklists from "markdown-it-task-lists";
import { withMermaid } from "vitepress-plugin-mermaid";
import markdownItKatex from "markdown-it-katex";

const search = process.env.NODE_ENV !== "developement";

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    lang: "de-CH",
    title: "pensen-dooku",
    base: "pensen",
    description: "Dokumentation Pensen-Manager",
    markdown: {
      html: true,
      lineNumbers: true,
      breaks: true,
      typographer: true,
      quotes: "«»‹›",
      linkify: true,
      config: (md) => {
        md.use(deflist);
        md.use(implicitfigures, {
          figcaption: true,
        });
        md.use(kbd);
        md.use(tasklists, { enabled: true });
        md.use(markdownItKatex);
        md.use(multimdtable, {
          headerless: true,
          rowspan: true,
        });
        md.use(tabsMarkdownPlugin);
      },
      container: {
        tipLabel: "Hinweis",
        warningLabel: "Warnung",
        dangerLabel: "Achtung",
        infoLabel: "Info",
        importantLabel: "Details",
      },
    },
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      editLink: {
        pattern:
          "https://gitlab.gymkirchenfeld.ch/develop/pensen-dooku/-/blob/main/docs/:path",
        text: "auf GitLab bearbeiten",
      },
      outlineTitle: "Inhalt dieser Seite",
      lastUpdated: {
        formatOptions: {
          forceLocale: true,
        },
        text: "aktualisiert am",
      },
      outline: [2, 4],
      darkModeSwitchLabel: "Wähle eine Seite der Macht",
      lightModeSwitchTitle: "Komme zur hellen Seite",
      darkModeSwitchTitle: "Komm zur dunklen Seite",
      search: {
        provider: search ? "local" : false,
        options: {
          disableDetailedView: true,
          translations: {
            button: {
              buttonText: "Suche",
              buttonAriaLabel: "Suche",
            },
            modal: {
              noResultsText: "Keine Ergebnisse für",
              resetButtonTitle: "zurücksetzen",
              footer: {
                selectText: "öffnen",
                navigateText: "auswählen",
                closeText: "schliessen",
              },
            },
          },
        },
      },
      nav: [{ text: "gk", link: "https://pensen.gymkirchenfeld.ch" }],
    },
    vite: {
      plugins: [AutoSidebar()],
    },
  }),
);
