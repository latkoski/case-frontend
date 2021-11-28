<template>
  <div class="app-container">
    <div class="row first-section-row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 pb-60">
        <div class="position-relative float-left d-inline">
          <button class="displayButton" @click="setDisplayType('grid')" id="grid">Grid</button>
          <button class="displayButton" @click="setDisplayType('list')" id="list">List</button>
          <!-- {{displayType}} -->
        </div>
        <div class="position-relative float-right dropdown-container">
          <span class="firstDropdown">
            Show me
            <dropdown v-model="workFilter" name="work" :options="work" />
          </span>
          <span class="secondDropdown">
            in
            <dropdown
              v-model="industryFilter"
              name="industry"
              :options="industries"
          /></span>
        </div>
      </div>
      <div
        :class="displayType == 'grid' ? 'col-xs-12 col-sm-12 col-md-6 col-lg-6 post-padding' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'"
        v-for="(post, index) in filterFirstSectionPosts"
        :key="index"
      >
        <post :content="post" />
      </div>
    </div>
    <!-- First section -->
    <div class="desktop-section">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 post-padding">
          <post
            :content="secondSectionBigPost"
            :bigPost="true"
            :showImage="true"
          />
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 post-padding">
          <post
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
          <post
            v-for="(post, index) in secondSectionSmallPosts"
            :key="index"
            :content="post"
            :showImage="false"
          />
          <post :showImage="false" />
        </div>
        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 post-padding">
          <post
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
        <post :content="post" />
      </div>
    </div>
    <!-- Second section -->
    <div class="mobile-section">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4 post-padding">
          <post
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
          <post
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
          <post
            v-for="(post, index) in fourthSectionSmallPosts"
            :content="post"
            :key="index"
            :showImage="false"
          />
        </div>
        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 post-padding">
          <post
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
        <post :content="post" />
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
        <post :content="post" />
      </div>
    </div>
    <clients />
    <contact />
  </div>
</template>

<script>
export default {
  components: {
    post: () => import("./Post.vue"),
    clients: () => import("./Clients.vue"),
    contact: () => import("./Contact.vue"),
    dropdown: () => import("./partials/Dropdown.vue"),
  },

  data() {
    return {
      displayType: "grid",
      work: [
        {
          label: "all work",
          value: "all",
        },
        {
          label: "top rated",
          value: "top",
        },
        {
          label: "hot now",
          value: "hot",
        },
      ],
      industries: [
        {
          label: "all industries",
          value: "all",
        },
        {
          label: "tech",
          value: "tech",
        },

        {
          label: "eco",
          value: "eco",
        },
      ],
      workFilter: "all",
      industryFilter: "all",
    };
  },

  props: {
    posts: {
      type: Array,
      required: true,
    },
  },

  methods: {
    setDisplayType(type) {
      this.displayType = type;
    },
  },

  computed: {
    filterFirstSectionPosts: function () {
      let posts = [];
      if (this.workFilter == "all" && this.industryFilter == "all") {
        posts = this.posts.filter((post) => post.section == 1);
      } else {
        if (this.workFilter == "all" && this.industryFilter != "all") {
          posts = this.posts.filter(
            (post) => post.section == 1 && post.industry == this.industryFilter
          );
        } else if (this.workFilter != "all" && this.industryFilter == "all") {
          posts = this.posts.filter(
            (post) => post.section == 1 && post.work == this.workFilter
          );
        } else {
          posts = this.posts.filter(
            (post) =>
              post.section == 1 &&
              post.industry == this.industryFilter &&
              post.work == this.workFilter
          );
        }
      }

      return posts;
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
    }
  },

  watch: {
    workFilter(val) {
      window.history.pushState(
        val,
        "",
        "filters?work=" + this.workFilter + "&industry=" + this.industryFilter
      );
    },

    industryFilter(val) {
      window.history.pushState(
        val,
        "",
        "filters?work=" + this.workFilter + "&industry=" + this.industryFilter
      );
    },
  },
};
</script>

<style></style>
