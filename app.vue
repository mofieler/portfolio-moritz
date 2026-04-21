<script setup lang="ts">
const { init } = useColorMode()
// Re-apply dark class after hydration (anti-FOUC runs before, but Nuxt may clear it)
onMounted(init)
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
