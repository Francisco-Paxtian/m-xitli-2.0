<template>
  <div class="">
    <div class="title-last">Ultimos articulos</div>
    <div class="row" v-if="products">
      <div
        class="col-lg-3 col-sm-6"
        v-for="product in products"
        :key="product._id"
      >
        <div class="card bg-light">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/173/114/541/minimalism-black-background-error-simple-background-not-available-hd-wallpaper-preview.jpg"
            class="card-img-top"
            :alt="product.name"
            v-if="!product.image || product.image == ''"
          />
          <img
            :src="product.image"
            class="card-img-top"
            :alt="product.name"
            v-if="product.image"
          />
          <div class="card-body">
            <div class="title">{{ product.name }}</div>
            <div class="price">$ {{ product.price }}</div>
            <div class="time">{{ formantDate(product.date) }}</div>
            <div>
              <button
                @click="productDetail(product._id)"
                type="button"
                class="btn"
              >
                Comprar ahora
              </button>
            </div>
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
import { ref, onMounted } from "vue";
import { getLastproducts } from "../server/product";
import { useRouter } from "vue-router";
export default {
  setup() {
    var products = ref(null);

    const router = useRouter();

    onMounted(async () => {
      const response = await getLastproducts();
      products.value = response;
    });

    var formantDate = (value) => {
      return moment(value).fromNow();
    };

    const productDetail = (value) => {
      router.push("/detalle-producto/" + value);
    };
    return {
      products,
      formantDate,
      productDetail,
    };
  },
};
</script>

<style lang="scss" scoped>
.title-last {
  text-align: center;
  margin-top: 34px;
  font-size: 30px;
  font-weight: 600;
}
.card {
  margin-top: 34px;
  margin-bottom: 34px;
  height: 20rem;
  .title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
  }
  .price {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 8px;
  }
  .time {
    color: #ccc;
    margin-bottom: 8px;
  }
  .btn {
    color: #fff;
    font-size: 13px;
    font-weight: 500;
    background-color: #00bc8b;
  }
  img {
    width: 100%;
    height: 10rem;
    object-fit: cover;
  }
}
.upload {
  text-align: center;
}
</style>