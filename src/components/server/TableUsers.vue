<template>
  <div class="new-user row">
    <div class="col">
      <router-link type="button" class="btn" :to="{ name: 'Users' }"
        >Nuevo usuario</router-link
      >
    </div>
    <div class="col row">
      <div class="col">
        <select class="form-select" v-model="select">
          <option selected>Todos los roles</option>
          <option :value="rol._id" v-for="rol in rols" :key="rol._id">
            {{ rol.name }}
          </option>
        </select>
      </div>
      <div class="col">
        <button
          @click="getForRol"
          type="button"
          class="btn"
          :to="{ name: 'Users' }"
        >
          Nuevo usuario
        </button>
      </div>
    </div>
  </div>
  <div class="div"></div>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Nombre/S</th>
        <th scope="col">Apellidos</th>
        <th scope="col">Correo</th>
        <th scope="col">Artulizar</th>
        <th scope="col">Borrar</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user._id">
        <td class="padd">{{ user.first_name }}</td>
        <td class="padd">{{ user.last_name }}</td>
        <td class="padd">{{ user.email }}</td>
        <td>
          <router-link type="button" class="btn" :to="{ name: 'Users' }"
            >Actulizar</router-link
          >
        </td>
        <td>
          <button
            @click="deleteUserId(user._id)"
            type="button"
            class="btn btn-red"
            :to="{ name: 'Users' }"
          >
            Borrar
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { ref, onMounted } from "vue";
import {
  getUsers,
  getRols,
  getUsersForRols,
  deleteUser,
} from "../../server/product";
export default {
  setup() {
    var users = ref(null);
    var rols = ref(null);
    var select = ref("Todos los roles");
    onMounted(async () => {
      const response = await getUsers();
      users.value = response;
      const responseRols = await getRols();
      rols.value = responseRols;
    });

    const getForRol = async () => {
      if (select.value == "Todos los roles") {
        const response = await getUsers();
        users.value = response;
      } else {
        const response = await getUsersForRols(select.value);
        users.value = response;
      }
    };

    const deleteUserId = async (value) => {
      const response = await getUsersForRols(select.value);
      users.value = response;
    };

    return {
      users,
      rols,
      getForRol,
      select,
      deleteUserId,
    };
  },
};
</script>

<style lang="scss" scoped>
.btn {
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  background-color: #00bc8b;
}
.new-user {
  margin-top: 32px;
  margin-bottom: 32px;
}
.btn:hover {
  color: #ffffff;
}
table {
  margin-top: 32px;
  margin-bottom: 32px;

  .padd {
    padding: 1rem;
  }
  .btn {
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    background-color: #ffbb00;
  }
  .btn-red {
    background-color: #fc4141;
  }
}
</style>