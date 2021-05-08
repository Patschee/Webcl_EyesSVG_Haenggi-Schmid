<template>

  <Eyes msg="" />
</template>

<script>

import EyesVue from "./components/Eyes.vue";
export default {
  name: "App",
  components: {
    Eyes: EyesVue,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
