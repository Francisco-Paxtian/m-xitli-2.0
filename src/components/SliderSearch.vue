<template>
  <div class="card bg-dark text-white">
    <img src="../assets/img/calaveras.png" class="card-img" alt="..." />
    <div class="card-img-overlay">
      <div class="card-title container">
        <div class="title">Resultados de: {{ name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const name = route.params.search;

    return {
      name,
    };
  },
};
</script>

<style lang="scss" scoped>
.card-img,
.card-img-bottom {
  border-bottom-right-radius: 0rem;
  border-bottom-left-radius: 0rem;
}
.card-img,
.card-img-top {
  border-top-left-radius: 0rem;
  border-top-right-radius: 0rem;
}
.card {
  text-align: center;
  height: 200px;

  border-radius: 0rem;
  border: 0px solid rgba(0, 0, 0, 0.125);
  .card-img-overlay {
    padding: 0rem;
    line-height: 160px;
  }
  .title {
    font-weight: 500;
    font-size: 28px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>