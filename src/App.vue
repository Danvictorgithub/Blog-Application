<script setup>
  import {RouterView} from 'vue-router';
  import { ref, watch} from 'vue';
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";
</script>
<template>
  <Header title="Leeman Tech Blog"/>
  <RouterView />
  <Footer/>
</template>
<style scoped>
</style>
