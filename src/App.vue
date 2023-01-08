<script >
import calculator from "./components/calculator.vue"
import converter from "./components/converter.vue"


export default {
name: "app",
components: {
  calculator,
   converter
}
};
</script>


<template>
  <calculator />
  <converter />

</template>

<style lang="scss" scoped>

</style>
