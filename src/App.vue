<script setup>
  import {RouterView} from 'vue-router';
  import { useAuthenticationStore } from './data/state';
  import Header from "./components/ui/Header.vue";
  import Footer from "./components/ui/Footer.vue";
</script>
<template>
  <Header title="Leeman Tech Blog"/>
  <RouterView/>
  <Footer/>
</template>
<style scoped>
</style>
