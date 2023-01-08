<template>
  <div class="fondo">
    <Navbar />
    <Converter />
  </div>
</template>

<script>
import Converter from "./components/Converter";
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: {
    Converter,
    Navbar,
  },
};
</script>

<style>
.fondo {
  background-image: url("./assets/fondo.jpg");
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>