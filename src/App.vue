<script setup>
import { ref } from 'vue';
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';

const message = ref('Hello from vue');
</script>

<template>
  <nav>
    <Navbar />
  </nav>
  <main>
    <RouterView />
  </main>
</template>
