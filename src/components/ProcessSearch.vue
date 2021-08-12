<template></template>

<script>
import { onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
export default {
  setup() {
    onMounted(async () => {
      const router = useRouter();
      const route = useRoute();
      router.push("/buscando-productos/" + route.params.search);
    });
  },
};
</script>

<style>
</style>