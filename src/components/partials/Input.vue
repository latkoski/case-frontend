<template>
  <section>
    <span class="position-absolute" style="padding-bottom: 10px">{{
      label
    }}</span>
    <textarea
      v-if="type == 'textarea'"
      style="padding-top: 32px; resize: none"
      class="position-absolute"
      rows="4"
      maxlength="100"
      :value="value"
      @input="$emit('input', $event.target.value)"
    ></textarea>
    <input
      v-else
      style="padding-top: 32px"
      class="position-absolute"
      :value="value"
      @input="$emit('input', $event.target.value)"
      type="text"
    />
    <!-- 75 za input -->
    <span
      :class="
        type == 'textarea'
          ? 'pt-165 position-absolute error-message'
          : 'pt-75 position-absolute error-message'
      "
      >This field is required</span
    >
  </section>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "text",
    },
  },
};
</script>

<style>
.error-message {
  font-family: Arial;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ff2929;
}

.pt-75 {
  padding-top: 68px;
}

.pt-165 {
  padding-top: 145px;
}
</style>
