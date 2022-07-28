<script setup lang="ts">
import { reactive, onBeforeUnmount, watch } from "vue";
import { Head } from "@vueuse/head";
import useFaviconBadgeNotify from "../../../src";

const state = reactive({
  favicon: "/favicon.svg",
  count: 0,
});

const setFavicon = (val: string) => {
  state.favicon = val;
};

const setCount = (val: number) => {
  state.count = val;
};

const { drawBadge, destroyBadge } = useFaviconBadgeNotify({
  src: state.favicon,
});

watch(
  () => state.count,
  (count, prevCount) => {
    drawBadge(count).then((badge) => setFavicon(badge));
  }
);

onBeforeUnmount(() => {
  destroyBadge();
});
</script>

<template>
  <Head>
    <title>Vue Badge Favicon</title>
    <link rel="icon" type="image/png" sizes="128x128" :href="state.favicon" />
  </Head>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <p class="buttons">
      <button type="button" class="increase" @click="setCount(state.count + 1)">
        increase
      </button>
      <span>{{ state.count }}</span>
      <button
        type="button"
        class="decrease"
        @click="state.count - 1 >= 0 && setCount(state.count - 1)"
      >
        decrease
      </button>
    </p>
  </div>
  <footer>
    <p>
      🍁 MIT Licensed | Copyright © 2022-present Abdulnasır Olcan and
      @favicon-badge-notify contributors
    </p>
  </footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  font-size: calc(10px + 2vmin);
  border-radius: 4px;
  padding: 0 8px;
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 16px;
}

.increase {
  border: 2px solid #42b983;
  color: #42b983;
}

.decrease {
  border: 2px solid #304455;
  color: #304455;
}

span {
  color: #42b983;
  font-size: 24px;
}
</style>
