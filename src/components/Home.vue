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
    <!-- First section -->
    <div class="desktop-section">
      <div class="row">
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
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 post-padding">
        <Post />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 post-padding">
        <Post />
      </div>
    </div>
    <!-- Second section -->
    <div class="mobile-section">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 post-padding">
          <Post :showImage="false" />
          <Post :showImage="false" />
        </div>
        <div
          class="
            col-xs-12 col-sm-12 col-md-8 col-lg-8
            post-padding
            second-section-big-post
          "
        >
          <Post :bigPost="true" />
        </div>
      </div>
    </div>
    <div class="desktop-section">
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
    <div class="row second-section-row">
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
    <hr class="solid-gray" />
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-7 offset-lg-2">
        <p class="testimonial">
          "Dept helped us tell our story through a bold new identity and a
          robust online experience. To the tune of 60% growth in online bookings
          in just one month"
        </p>
        <p class="sub-testimonial">MATTIJS TEN BRINK – CEO, TRANSAVIA</p>
      </div>
    </div>
    <div class="row third-section-row">
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 post-padding">
        <Post />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 post-padding">
        <Post />
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

<style></style>
