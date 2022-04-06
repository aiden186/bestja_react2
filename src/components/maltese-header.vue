<template>
  <div class="maltese-header-container" v-bind:class="rootClassName">
    <router-link to="/" class="maltese-header-navlink">
      <img
        alt="image"
        src="/playground_assets/asset%201%408x-1100w.png"
        class="maltese-header-image"
      />
    </router-link>
    <div class="maltese-header-container1">
      <router-link to="/store" class="maltese-header-navlink1">IXTRI</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MalteseHeader',
  props: {
    rootClassName: String,
  },
}
</script>

<style scoped>
.maltese-header-container {
  width: 100%;
  height: 133px;
  display: flex;
  position: relative;
  align-items: flex-end;
  justify-content: flex-end;
}
.maltese-header-navlink {
  display: contents;
}
.maltese-header-image {
  top: 0px;
  left: 0px;
  right: 0px;
  width: 30%;
  bottom: 0px;
  height: 100%;
  position: absolute;
  align-self: flex-start;
  margin-top: 2%;
  object-fit: contain;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2%;
  text-decoration: none;
}
.maltese-header-container1 {
  width: 30%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
}
.maltese-header-navlink1 {
  font-size: 2.5rem;
  font-style: normal;
  font-family: Oswald;
  font-weight: 500;
  text-decoration: none;
}
.maltese-header-root-class-name {
  top: 0px;
  left: 0px;
  position: absolute;
}

@media(max-width: 767px) {
  .maltese-header-container {
    top: 0px;
    left: 0px;
    height: 20%;
    position: absolute;
    align-items: center;
    padding-top: 5rem;
    flex-direction: row;
    justify-content: flex-end;
  }
  .maltese-header-image {
    top: 22px;
    left: 1px;
    right: 0px;
    width: 266px;
    bottom: -3px;
    height: 91px;
    padding-left: 0px;
  }
}
@media(max-width: 479px) {
  .maltese-header-container {
    height: 20%;
  }
  .maltese-header-image {
    width: 70%;
    height: 70%;
  }
}
</style>
