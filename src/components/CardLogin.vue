<template>
  <div class="card login">
    <div class="row">
      <div class="col-lg-6">
        <img src="../assets/img/login.png" alt="" srcset="" />
      </div>
      <div class="col-lg-6">
        <div class="title">
          Shinuushou <span class="subtitle">(¿cómo te encuentras?)</span>
        </div>
        <div class="row login-row">
          <form action="" @submit.prevent="login">
            <div class="col-sm-12 login-row">
              <input
                type="email"
                class="form-control login-input"
                placeholder="Ingresa tu correo electronico"
                v-model="email"
                required
              />
            </div>
            <div class="col-sm-12 login-row input-group">
              <input
                type="password"
                class="form-control login-input"
                placeholder="Ingresa tu contraseña"
                v-model="password"
                minlength="4"
                required
              />
            </div>
            <div class="col-sm-12 login-row">
              <input
                type="submit"
                class="btn btn-warning btn-login"
                value="Iniciar sesion"
              />
            </div>
          </form>
          <div class="login-row">
            <div class="subtitle-row">
              <div class="subtitle">
                ¿Todavia no tienes una cuenta?
                <router-link class="btn btn-link" :to="{ name: 'SingUp' }"
                  >Crea una ahora</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { validateUser } from "../server/product";
import swal from "sweetalert2";
export default {
  setup() {
    var email = ref("");
    var password = ref("");
    const router = useRouter();

    const login = async () => {
      swal.fire({
        text: "Validando datos",
        imageUrl: "https://mxitli.000webhostapp.com/upload-2.svg",
        imageHeight: 88,
        showConfirmButton: false,
      });
      const response = await validateUser(email.value, password.value);
      if (response == 2) {
        swal.fire({
          position: "top-end",
          icon: "success",
          title: "Aguiuu!",
          text: "Bienvenido!",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/");
      } else if (response == 1) {
        swal.fire({
          position: "top-end",
          icon: "success",
          title: "Admin",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/panel-control");
      } else {
        swal.fire({
          position: "top-end",
          icon: "error",
          title: "Usuario o contraseña incorrectas",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    };

    return {
      email,
      password,
      login,
    };
  },
};
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  margin-top: 32px;
  margin-bottom: 32px;
  text-align: center;
  .title {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 22px;
    margin-top: 22px;
  }
  .subtitle {
    text-align: left;
    font-size: 18px;
    font-weight: 400;
    color: rgb(170, 170, 170);

    a {
      font-size: 18px;
      font-weight: 400;
      color: #d6c629;
      text-decoration: none;
    }
  }
  .login-row {
    font-size: 19px;
    font-weight: 500;
    padding: 1rem;
    margin-bottom: 22px;
  }
  .subtitle-row {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .login-input {
    height: 60px;
  }
  .btn-login {
    width: 100%;
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    padding: 0.5rem;
    background-color: #00bc8b;
    border: none;
  }
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }

  .show-password {
    margin-left: 33px;
    img {
      width: 24px;
      height: 24px;
    }
  }
}
@media (max-width: 992px) {
  .login {
    height: auto;
    background-color: #f9f9f9;
    img {
      height: 0px;
    }
  }
}
</style>