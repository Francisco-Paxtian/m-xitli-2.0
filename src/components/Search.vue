<template>
  <div>
    <Header />
    <SliderSearch />
    <ListSearchProducts />
  </div>
</template>

<script>
import Header from "./Header";
import SliderSearch from "./SliderSearch";
import ListSearchProducts from "./ListSearchProducts.vue";
export default {
  components: {
    Header,
    SliderSearch,
    ListSearchProducts,
  },
};
</script>

<style>
</style>