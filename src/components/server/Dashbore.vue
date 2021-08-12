<template>
  <Sidebar />

  <div class="card-dashbore">
    <div class="row">
      <div class="col">
        <div class="card card-item-dashbore">
          <div class="title">Usuarios</div>
          <router-link type="button" class="btn" :to="{ name: 'Users' }"
            >Administrar productos</router-link
          >
        </div>
      </div>
      <div class="col">
        <div class="card card-item-dashbore">2</div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
export default {
  components: { Sidebar },
};
</script>

<style lang="scss" scoped>
.card-dashbore {
  margin-top: 32px;
  margin-bottom: 32px;

  .card-item-dashbore {
    padding: 1rem;

    .title {
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 12px;
    }
    .btn {
      color: #fff;
      font-size: 14px;
      font-weight: 500;
      background-color: #00bc8b;
    }
  }
}
</style>