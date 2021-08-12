<template>
  <div class="settings" v-if="user" @load="test">
    <div class="card card-settings">
      <h3 class="title">Perfil de {{ user.first_name }}</h3>
      <div class="img-settings">
        <div v-if="user.image">
          <div>
            <img id="imgUser" class="circle" :src="user.image" alt="" />
            <!--<img :src="user.image" :alt="user.name" srcset="" />-->
          </div>

          <div id="preview" :class="{ 'preview-img': showPreview }"></div>
        </div>
        <div v-else>
          <div>
            <img
              id="imgUser"
              class="img-respons"
              src="../assets/img/calavera-mexicana.svg"
            />
          </div>

          <div id="preview" :class="{ 'preview-img': showPreview }"></div>
        </div>
      </div>
      <div class="input-group file-input">
        <input
          id="file"
          type="file"
          name="file0"
          ref="file"
          @change="fileChange"
          class="form-control"
          accept="image/png,image/jpeg"
        />
      </div>

      <div class="settings-row">
        <div class="date-user settings-row">Datos del usuario</div>
        <div class="input-group settings-row">
          <span class="input-group-text">Nombre/s</span>
          <input
            type="text"
            class="form-control settings-input"
            placeholder="Inserta tu nombre/s"
            v-model="user.first_name"
          />
        </div>
        <div class="input-group settings-row">
          <span class="input-group-text">Apellidos</span>
          <input
            type="text"
            class="form-control settings-input"
            placeholder="Inserta tus apellidos"
            v-model="user.last_name"
          />
        </div>
        <div class="input-group settings-row">
          <span class="input-group-text">Correo electronico</span>
          <input
            type="email"
            class="form-control settings-input"
            placeholder="Inserta tu correo"
            v-model="user.email"
            disabled
          />
        </div>
        <div class="input-group settings-row">
          <span class="input-group-text">Contraseña</span>
          <input
            id="password"
            type="password"
            class="form-control settings-input"
            placeholder="Inserta tu contraseña"
            v-model="user.password"
          />
          <button @click="show" class="btn btn-warning show-password">
            <img src="../assets/img/eye.svg" alt="" />
          </button>
        </div>

        <div class="input-group settings-row">
          <input
            @click="updateClientServe"
            type="button"
            class="btn btn-warning btn-login"
            value="Realizar cambios"
          />
        </div>
      </div>
    </div>
  </div>
  <div v-else class="upload">
    <img src="https://mxitli.000webhostapp.com/upload-2.svg" alt="" srcset="" />
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { getUserId, updateClient } from "../server/product";
import swal from "sweetalert2";
import { useRouter } from "vue-router";
export default {
  setup() {
    let id = localStorage.getItem("ID");
    let user = ref(null);
    const store = useStore();
    const showPreview = computed(() => store.state.showPreview);
    //const file = ref("");
    const router = useRouter();

    const fileChange = () => {
      document.getElementById("imgUser").hidden = true;
      user.image = file.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(user.image);
      reader.onload = function (event) {
        let preview = document.getElementById("preview"),
          image = document.createElement("img");
        image.style.height = "175px";
        image.style.width = "175px";
        image.style.borderRadius = "100%";
        image.style.objectFit = "cover";
        image.style.border = "3px solid #00bc8b";

        image.src = reader.result;

        preview.innerHTML = "";
        preview.append(image);
      };
      //file.files[0].name;
    };
    onMounted(async () => {
      const response = await getUserId(id);
      user.value = response;
    });

    const updateClientServe = async () => {
      const response = await updateClient(user, file);
      if (response) {
        swal.fire({
          position: "top-end",
          icon: "success",
          title: "Datos actulizados!",
          text: "Se ha actilizado los datos correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
        const response = await getUserId(id);
        user.value = response;
      }
    };

    const show = () => {
      let password = document.getElementById("password");

      if (password.type === "password") {
        password.type = "text";
      } else {
        password.type = "password";
      }
    };

    const test = () => {
      //console.log("cambio algo");
    };

    return {
      id,
      user,
      fileChange,
      showPreview,
      updateClientServe,
      show,
    };
  },
};
</script>

<style lang="scss" scoped>
.settings {
  margin-top: 32px;
  margin-bottom: 32px;
  .card-settings {
    height: auto;
    padding: 3rem;

    .title {
      padding: 0.4rem;
      color: #ffff;
      background-color: black;
      border-radius: 3px;
    }
    .img-settings {
      margin-top: 32px;
      text-align: center;

      .circle {
        border-radius: 100%;
      }

      img {
        width: 175px;
        height: 175px;
        border-radius: 100%;
        padding: 0.7rem;
        border: 3px solid #00bc8b;
        object-fit: cover;
      }
    }

    .date-user {
      font-size: 28px;
      font-weight: 600;
    }
    .file-input {
      width: 75%;
      margin: 0 auto;
      margin-top: 42px;
      margin-bottom: 12px;
    }

    .show-password {
      img {
        width: 24px;
        height: 24px;
      }
    }
  }
  .settings-row {
    padding: 1.2rem;
  }
  span {
    font-size: 16px;
    font-weight: 500;
  }
  .settings-input {
    height: 48px;
    font-size: 16px;
    font-weight: 600;
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
}

.upload {
  height: 100vh;
  margin-top: 42px;
  text-align: center;

  img {
    width: 110px;
    height: 110px;
  }
}
.vanish-all {
  height: 0px;
  display: none;
}
@media (max-width: 960px) {
  .card-settings {
    padding: 1rem !important;
    .file-input {
      width: 100%;
    }

    .settings-row {
      padding: 0rem;
      margin-top: 2rem;
    }

    .file-input {
      width: 100% !important;
      margin: 0 auto;
      margin-top: 42px;
      margin-bottom: 0px !important;
    }
    .settings-input {
      height: 48px;
      font-size: 14px;
      font-weight: 500;
    }
    span {
      font-size: 14px;
      font-weight: 500;
    }
  }

  .img-respons {
    width: 105px !important;
    height: 105px !important;
  }
}
</style>