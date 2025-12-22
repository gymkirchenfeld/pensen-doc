<script setup>
import DefaultTheme from "vitepress/theme";

const { Layout } = DefaultTheme;
import VPFeatures from "vitepress/dist/client/theme-default/components/VPFeatures.vue";

import { useData } from "vitepress";
const { page, theme } = useData();

const features = theme.value.sidebar.map((el) => ({
  icon: el.icon,
  title: el.text,
  details: el.description,
  link: el.link,
}));
</script>

<template>
  <Layout>
    <template #nav-bar-title-before>
      <svg
        class="logo"
        version="1.1"
        id="Ebene_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="1.2rem"
        heigth="1.2rem"
        viewBox="0 0 14 15"
        enable-background="new 0 0 14 15"
        xml:space="preserve"
      >
        <g>
          <path
            d="M7,2.5L0,4.2V1.7L7,0l7,1.7v2.5L7,2.5z M0,5.9h2.5V15H0V5.9z M5.7,5.9h2.5V15H5.7V5.9z M11.5,5.9H14V15
          h-2.5V5.9z"
          />
        </g>
      </svg>
    </template>

    <template #home-hero-after>
      <VPFeatures :features="features" />
    </template>

    <template #doc-before>
      <div style="display: flex; align-items: center; margin-bottom: 2rem">
        <div style="font-size: 4rem; margin-right: 1rem">
          {{ $frontmatter.icon }}
        </div>
        <div class="vp-doc" style="flex-grow: 2">
          <h1>
            {{ $frontmatter.title }}
          </h1>
          <div
            style="
              width: 100%;
              height: 2px;
              background-color: var(--vp-c-brand);
            "
          ></div>
          <div
            style="color: var(--vp-c-text-2)"
            v-if="$frontmatter.description"
          >
            {{ $frontmatter.description }}
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>
