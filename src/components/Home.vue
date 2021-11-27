<template>
  <div class="app-container">
    <div class="row first-section-row">
      <div
        class="col-xs-12 col-sm-12 col-md-6 col-lg-6 post-padding"
        v-for="(post, index) in firstSectionPosts"
        :key="index"
      >
        <Post :content="post" />
      </div>
    </div>
    <!-- First section -->
    <div class="desktop-section">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 post-padding">
          <Post
            :content="secondSectionBigPost"
            :bigPost="true"
            :showImage="true"
          />
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 post-padding">
          <Post
            v-for="(post, index) in secondSectionSmallPosts"
            :content="post"
            :key="index"
            :showImage="false"
          />
        </div>
      </div>
    </div>
    <div class="mobile-section">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 post-padding">
          <Post
            v-for="(post, index) in secondSectionSmallPosts"
            :key="index"
            :content="post"
            :showImage="false"
          />
          <Post :showImage="false" />
        </div>
        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 post-padding">
          <Post
            :content="secondSectionBigPost"
            :bigPost="true"
            :showImage="true"
          />
        </div>
      </div>
    </div>

    <div class="row">
      <div
        v-for="(post, index) in thirdSectionPosts"
        :key="index"
        class="col-xs-12 col-sm-12 col-md-6 col-lg-6 post-padding"
      >
        <Post :content="post" />
      </div>
    </div>
    <!-- Second section -->
    <div class="mobile-section">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 post-padding">
          <Post
            v-for="(post, index) in fourthSectionSmallPosts"
            :content="post"
            :key="index"
            :showImage="false"
          />
        </div>
        <div
          class="
            col-xs-12 col-sm-12 col-md-8 col-lg-8
            post-padding
            second-section-big-post
          "
        >
          <Post
            :content="fourthSectionBigPost"
            :bigPost="true"
            :showImage="false"
          />
        </div>
      </div>
    </div>
    <div class="desktop-section">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 post-padding">
          <Post
            v-for="(post, index) in fourthSectionSmallPosts"
            :content="post"
            :key="index"
            :showImage="false"
          />
        </div>
        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 post-padding">
          <Post
            :content="fourthSectionBigPost"
            :bigPost="true"
            :showImage="true"
          />
        </div>
      </div>
    </div>
    <div class="row second-section-row">
      <div
        class="col-xs-12 col-sm-12 col-md-6 col-lg-6 post-padding"
        v-for="(post, index) in fifthSectionPosts"
        :key="index"
      >
        <Post :content="post" />
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
      <div
        class="col-xs-12 col-sm-12 col-md-6 col-lg-6 post-padding"
        v-for="(post, index) in sixthSectionPosts"
        :key="index"
      >
        <Post :content="post" />
      </div>
    </div>
    <Clients />
    <Contact />
  </div>
</template>

<script>
import Post from "./Post.vue";
import Clients from "./Clients.vue";
import Contact from "./Contact.vue";

export default {
  components: {
    Post,
    Clients,
    Contact,
  },

  props: {
    posts: {
      type: Array,
      required: true,
    },
  },

  mounted() {},

  computed: {
    firstSectionPosts: function () {
      return this.posts.filter((post) => post.section == 1);
    },
    secondSectionBigPost: function () {
      return this.posts.find((post) => post.section == 2 && post.big == true);
    },
    secondSectionSmallPosts: function () {
      return this.posts.filter((post) => post.section == 2 && !post.big);
    },
    thirdSectionPosts: function () {
      return this.posts.filter((post) => post.section == 3);
    },
    fourthSectionBigPost: function () {
      return this.posts.find((post) => post.section == 4 && post.big == true);
    },
    fourthSectionSmallPosts: function () {
      return this.posts.filter((post) => post.section == 4 && !post.big);
    },
    fifthSectionPosts: function () {
      return this.posts.filter((post) => post.section == 5);
    },
    sixthSectionPosts: function () {
      return this.posts.filter((post) => post.section == 6);
    },
  },
};
</script>

<style></style>
