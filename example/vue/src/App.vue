<script setup lang="ts">
import { ref } from 'vue'
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

const { drawBadge } = useFaviconBadge({
  src: favicon.value,
  badgeValue: count.value,
})

drawBadge().then(badge => setFavicon(badge));

defineProps<{ msg: string }>()

</script>



<template>
  <Head>
    <title>Vue Badge Favicon</title>
    <link rel="icon" type="image/png" sizes="128x128" :href="favicon" />
  </Head>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>{{ msg }}</h1>
  <button type="button" @click="setCount(count + 1)">count is: {{ count }}</button>
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
