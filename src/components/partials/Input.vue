<template>
  <section>
    <label class="position-absolute input-label" :for="label">{{ label }}</label>
    <textarea
      :id="label"
      v-if="type == 'textarea'"
      style="resize: none"
      class="position-relative w-100"
      rows="4"
      maxlength="100"
      :value="value"
      @input="$emit('input', $event.target.value)"
    ></textarea>
    <input
      :id="label"
      v-else
      class="position-relative"
      :value="value"
      @input="$emit('input', $event.target.value)"
      type="text"
    />
    <span
      v-if="errorMessage != ''"
      :class="
        type == 'textarea'
          ? 'pt-145 position-relative error-message'
          : 'pt-68 position-relative error-message'
      "
      >{{ errorMessage }}</span
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
    errorMessage: {
      type: String,
      required: false,
    },
  },
};
</script>

<style></style>
