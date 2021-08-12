<template>
  <div>
    <Header />
    <Slider />
    <ListProducts />
  </div>
</template>

<script>
import Header from "./Header";
import Slider from "./Slider";
import ListProducts from "./ListProducts.vue";
export default {
  components: {
    Header,
    Slider,
    ListProducts,
  },
};
</script>

<style>
</style>