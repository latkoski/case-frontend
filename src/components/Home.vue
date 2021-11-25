<template>
  <div class="app-container">
    <div class="row" style="padding-top: 150px;">
    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 post-padding">
      <Post/>
    </div>
     <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 post-padding">
      <Post/>
    </div>
     <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 post-padding">
      <Post/>
    </div>
     <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 post-padding">
      <Post/>
    </div>
     <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 post-padding">
      <Post/>
    </div>
     <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 post-padding">
      <Post/>
    </div>
    </div>
  </div>
</template>

<script>

import Post from "./Post.vue";

export default {
  components: {
      Post
  },

  mounted() {},
};
</script>

<style>


@media (min-width: 770px) {
  .app-container {
    margin: 0 120px;
  }
  .post-padding {
    padding-bottom: 85px;
  }
}
@media (max-width: 770px) {
  .app-container {
    margin: 0 20px;
  }

  .post-padding {
    padding-bottom: 49px;
  }
}




</style>
