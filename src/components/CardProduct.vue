<template>
  <div class="div product">
    <div class="back-catalago">
      <router-link class="nav-link" :to="{ name: 'Catalogue' }"
        ><img src="../assets/img/ocelotl.svg" alt="" srcset="" /> Regresar al
        catalago</router-link
      >
    </div>
    <div class="card" v-if="product">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="https://www.kolpaper.com/wp-content/uploads/2020/04/not-found-wallpaper.jpg"
            :alt="product.name"
            v-if="!product.image || product.image == ''"
          />
          <img
            :src="product.image"
            class="img-fluid rounded-start"
            :alt="product.name"
            v-else
          />
        </div>

        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-muted">{{ formantDate(product.date) }}</small>
            </p>
            <button @click="addCart" type="button" class="btn">
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="upload">
      <img src="../assets/img/upload.svg" alt="" srcset="" />
    </div>
  </div>
</template>

<script>
import moment from "moment";
import "moment/locale/es";
import { useRoute } from "vue-router";
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { getProductId, addProductCart, getCountCart } from "../server/product";
export default {
  setup() {
    var product = ref(null);
    const store = useStore();

    onMounted(async () => {
      const route = useRoute();
      const response = await getProductId(route.params.id);
      //const test = await getProductsCart();
      product.value = response;
    });

    var formantDate = (value) => {
      return moment(value).fromNow();
    };

    const addCart = async () => {
      const response = await addProductCart(product.value._id);
      const count = await getCountCart();
      store.commit("setCountCart", count);
    };

    return {
      product,
      formantDate,
      addCart,
    };
  },
};
</script>

<style lang="scss" scoped>
.product {
  margin-top: 32px;
  .back-catalago {
    img {
      width: 30px;
      height: 30px;
    }
    a {
      font-size: 18px;
      font-weight: 400;
      color: black;
    }
  }

  .card {
    width: 75%;
    margin: 0 auto;
    margin-top: 32px;
    margin-bottom: 32px;
    height: 450px;
    img {
      width: 100%;
      height: 450px;
      object-fit: cover;
    }
    .btn {
      color: #fff;
      font-size: 13px;
      font-weight: 500;
      background-color: #00bc8b;
    }
  }
}
.upload {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}

@media (max-width: 768px) {
  .product {
    .card {
      height: auto;
    }
  }
}
</style>