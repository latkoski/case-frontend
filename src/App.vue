<template>
  <div id="app">
    <Header />
    <Home :posts="posts" />
    <Footer />
    <div
      class="position-fixed back-to-top"
      style="right: 0; bottom: 0; bottom: 120px; z-index: 3"
      @click="scrollToTop()"
      v-show="showBackToTop"
    >
      <img
        style="
          filter: invert(11%) sepia(100%) saturate(6143%) hue-rotate(247deg)
            brightness(90%) contrast(118%);
        "
        src="../public/icons/icon-scroll-to-top.svg"
      /><br />
      TOP
    </div>
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

  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  data() {
    return {
      posts: [],
      showBackToTop: false,
    };
  },
  methods: {
    handleScroll() {
      this.showBackToTop = window.top.scrollY >= 100 ? true : false;
    },

    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style></style>
