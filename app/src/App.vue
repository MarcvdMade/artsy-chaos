<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from './components/nav/NavBar.vue';
import Footer from './components/footer/Footer.vue';
import { store } from './store/Store';

</script>

<template>
  <div class="layout" :class="{'layout--dark': store.darkmode}">
    <NavBar />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;

  main {
    flex: 1;
  }
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
