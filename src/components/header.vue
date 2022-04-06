<template>
  <div data-role="Header" class="header-header" v-bind:class="rootClassName">
    <nav class="header-nav">
      <div class="header-container">
        <router-link to="/" class="header-navlink">
          <img :alt="image_alt" :src="image_src" class="header-image" />
        </router-link>
        <div class="header-menu">
          <router-link to="/" class="header-navlink1 large">Bidu</router-link>
          <router-link to="/profile" class="header-navlink2 large">
            Fuqna
          </router-link>
          <router-link to="/coming-soon" class="header-navlink3 large">
            Bestjarju
          </router-link>
        </div>
        <div class="header-container1">
          <div class="header-container2">
            <primary-pink-button button="Ixtri issa"></primary-pink-button>
          </div>
          <div data-type="BurgerMenu" class="header-burger-menu">
            <svg viewBox="0 0 1024 1024" class="header-icon">
              <path
                d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </nav>
    <div data-type="MobileMenu" class="header-mobile-menu">
      <div class="header-top">
        <router-link to="/" class="header-navlink4 large">
          Soft UI Design System
        </router-link>
        <div data-type="CloseMobileMenu" class="header-close-menu">
          <svg viewBox="0 0 1024 1024" class="header-icon2">
            <path
              d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="header-mid">
        <div class="header-menu1">
          <router-link to="/" class="header-navlink5 large">Home</router-link>
          <router-link to="/profile" class="header-navlink6 large">
            Profile
          </router-link>
          <router-link to="/coming-soon" class="header-navlink7 large">
            Coming Soon
          </router-link>
        </div>
      </div>
      <div class="header-bot">
        <primary-pink-button button="buy now"></primary-pink-button>
      </div>
    </div>
  </div>
</template>

<script>
import PrimaryPinkButton from './primary-pink-button'

export default {
  name: 'Header',
  props: {
    image_src: {
      type: String,
      default:
        '/playground_assets/262555484_856545275024427_2218260530720057553_n-200h.png',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
    rootClassName: String,
  },
  components: {
    PrimaryPinkButton,
  },
}
</script>

<style scoped>
.header-header {
  top: 0px;
  left: auto;
  right: auto;
  width: 100%;
  bottom: auto;
  display: flex;
  z-index: 3;
  position: fixed;
  max-width: 1320px;
  padding-left: var(--dl-space-space-unitandahalfunit);
  padding-right: var(--dl-space-space-unitandahalfunit);
  justify-content: center;
}
.header-nav {
  flex: 0 0 auto;
  color: var(--dl-color-secondary-600);
  width: 100%;
  height: 60px;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0 .25rem .375rem -.0625rem hsla(0,0%,8%,.12),0 .125rem .25rem -.0625rem hsla(0,0%,8%,.07)!important;
  margin-top: var(--dl-space-space-unit);
  align-items: center;
  padding-top: var(--dl-space-space-halfunit);
  padding-left: var(--dl-space-space-unitandahalfunit);
  border-radius: var(--dl-radius-radius-radius40);
  padding-right: var(--dl-space-space-unitandahalfunit);
  flex-direction: row;
  padding-bottom: var(--dl-space-space-halfunit);
  backdrop-filter: saturate(200%) blur(30px);
  justify-content: space-between;
  background-color: var(--dl-color-primary-500);
}
.header-container {
  color: var(--dl-color-gray-black);
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.header-navlink {
  display: contents;
}
.header-image {
  width: 100px;
  height: 40px;
  object-fit: cover;
  text-decoration: none;
}
.header-menu {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
.header-navlink1 {
  color: var(--dl-color-primary-700);
  margin-top: var(--dl-space-space-halfunit);
  transition: 0.3s;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.header-navlink1:hover {
  color: var(--dl-color-gray-500);
}
.header-navlink2 {
  color: var(--dl-color-primary-700);
  margin-top: var(--dl-space-space-halfunit);
  transition: 0.3s;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.header-navlink2:hover {
  color: var(--dl-color-gray-500);
}
.header-navlink3 {
  color: var(--dl-color-primary-700);
  margin-top: var(--dl-space-space-halfunit);
  transition: 0.3s;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
  margin-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.header-navlink3:hover {
  color: var(--dl-color-gray-500);
}
.header-container1 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.header-container2 {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.header-burger-menu {
  display: none;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.header-icon {
  width: 24px;
  height: 24px;
  margin-left: var(--dl-space-space-unit);
}
.header-mobile-menu {
  top: 0px;
  flex: 0 0 auto;
  left: 0px;
  width: 100%;
  height: 100vh;
  display: none;
  padding: var(--dl-space-space-unitandahalfunit);
  z-index: 100;
  position: absolute;
  align-items: flex-start;
  flex-direction: column;
  background-color: var(--dl-color-gray-white);
}
.header-top {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-unit);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.header-navlink4 {
  color: var(--dl-color-secondary-700);
  font-weight: 600;
  text-decoration: none;
}
.header-close-menu {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.header-icon2 {
  width: 24px;
  height: 24px;
}
.header-mid {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  flex-direction: column;
}
.header-menu1 {
  flex: 0 0 auto;
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: column;
}
.header-navlink5 {
  transition: 0.3s;
  margin-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.header-navlink5:hover {
  color: var(--dl-color-gray-500);
}
.header-navlink6 {
  transition: 0.3s;
  margin-bottom: var(--dl-space-space-halfunit);
  text-decoration: none;
}
.header-navlink6:hover {
  color: var(--dl-color-gray-500);
}
.header-navlink7 {
  transition: 0.3s;
  text-decoration: none;
}
.header-navlink7:hover {
  color: var(--dl-color-gray-500);
}
.header-bot {
  flex: 0 0 auto;
  display: flex;
  margin-top: auto;
  flex-direction: column;
}
.header-root-class-name1 {
  align-self: center;
}
@media(max-width: 991px) {
  .header-nav {
    max-width: 960px;
  }
  .header-menu {
    display: none;
  }
}
@media(max-width: 767px) {
  .header-burger-menu {
    display: flex;
  }
}
@media(max-width: 479px) {
  .header-container2 {
    display: none;
  }
}
</style>
