<template>
  <div class="app-container">
    <div class="row first-section-row">
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 post-padding">
        <Post />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 post-padding">
        <Post />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 post-padding">
        <Post />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 post-padding">
        <Post />
      </div>
    </div>
    <div class="desktop-section">
      <div class="row" style="height: 120px">
        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 post-padding">
          <Post :bigPost="true" />
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 post-padding">
          <Post :showImage="false" />
          <Post :showImage="false" />
        </div>
      </div>
    </div>
    <div class="mobile-section">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 post-padding">
          <Post :showImage="false" />
          <Post :showImage="false" />
        </div>
        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 post-padding">
          <Post :bigPost="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";

export default {
  components: {
    Post,
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
    padding-bottom: 80px;
  }
}
@media (max-width: 770px) {
  .app-container {
    margin: 0 20px;
  }

  .post-padding {
    padding-bottom: 37px;
  }
}
</style>
