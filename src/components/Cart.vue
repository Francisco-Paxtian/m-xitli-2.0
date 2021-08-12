<template>
  <Header />

  <div class="title">Carrito de compra</div>
  <div class="card cart" v-if="products">
    <div v-if="products">
      <div class="products row" v-for="product in products" :key="product._id">
        <div class="col-3">
          <img :src="product.image" alt="" srcset="" />
        </div>
        <div class="col-4">
          <div class="title">{{ product.name }}</div>
          <div>
            <div class="input-group">
              <span class="input-group-text">Cantidad</span>
              <input
                type="number"
                class="form-control input-w"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                :placeholder="product.quantity"
                disabled
              />
            </div>
            <div>{{ product.price }}$</div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="upload">
        <img src="../assets/img/upload-2.svg" alt="" />
      </div>
    </div>
  </div>
  <div class="not-product" v-else>No hay productos en el carrito</div>
  <!--<div >
    <div><img :src="product.image" alt="" srcset="" /></div>
    <div>{{ product.name }}</div>
    <div>{{ product.quantity }}</div>
  </div>-->
</template>

<script>
import Header from "./Header.vue";
import { ref, onMounted, watchEffect } from "vue";
import { getProductsCart } from "../server/product";
export default {
  setup() {
    let products = ref(null);
    onMounted(async () => {
      const response = await getProductsCart();
      products.value = response;
    });

    return {
      products,
    };
  },
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
.title {
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 28px;
  font-weight: 500;
}
.not-product {
  height: 75vh;
  margin-top: 3rem;
}
.cart {
  height: 100vh;
  margin-top: 32px;
  margin-bottom: 32px;
  padding: 1rem;
  overflow-y: scroll;

  .products {
    margin-top: 32px;
    margin-bottom: 32px;
    img {
      width: 75%;
      height: 114px;
      object-fit: cover;
    }

    .title {
      margin-top: 1rem;
      margin-bottom: 1rem;
      font-size: 18px;
      font-weight: 400;
    }
    .input-w {
      width: 30px;
    }
  }
  .upload {
    height: auto;
    margin-top: 42px;
    text-align: center;

    img {
      width: 110px;
      height: 110px;
    }
  }
}
</style>