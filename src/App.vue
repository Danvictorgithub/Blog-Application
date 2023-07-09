<script setup>
  import {RouterView} from 'vue-router';
  import { useAuthenticationStore } from './data/state';
  if (localStorage.getItem('token') && localStorage.getItem('username')) {
    useAuthenticationStore().setUsername(localStorage.getItem('username'));
    useAuthenticationStore().setIsLoggedIn(true);
  }
</script>
<template>
  <RouterView/>
</template>
<style scoped>
</style>
