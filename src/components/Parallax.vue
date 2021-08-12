<template>
  <div class="card bg-dark text-white">
    <img src="../assets/img/telas.png" class="card-img" alt="..." />
    <div class="card-img-overlay">
      <div class="card-title container">
        <div class="title">
          <div class="subtitle">Productos hechos por artesanos Mexicanos</div>
          <div>
            <router-link type="button" class="btn" :to="{ name: 'Catalogue' }"
              >Comprar ahora</router-link
            >
          </div>
        </div>
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
  height: 400px;
  border-radius: 0rem;
  border: 0px solid rgba(0, 0, 0, 0.125);

  .card-img-overlay {
    margin-top: 22px;
  }

  .title {
    font-weight: 600;
    font-size: 40px;
  }

  .subtitle {
    width: 45%;
  }

  .btn {
    font-weight: 550;
    font-size: 18px;
    padding: 0.5rem;

    transition: all 300ms;
    color: #10181d;
    background-color: #ffff;
    margin-top: 38px;
  }
  .btn:hover {
    background-color: #f0f0f0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
@media (max-width: 768px) {
  .card {
    .subtitle {
      font-weight: 500;
      font-size: 32px;
      width: 100%;
      background: #000;
      padding: 0.25rem;
      border-radius: 4px;
    }
    .card-img-overlay {
      text-align: center;
    }
  }
}
</style>