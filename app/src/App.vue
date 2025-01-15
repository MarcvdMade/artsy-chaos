<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBar from './components/nav/NavBar.vue';
import Footer from './components/footer/Footer.vue';
import { store } from './store/store';

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
  width: 100%;
  justify-content: space-between;

  main {
    flex: 1;
  }
}
</style>
