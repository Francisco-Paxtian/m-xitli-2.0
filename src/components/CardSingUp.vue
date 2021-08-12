<template>
  <div class="card login">
    <div class="row">
      <div class="col-lg-6">
        <img src="../assets/img/singup.png" alt="" srcset="" />
      </div>
      <div class="col-lg-6">
        <div class="title">
          Nadxieelii <span class="subtitle">(Te quiero )</span>
        </div>
        <div class="row login-row">
          <form action="" @submit.prevent="singUp">
            <div class="col-sm-12 login-row">
              <input
                type="text"
                class="form-control login-input"
                placeholder="Ingresa tu nombre/s"
                v-model="user.first_name"
                minlength="3"
                required
              />
            </div>
            <div class="col-sm-12 login-row">
              <input
                type="text"
                class="form-control login-input"
                placeholder="Ingresa tus apellidos"
                v-model="user.last_name"
                minlength="6"
                required
              />
            </div>
            <div class="col-sm-12 login-row">
              <input
                type="email"
                class="form-control login-input"
                placeholder="Ingresa tu correo electronico"
                v-model="user.email"
                required
              />
            </div>
            <div class="col-sm-12 login-row">
              <input
                type="password"
                class="form-control login-input"
                placeholder="Ingresa tu contraseña"
                v-model="user.password"
                minlength="4"
                required
              />
            </div>
            <div class="col-sm-12 login-row">
              <input
                type="submit"
                class="btn btn-warning btn-login"
                value="Registrate"
              />
            </div>
          </form>
          <div class="login-row">
            <div class="subtitle-row">
              <div class="subtitle">
                ¿Ya cuentas con una cuenta?
                <router-link class="btn btn-link" :to="{ name: 'LogIn' }"
                  >Inicia sesion</router-link
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
import { createUser, searchEmail } from "../server/product";
import swal from "sweetalert2";
import { useRouter } from "vue-router";
export default {
  setup() {
    var user = ref({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      rol: "60db2f231b05cc34808d1944",
    });
    const router = useRouter();
    const singUp = async () => {
      swal.fire({
        text: "Creando usuario",
        imageUrl: "https://mxitli.000webhostapp.com/upload-2.svg",
        imageHeight: 88,
        showConfirmButton: false,
      });
      const response = await searchEmail(user.value);
      if (response) {
        const result = await createUser(user.value);
        if (result) {
          swal.fire({
            position: "top-end",
            icon: "success",
            title: "Usuario creado!",
            text: "Bienvenido!",
            showConfirmButton: false,
            timer: 1500,
          });
          router.push("/iniciar-sesion/");
        } else {
          swal.fire({
            position: "top-end",
            icon: "error",
            title: "Error en el servidor",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } else {
        swal.fire({
          position: "top-end",
          icon: "error",
          title: "El correo ya esta utlizado",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    };

    return {
      user,
      singUp,
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
</style>>
