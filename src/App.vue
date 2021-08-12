<template>
  <div class="container">
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import { onMounted } from "vue";
import { useStore } from "vuex";
import { getCountCart } from "./server/product";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const rol = localStorage.getItem("ROL");

    if (rol == "60db2f181b05cc34808d1942") {
      router.push("/panel-control/");
    }

    onMounted(async () => {
      const count = await getCountCart();
      store.commit("setCountCart", count);
    });
  },
  components: {
    Footer,
  },
};
</script>
<style lang="scss">
body {
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,500;0,600;0,700;0,800;0,900;1,400;1,500&display=swap");
  font-family: "Montserrat", sans-serif;
  footer {
    height: 8vh;
  }
}
</style>
