<template>
  <div class="home-container">
    <div class="home-container1 moving-background"></div>
    <maltese-header rootClassName="rootClassName"></maltese-header>
  </div>
</template>

<script>
import MalteseHeader from '../components/maltese-header'

export default {
  name: 'Home',
  components: {
    MalteseHeader,
  },
  metaInfo: {
    title: 'Bestja',
    meta: [
      {
        name: 'description',
        content:
          'Bestja, il-logħba tal-karti fuq il-monstri tal-folklore Malti.',
      },
      {
        property: 'og:title',
        content: 'Bestja',
      },
      {
        property: 'og:description',
        content:
          'Bestja, il-logħba tal-karti fuq il-monstri tal-folklore Malti.',
      },
      {
        property: 'og:image',
        content:
          'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/15d5b58e-bf23-49ed-a9ef-af4f572906ba/2c50962e-aebd-4e5c-83db-fb24fe7fb737?org_if_sml=1',
      },
    ],
  },
}
</script>

<style scoped>
.home-container {
  width: 100%;
  height: auto;
  display: flex;
  min-height: 100vh;
  align-items: center;
  animation-name: backgroundMovement;
  flex-direction: column;
  justify-content: center;
  background-color: #0e000f;
  animation-duration: 240s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.home-container1 {
  flex: 1;
  width: 100%;
  height: 1rem;
  display: flex;
  position: relative;
  align-self: center;
  margin-top: 10rem;
  align-items: flex-end;
  flex-direction: column;
  background-size: cover;
  background-image: url("/playground_assets/banner1-1500h.jpg");
}
@media(max-width: 767px) {
  .home-container1 {
    margin-top: 30%;
  }
}
</style>
