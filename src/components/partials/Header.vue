<template>
<div>



<!-- Menu -->
<div :class="openMenu ? 'overlay w-100':'overlay w-0'">
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
         <a href="javascript:void(0)" class="closebtn float-right" @click="openMenu = false">&times;</a>
    </div>
  <div class="overlay-content">
    <a href="#" class="menu-item">HOME</a>
    <a href="#" class="menu-item">WERK</a>
    <a href="#" class="menu-item">OVER</a>
    <a href="#" class="menu-item">DIENSTEN</a>
    <a href="#" class="menu-item">PARTNERS</a>
    <a href="#" class="menu-item">STORIES</a>
    <a href="#" class="menu-item">VACATURES</a>
  </div>
</div>



<!-- Desktop/Tablet >= 762px-->
<div id="desktop-header" class="desktop-header-img position-relative">
    <div class="overflow-hidden desktop-navigation" style="z-index: 6">
        <div class="float-left position-relative">
            <img src="/icons/icon-dept.svg" class="desktop-header-logo"/>
        </div>
        <div class="float-right position-relative mt--15" @click="openMenu = !openMenu">
                <div class="desktop-menu-label d-inline cursor-pointer">{{menuText}}</div>
                <img class="d-inline hamburger-icon cursor-pointer" 
                src="/icons/icon-menu.svg"/>
        </div>
        <div class="position-absolute header-text header-text-font-size" style="font-size: 27vw">{{headerText}}</div>
    </div>
    <button class="position-absolute header-button">{{headerButtonText}}</button>
  </div>

<!-- Mobile < 762px-->
  <div id="mobile-header" class="mobile-header position-reative">
    <div class="position-relative h-100">
        <div class="navbar-fixed-top">
            <div class="mobile-navigation">
                <div class="float-left d-inline">
                    <img src="/icons/icon-dept.svg" class="header-logo-mobile"/>
                </div>
                <div class="float-right d-inline" @click="openMenu = true">
                    <div class="d-inline desktop-menu-label">
                        MENU <img class="d-inline mobile-menu-bar-hamburger" src="/icons/icon-menu.svg"/>
                    </div>
                </div>
            </div>
        </div>
            

        <div class="mobile-header-img position-relative">
            <div class="position-absolute w-100 text-center mobile-header-text">{{headerText}}</div>
        </div>
        <div class="position-relative w-100 text-center">
                <button class="mobile-header-button">{{headerButtonText}}</button>
            </div>

        
    

        
    </div>


    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            headerText: "WORK",
            headerButtonText: "VIEW CASE",
            menuText: "MENU",
            openMenu: false,
        }
    }
}
</script>

<style>
</style>