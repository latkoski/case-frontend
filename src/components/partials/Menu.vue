<template>
  <!-- Menu -->
<div :class="openMenu ? 'overlay w-100 opacity-1':'overlay w-0 opacity-0'">
    <div class="position-absolute language-container">
            <ul class="language-list">
                <li class="language-label">LANDEN</li>
                <li>GLOBAL</li>
                <li>NEDERLAND</li>
                <li>UNITED STATES</li>
                <li>IRELAND</li>
                <li>UNITED KINGDOM</li>
                <li>DETUSCHLAND</li>
                <li>SCHWEIZ</li>
            </ul>
    </div>


            <ul class="social-list position-absolute">
                <li>FACEBOOK</li>
                <li>TWITTER</li>
                <li>INSTAGRAM</li>
                <li>LINKEDIN</li>
            </ul>

    
    <div class="position-absolute w-100 menu-padding">
        <img class="position-relative float-left menu-logo" src="/icons/logo-white.svg" alt="DEPT"/>
         <a href="javascript:void(0)" class="closebtn float-right" @click="$emit('closeMenu')">&times;</a>
    </div>
  <div class="overlay-content">
    <a href="#" class="menu-item">HOME</a>
    <a href="#" class="menu-item">WERK</a>
    <a href="#" class="menu-item">OVER</a>
    <a href="#" class="menu-item">DIENSTEN</a>
    <a href="#" class="menu-item">PARTNERS</a>
    <a href="#" class="menu-item">STORIES</a>
    <a href="#" class="menu-item">VACATURES</a>
    <a href="#" class="menu-item">EVENTS</a>
    <a href="#" class="menu-item">VACATURES</a>
  </div>
</div>
</template>

<script>
export default {
    props: {
        openMenu: {
            type: Boolean
        }
    }
}
</script>

<style>

</style>