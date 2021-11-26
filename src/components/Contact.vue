<template>
  <div class="" style="height: 600px">
    <div class="row">
      <div
        class="col-sm-3 col-md-3 col-lg-3"
        style="
          font-family: Teko;
          font-size: 60px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 1;
          letter-spacing: normal;
          padding-top: 82px;
        "
      >
        <p style="width: 280px">QUESTION? <br />WE ARE HERE TO HELP!</p>
      </div>
      <div class="col-sm-9 col-md-9 col-lg-9" style="padding-top: 100px">
        <div class="row">
          <div
            class="col-sm-4 col-md-4 col-lg-4 h-200"
            style="padding: -15px 33px 0 0"
          >
            <Input type="text" label="NAME" v-model="name" />
          </div>
          <div
            class="col-sm-4 col-md-4 col-lg-4 h-200"
            style="padding: -15px 13px 0 0"
          >
            <Input type="text" label="EMAIL" v-model="email" />
          </div>
          <div
            class="col-sm-4 col-md-4 col-lg-4 h-500"
            style="height: 200px; padding: -46px 36px 0 0"
          ></div>

          <div
            class="col-sm-4 col-md-4 col-lg-4 h-500"
            style="height: 200px; padding: -46px 36px 0 0"
          >
            <Input label="Message" type="textarea" v-model="message" />
          </div>

          <!-- <button
            style="
              padding: 8px 51px 12px;
              background-color: #1a18f7;
              color: white;
              font-family: Arial;
              font-size: 15px;
              font-weight: bold;
              font-stretch: normal;
              font-style: normal;
              line-height: 2;
              letter-spacing: normal;
              text-align: center;
              width: 140px;
              height: 50px;
              position: absolute;
              padding-top: 320px;
              padding-left: 40px;
              border: none;
            "
          >
            SEND
          </button> -->
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
