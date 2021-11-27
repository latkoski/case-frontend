<template>
  <div v-if="!!content"
    :class="
      showImage
        ? 'card no-border'
        : 'card no-border desktop-padding mobile-border'
    "
  >
    <img
      v-if="showImage"
      class="card-img-top"
      :src="content.img"
      :alt="content.title"
    />

    <a href="#" class="pt-10 text-decoration-none">
      <div class="post-subtitle">{{ content.subtitle }}</div>
      <div :class="showImage ? 'post-title' : 'post-title  no-image-font-size'">
        {{ content.title }}
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
    content: {
      type: Object,
    },
  },
};
</script>

<style></style>
