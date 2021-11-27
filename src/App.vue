<template>
  <div id="app">
    <Header />
    <Home :posts="posts" />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/partials/Header.vue";
import Footer from "./components/partials/Footer.vue";
import Home from "./components/Home.vue";
import axios from "axios";
import { POSTS_URL } from "./utils/api.js";

export default {
  name: "App",
  mounted() {
    axios.get(POSTS_URL).then((response) => {
      this.posts = response.data.posts;
    });
  },
  components: {
    Header,
    Footer,
    Home,
  },

  data() {
    return {
      posts: [],
    };
  },
};
</script>

<style></style>
