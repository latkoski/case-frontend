<template>
  <div id="app">
    <Home/>
    <Footer/>
  </div>
</template>

<script>
import Footer from "./components/partials/Footer.vue";
import Home from "./components/Home.vue";
export default {
  name: 'App',
  components: {
    Footer,
    Home
  },
}
</script>

<style>
</style>
