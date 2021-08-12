<template>
  <div class="welcome row">
    <div class="col-lg-8">
      <div class="title">
        Bienvenido a nuestra tienda electronica de productos artesanales
      </div>
      <div class="card bg-light">
        <div class="card-padding">
          <div class="sabias">Sabias que?</div>
          <div class="paragraph">
            Las artesanías que se producen en el Istmo son casi todas de consumo
            interno o regional. Así, encontramos la orfebrería en la que el oro
            se trabaja para hacer prendas que dan gran prestigio social como
            arracadas, esclavas, pulseras y cadenas, entre otras. También se
            elaboran huipiles bordados, enaguas, manteles y servilletas, así
            como hamacas de hilo o pita y las atarrayas para la pesca. Con la
            palma se hacen sombreros y bolsas. Además se trabaja la madera para
            hacer bateas y artesas, canoas, carretas y arados, entre otros
            utensilios. Del cuero curtido se hacen huaraches, cinturones y
            butaques. Con barro se hacen comales, ollas, hornos, cántaros,
            etcétera.
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4">
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
import { ref } from "vue";
import { useRouter } from "vue-router";
import swal from "sweetalert2";
export default {
  setup() {
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
        router.push("/proceso-busqueda/" + search.value);
      }
    };

    return {
      search,
      searchProduct,
    };
  },
};
</script>

<style lang="scss" scoped>
.welcome {
  margin-top: 34px;
  .title {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 22px;
  }
  .sabias {
    color: #4156b8;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 12px;
  }
  .paragraph {
    font-size: 19px;
    font-weight: 400;
    line-height: 2rem;
  }
  .card {
    margin-bottom: 22px;
  }
  .card-padding {
    padding: 1.4rem;
  }
  .search {
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
  .padd {
    padding: 10px;
    .card {
      height: 100%;
    }
  }
}
</style>