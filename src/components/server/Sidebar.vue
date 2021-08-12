<template>
  <nav class="navbar navbar-expand-lg vanish">
    <div class="container">
      <router-link
        class="navbar-brand"
        :to="{ name: 'Dashbore' }"
        active-class="active"
      >
        Panel de control
      </router-link>
      <ul class="nav">
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{ name: 'Users' }"
            active-class="active"
            >Usuario</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{ name: 'Catalogue' }"
            active-class="active"
            >Roles</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{ name: 'AboutUs' }"
            active-class="active"
            >Productos</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{ name: 'Catalogue' }"
            active-class="active"
            >Categorias</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  height: 4.4rem;
  border-top: 2px solid #29d670;

  .btn-hamburguesa {
    display: none;
  }
  .navbar-brand {
    font-weight: bold;
    font-size: 28px;
  }

  a {
    color: #000;
    font-weight: 400;
    font-size: 18px;
    transition: all 300ms;
  }
  a:hover {
    color: #d6298f;
  }
  .active {
    color: #d6298f;
  }
  .img-responsive {
    width: 22px;
    height: 22px;
  }
  .img-responsive-min {
    margin-left: 7px;
    width: 10px;
    height: 10px;
  }
  img {
    width: 44px;
    height: 44px;
  }
  .login {
    img {
      width: 100%;
      height: 20px;
    }
  }
}
</style>