<template lang="pug">
div    
    MainComponentTheHeader
    NuxtPage
    MainComponentTheFooter
</template>
<script lang="ts" setup>
const description = ref("food website provide for every one");
useHead({
  titleTemplate: "Humm - %s",
  meta: [
    {
      charset: "utf-8",
    },
    {
      name: "viewport",
      content: "width=device-width,initial-scale=1",
    },
    {
      name: "description",
      content: description,
    },
  ],
});
</script>

<style></style>
