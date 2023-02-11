<script setup>
  import Header from "./components/Header.vue";
</script>

<template>
  <Header title="Leeman Tech Blog"/>
  <div class="wrapper container">
  </div>
</template>
<style scoped>
  .wrapper {
    flex: 1 0 auto;
    max-width: 1280px;
  }
  .container {
    width:100%;
    margin: 0 auto;
    background-color: white;
  }
</style>
