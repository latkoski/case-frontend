<template>
  <select
    name
    @input="$emit('input', $event.target.value)"
    v-model="$attrs.value"
    class="dropdown-custom"
  >
    <option
      v-for="(option, index) in options"
      :key="index"
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>

</style>
