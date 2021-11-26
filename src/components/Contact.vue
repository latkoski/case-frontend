<template>
  <div class="h-600">
    <div class="row">
      <div class="col-sm-12 col-sm-12 col-md-3 col-lg-3 contact-left-side">
        <p class="contact-text">QUESTION? WE ARE HERE TO HELP!</p>
      </div>
      <div class="col-sm-12 col-md-9 col-lg-9 pt-100 contact-right-side">
        <div class="row">
          <div
            class="
              col-xs-12 col-sm-12 col-md-6 col-lg-5
              h-200
              input-field
              position-relative
            "
          >
            <Input type="text" label="NAME" v-model="name" />
          </div>
          <div
            class="
              col-xs-12 col-sm-12 col-md-6 col-lg-4
              h-200
              input-field
              position-relative
            "
          >
            <Input type="text" label="EMAIL" v-model="email" />
          </div>
         
          <div
            class="
              col-xs-12 col-sm-12 col-md-12 col-lg-4
              message-height
              input-field
              position-relative
            "
          >
            <Input type="textarea" label="MESSAGE" v-model="message" />
          </div>
          <div class="col-xs-6 col-sm-12 col-md-12 col-lg-12">
            <button class="position-relative form-button form-button-padding">SEND</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../../public/styles/input.css";
import Input from "./partials/Input.vue";

export default {
  components: {
    Input,
  },

  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
};
</script>

<style>
.h-200 {
  height: 200px;
}
</style>
