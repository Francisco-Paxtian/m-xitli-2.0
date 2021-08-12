<template>
  <div>
    <Header />
    <Parallax />
    <Welcome />
    <LastProducts />
  </div>
</template>

<script>
import Header from "./Header";
import Parallax from "./Parallax";
import Welcome from "./Welcome";
import LastProducts from "./LastProducts";
export default {
  components: {
    Header,
    Parallax,
    Welcome,
    LastProducts,
  },
};
</script>

<style>
</style>