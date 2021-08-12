<template>
  <div class="list">
    <div class="list-colum">
      <div class="row" v-if="products">
        <div
          class="col-xl-4 col-sm-6"
          v-for="product in products"
          :key="product._id"
        >
          <div class="card">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/173/114/541/minimalism-black-background-error-simple-background-not-available-hd-wallpaper-preview.jpg"
              class="card-img-top"
              :alt="product.name"
              v-if="!product.image || product.image == ''"
            />
            <img
              :src="product.image"
              class="card-img-top"
              alt="..."
              v-if="product.image"
            />
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">$ {{ product.price }}</p>
              <p class="card-text">
                <small class="text-muted">{{
                  formantDate(product.date)
                }}</small>
              </p>
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
    <div class="list-search">
      <div class="search">
        <div class="search-text">Buscas algo en especial</div>
        <div class="input-group serach-input">
          <input
            type="text"
            class="form-control"
            placeholder="Eje: Jarron"
            v-model="search"
          />
          <button
            @click="searchProduct"
            class="btn btn-outline-secondary"
            type="button"
          >
            Buscar
            <img src="../assets/img/search.svg" alt="" srcset="" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import "moment/locale/es";
import { ref, onMounted } from "vue";
import { getProducts } from "../server/product";
import { useRouter } from "vue-router";
import swal from "sweetalert2";
export default {
  setup() {
    var products = ref(null);

    var search = ref("");
    const router = useRouter();
    const searchProduct = () => {
      if (!search.value) {
        swal.fire({
          icon: "error",
          title: "Error",
          text: "Faltan datos!",
        });
      } else {
        console.log("entro");
        router.push("/proceso-busqueda/" + search.value);
      }
    };
    onMounted(async () => {
      const response = await getProducts();
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
      search,
      searchProduct,
      productDetail,
    };
  },
};
</script>

<style lang="scss" scoped>
.list {
  margin-top: 24px;
  margin-bottom: 24px;
  display: grid;
  grid-template-areas: "colum search";
  column-gap: 2rem;
  grid-template-columns: 4fr 1fr;
  .list-colum {
    grid-area: colum;
  }
  .list-search {
    grid-area: search;
  }
  .card {
    height: auto;
    margin-bottom: 24px;
    img {
      width: 100%;
      height: 15rem;
      object-fit: cover;
    }
    .btn {
      color: #fff;
      font-size: 13px;
      font-weight: 500;
      background-color: #00bc8b;
    }
  }
  .search {
    position: fixed;
    img {
      width: 18px;
      height: 18px;
    }
    .search-text {
      font-size: 22px;
      font-weight: 500;
      margin-bottom: 14px;
    }
    .serach-input {
      height: 44px;
    }
    .btn {
      border: 1px solid #ced4da;
    }
    .btn:hover {
      color: #000;
      background-color: #f0f0f0;
    }
  }
  .upload {
    text-align: center;
  }
}
@media (max-width: 1200px) {
  .list {
    grid-template-areas: "search" "colum";
    grid-template-columns: 1fr;
    .search {
      position: relative;
      margin-bottom: 24px;
    }
  }
}
</style>