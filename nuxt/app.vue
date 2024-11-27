<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome  v-if="test.result == 'ok'"/>
    
  </div>
</template>
<script lang="ts" setup>
var nuxt = useNuxtApp();
var {data} = await nuxt.$axios.get('/home/test');
var test = $ref(data);
</script>