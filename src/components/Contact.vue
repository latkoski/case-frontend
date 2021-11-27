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
            <Input
              type="text"
              label="NAME"
              :errorMessage="validation.name.errorMessage"
              v-model="name"
            />
          </div>
          <div
            class="
              col-xs-12 col-sm-12 col-md-6 col-lg-4
              h-200
              input-field
              position-relative
            "
          >
            <Input
              type="text"
              label="EMAIL"
              :errorMessage="validation.email.errorMessage"
              v-model="email"
            />
          </div>

          <div
            class="
              col-xs-12 col-sm-12 col-md-12 col-lg-4
              message-height
              input-field
              position-relative
            "
          >
            <Input
              type="textarea"
              :errorMessage="validation.message.errorMessage"
              label="MESSAGE"
              v-model="message"
            />
          </div>
          <div class="col-xs-6 col-sm-12 col-md-12 col-lg-12">
            <button
              class="position-relative form-button form-button-padding"
              @click="submitContactForm"
              v-if="!contactFormSubmitted"
            >
              SEND
            </button>

            <div class="position-relative success-label" v-if="contactFormSubmitted">
              Message sent successfully
            </div>
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
      contactFormSubmitted: false,
      validation: {
        name: {
          empty: false,
          errorMessage: "",
        },
        email: {
          empty: false,
          structure: "",
          errorMessage: "",
        },
        message: {
          empty: false,
          errorMessage: "",
        },
      },
    };
  },

  methods: {
    validateEmail(email) {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    },
    submitContactForm() {
      this.validation.name.empty = this.name == "" ? true : false;
      this.validation.name.errorMessage =
        this.name == "" ? "This field is required" : "";

      this.validation.email.empty = this.email == "" ? true : false;
      this.validation.email.errorMessage = this.validation.email.empty
        ? "This field is required"
        : "";

      if (this.email != "") {
        this.validation.email.structure = this.validateEmail(this.email);
        this.validation.email.errorMessage =
          !this.validation.email.empty && !this.validation.email.structure
            ? "Invalid email"
            : "";
      }

      this.validation.message.empty = this.message == "" ? true : false;
      this.validation.message.errorMessage = this.validation.message.empty
        ? "This field is required"
        : "";

      if (
        !this.validation.name.empty &&
        !this.validation.message.empty &&
        !this.validation.email.empty &&
        this.validation.email.structure
      ) {
        // Logic to send the email and wait on 200 Response status code
        // .
        // .
        // .
        this.name = "";
        this.email = "";
        this.message = "";
        (this.validation = {
          name: {
            empty: false,
            errorMessage: "",
          },
          email: {
            empty: false,
            structure: "",
            errorMessage: "",
          },
          message: {
            empty: false,
            errorMessage: "",
          },
        }),
        this.contactFormSubmitted = true;
      }
    },
  },
};
</script>

<style>
.h-200 {
  height: 200px;
}
</style>
