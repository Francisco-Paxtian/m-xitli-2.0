<template>
  <nav class="navbar navbar-expand-lg vanish">
    <div class="container">
      <router-link class="navbar-brand" to="/"> M-xitli </router-link>
      <ul class="nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/" active-class="active"
            >Inicio</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{ name: 'AboutUs' }"
            active-class="active"
            >Sobre nosotros</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{ name: 'Catalogue' }"
            active-class="active"
            >Catalago</router-link
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Culturas</a>
        </li>
        <li class="nav-item dropdown-vue" v-if="rol == 0 || rol == undefined">
          <a class="nav-link">
            <img
              src="../assets/img/settings.svg"
              alt=""
              class="img-responsive"
            />
            <img
              src="../assets/img/caret-abajo.svg"
              alt=""
              class="img-responsive-min"
            />
          </a>
          <div class="dropdown-vue-content">
            <router-link :to="{ name: 'LogIn' }">Iniciar sesion</router-link>
            <router-link :to="{ name: 'Cart' }">
              <img src="../assets/img/cart.svg" alt="" srcset="" />
              ({{ countCart }})
            </router-link>
            <router-link :to="{ name: 'SingUp' }">Registrate</router-link>
          </div>
        </li>
        <li
          class="nav-item dropdown-vue"
          v-if="rol == '60db2f231b05cc34808d1944'"
        >
          <a class="nav-link">
            {{ name }}
            <img
              src="../assets/img/caret-abajo.svg"
              alt=""
              class="img-responsive-min"
            />
          </a>
          <div class="dropdown-vue-content">
            <router-link :to="{ name: 'SettingsUser' }"
              >Configuracion</router-link
            >
            <router-link :to="{ name: 'Cart' }">
              <img src="../assets/img/cart.svg" alt="" srcset="" />
              ({{ countCart }})
            </router-link>
            <router-link :to="{ name: 'ProcessClose' }"
              >Cerrar sesion</router-link
            >
          </div>
        </li>
      </ul>
    </div>
  </nav>

  <!-- nav hamburguesa --->
  <nav class="navbar navbar-dark appear">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/"> M-xitli </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <img src="../assets/img/icono.svg" alt="" srcset="" />
      </button>
    </div>
  </nav>
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="menu-hamburgesa">
      <ul class="nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/" active-class="active"
            >Inicio</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{ name: 'AboutUs' }"
            active-class="active"
            >Sobre nosotros</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{ name: 'Catalogue' }"
            active-class="active"
            >Catalago</router-link
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Culturas</a>
        </li>
        <li class="divider"></li>
        <div v-if="rol == '60db2f231b05cc34808d1944'">
          <li class="nav-item">
            <div class="name">{{ name }}</div>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'SettingsUser' }"
              >Configuracion</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'ProcessClose' }"
              >Cerrar sesion</router-link
            >
          </li>
        </div>
        <div
          v-if="
            rol == 0 || rol == undefined || rol != '60db2f231b05cc34808d1944'
          "
        >
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'LogIn' }"
              >Iniciar sesion</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'SingUp' }"
              >Registrate</router-link
            >
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { closeSesion } from "../server/product";
export default {
  setup() {
    const store = useStore();
    const countCart = computed(() => store.state.countCart);
    const rol = localStorage.getItem("ROL");
    const name = localStorage.getItem("NAME");

    const close = () => {
      closeSesion();
    };

    return {
      rol,
      name,
      countCart,
      close,
    };
  },
};
</script>

<style lang="scss" scoped>
.appear {
  display: none;

  button {
    //background-color: #d6298f;

    img {
      width: 42px;
      height: 42px;
    }
  }
}
.menu-hamburgesa {
  ul {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  a {
    color: #000;
    font-weight: 600;
    font-size: 20px;
  }
  .name {
    text-align: center;
    margin-top: 22px;
    margin-bottom: 22px;
    color: #000;
    font-weight: 700;
    font-size: 22px;
  }
  .divider {
    width: 75%;
    padding: 1rem;
    border-bottom: 2px solid #d6298f;
  }
  .active {
    color: #d6298f;
  }
}
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
.dropdown-vue {
  float: left;
  overflow: hidden;
}

.dropdown-vue-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-vue-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;

  img {
    width: 24px;
    height: 24px;
  }
}

.dropdown-vue-content a:hover {
  background-color: rgb(236, 235, 235);
}

.dropdown-vue:hover .dropdown-vue-content {
  display: block;
}
@media (max-width: 1001px) {
  .vanish {
    display: none;
  }
  .appear {
    display: flex;
  }
}
/*@media (max-width: 768px) {
  .navbar {
    .nav {
      display: none;
    }
  }
}*/
</style>