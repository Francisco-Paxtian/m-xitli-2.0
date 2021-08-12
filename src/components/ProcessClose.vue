<template>
  <div class="close"></div>
</template>

<script>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import swal from "sweetalert2";
export default {
  setup() {
    onMounted(async () => {
      localStorage.removeItem("ROL");
      localStorage.removeItem("ID");
      localStorage.removeItem("NAME");
      const router = useRouter();
      swal.fire({
        text: "Cerrando sesion",
        imageUrl: "https://mxitli.000webhostapp.com/upload-2.svg",
        imageHeight: 88,
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        router.push("/");
      }, 1500);
    });
  },
};
</script>

<style lang="scss" scoped>
.close {
  height: 100vh;
}
</style>