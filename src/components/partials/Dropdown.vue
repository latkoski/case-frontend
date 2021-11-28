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
.dropdown-container {
  font-family: "Teko";
  font-size: 3vh;
  color: #a3a3a3;
}

.dropdown-custom {
  width: auto;
  height: 39px;
  border: 0px;
  background-color: #fff;
  color: #000;
}
</style>
