<script setup lang="ts">
import { ref, onBeforeUnmount, reactive, onMounted } from 'vue'
import { Head } from '@vueuse/head'
import useFaviconBadge from '../../../src'

const state = reactive({
  count: 0,
  favicon: 'favicon.svg'
});

const setFavicon = (val: string) => state.favicon = val;
const setCount = (val: number) =>  state.count = val;

const { drawBadge, destroyBadge } = useFaviconBadge({
  src: state.favicon,
  badgeValue: state.count,
})

onMounted(() => {
 drawBadge().then(badge => setFavicon(badge));  
})

defineProps<{ msg: string }>()

onBeforeUnmount(() => {
  destroyBadge();
})

</script>

<template>
  <Head>
    <title>Vue Badge Favicon</title>
    <link rel="icon" type="image/png" sizes="128x128" :href="state.favicon" />
  </Head>
  <img alt="Vue logo" src="./assets/logo.png" />
  <p>To send <code>notifications</code> to your browser tab, increase the number. {{ msg }}</p>
          <p class="buttons">
  <button type="button" class="increase" @click="setCount(state.count + 1)">increase</button>
  <span>{{ state.count }}</span>
  <button type="button" class="decrease" @click="state.count - 1 >= 0 && setCount(state.count - 1)">decrease</button>
  </p>
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
  border: 2px solid #304455;
  color: #304455;
}

.decrease {
  border: 2px solid #42b983;
  color: #42b983;
}

</style>
