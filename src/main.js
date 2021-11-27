import Vue from "vue";
import App from "./App.vue";

// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.css";

// AXIOS
import VueAxios from "vue-axios";
import axios from "axios";

import "../public/styles/main.css";
import "../public/styles/header.css";
import "../public/styles/menu.css";
import "../public/styles/post.css";
import "../public/styles/home.css";
import "../public/styles/footer.css";

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
