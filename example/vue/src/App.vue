<script setup lang="ts">
import { ref, onBeforeUnmount } from 'vue'
import { Head } from '@vueuse/head'
import useFaviconBadge from '../../../src'


const favicon = ref('/favicon.svg');
const count = ref(0);

const setFavicon = (val: string) => {
  favicon.value = val
};

const setCount = (val: number) =>  {
  count.value = val;
}

const { drawBadge, destroyBadge } = useFaviconBadge({
  src: favicon.value,
  badgeValue: count.value,
})

const clicked = () => {
  setCount(count.value + 1)
  drawBadge().then(badge => setFavicon(badge))
}

drawBadge().then(badge => { console.log(badge); setFavicon(badge)});

defineProps<{ msg: string }>()

onBeforeUnmount(() => {
  destroyBadge();
})

</script>



<template>
  <Head>
    <title>Vue Badge Favicon</title>
    <link rel="icon" type="image/png" sizes="128x128" :href="favicon" />
  </Head>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>{{ msg }}</h1>
  <button type="button" @click="clicked()">count is: {{ count }}</button>
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
</style>
