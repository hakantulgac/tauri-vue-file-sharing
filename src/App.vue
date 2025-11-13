<script setup>
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <nav>
    <Navbar />
  </nav>
  <main>
    <RouterView />
  </main>
</template>
