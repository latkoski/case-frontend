<template>
  <div>
    <!-- Desktop/Tablet >= 762px-->
    <div id="desktop-header" class="desktop-header-img position-relative">
      <div class="overflow-hidden desktop-navigation">
        <div class="float-left position-relative top-13">
          <img
            src="icons/icon-dept.svg"
            class="desktop-header-logo"
            alt="DEPT"
          />
        </div>
        <div
          class="float-right position-relative mt--15"
          @click="menuToggle = !menuToggle"
        >
          <div class="desktop-menu-label d-inline cursor-pointer">
            {{ menuText }}
          </div>
          <img alt="hamburger"
            class="d-inline hamburger-icon cursor-pointer"
            src="icons/icon-menu.svg"
          />
        </div>
        <div class="position-absolute header-text">
          {{ headerText }}
        </div>
      </div>
      <button class="position-absolute header-button">
        {{ headerButtonText }}
      </button>
      <Menu :openMenu="menuToggle" @closeMenu="menuToggle = false" />
    </div>

    <!-- Mobile < 762px-->
    <div id="mobile-header" class="mobile-header">
      <div class="position-relative h-100">
        <div class="navbar-fixed-top">
          <div class="mobile-navigation">
            <div class="float-left d-inline">
              <img
                src="icons/icon-dept.svg"
                class="header-logo-mobile"
                alt="DEPT"
              />
            </div>
            <div class="float-right d-inline" @click="menuToggle = true">
              <div class="d-inline desktop-menu-label">
                <span class="position-absolute mobile-menu-label"> MENU </span>
                <img
                  alt="menu"
                  class="d-inline mobile-menu-bar-hamburger"
                  src="icons/icon-menu.svg"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="mobile-header-img position-relative">
          <div class="position-absolute w-100 text-center mobile-header-text">
            {{ headerText }}
          </div>
        </div>
        <div class="position-relative w-100 text-center">
          <button class="mobile-header-button">{{ headerButtonText }}</button>
        </div>
      </div>
      <Menu :openMenu="menuToggle" @closeMenu="menuToggle = false" />
    </div>
  </div>
</template>

<script>
import Menu from "./Menu.vue";
export default {
  components: {
    Menu,
  },
  data() {
    return {
      headerText: "WORK",
      headerButtonText: "VIEW CASE",
      menuText: "MENU",
      menuToggle: false,
    };
  },

  computed: {
    openMenu: function () {
      return this.menuToggle ? true : false;
    },
  },
};
</script>

<style></style>
