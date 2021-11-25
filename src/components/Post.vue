<template>
  <div
    :class="
      showImage
        ? 'card no-border'
        : 'card no-border desktop-padding mobile-border'
    "
  >
    <img
      v-if="showImage"
      class="card-img-top"
      src="/images/florensis.png"
      alt="Card image cap"
    />

    <a href="#" class="pt-10 text-decoration-none">
      <div class="post-subtitle">BOL.COM</div>
      <div :class="showImage ? 'post-title' : 'post-title  no-image-font-size'">
        A summer island in the Netherlands
      </div>
      <a class="post-view text-decoration-none">► VIEW CASE</a>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    showImage: {
      type: Boolean,
      default: true,
      required: false,
    },
    bigPost: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
};
</script>

<style></style>
