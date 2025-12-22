import fg from "fast-glob";
import fs from "fs";
import matter from "gray-matter";

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function makeSidebar() {
  const items = [];
  const files = fg.sync("docs/*.md", { ignore: ["docs/index.md"] });

  for (const file of files) {
    const content = fs.readFileSync(file);
    const link = file.replace("docs", "");
    const frontmatter = matter(content);
    const text =
      frontmatter.data.title ||
      capitalize(file.replace("docs/", "").replace(".md", ""));
    var stats = fs.statSync(file);
    var mtime = stats.mtime.toISOString();
    items.push({
      text: text,
      description: frontmatter.data.description,
      link: link,
      icon: frontmatter.data.icon,
      lastUpdated: mtime,
    });
  }
  return items;
}

export default function AutoSidebar() {
  return {
    name: "auto-sidebar",
    configureServer(server) {
      const fsWatcher = server.watcher.add("*.md");
      fsWatcher.on("all", async (event, path) => {
        if (event !== "change") {
          console.log(`${event} ${path}`);
          await server.restart();
        }
      });
    },
    config(config) {
      const { themeConfig } = config.vitepress.site;
      themeConfig.sidebar = makeSidebar();
      console.log("injected sidebar data successfully");
      return config;
    },
  };
}
