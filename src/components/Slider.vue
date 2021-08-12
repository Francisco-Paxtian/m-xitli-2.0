<template>
  <div class="card bg-dark text-white">
    <img src="../assets/img/products.png" class="card-img" alt="..." />
    <div class="card-img-overlay">
      <div class="card-title container">
        <div class="title">Catalago de productos</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
  }
  .title {
    font-weight: 500;
    font-size: 38px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
@media (max-width: 484px) {
  .title {
    font-weight: 600 !important;
    font-size: 31px !important;
  }
}
</style>