<template>
  <div class="store1-container">
    <div class="store1-container1">
      <form
        action="https://formsubmit.co/cachiaaiden@gmail.com"
        method="POST"
        class="store1-form"
      >
        <div>
          <span class="store1-text">
            First Name:
            <span v-html="raweuv5"></span>
          </span>
          <input
            type="text"
            name="First Name"
            required="true"
            placeholder="George"
            class="store1-textinput input"
          />
        </div>
        <div class="store1-surname">
          <span class="store1-text1">
            Surname:
            <span v-html="rawercy"></span>
          </span>
          <input
            type="text"
            name="Surname"
            required="true"
            placeholder="Borg"
            class="store1-textinput1 input"
          />
        </div>
        <div class="store1-email">
          <span class="store1-text2">
            Email:
            <span v-html="rawxxbl"></span>
          </span>
          <input
            type="text"
            name="Email"
            required="true"
            placeholder="georgeborg@gmail.com"
            class="store1-textinput2 input"
          />
        </div>
        <button type="submit" class="store1-button button">Submit</button>
      </form>
    </div>
    <div class="store1-container2">
      <div class="store1-container3">
        <router-link to="/store" class="store1-navlink">IXTRI</router-link>
      </div>
      <router-link to="/" class="store1-navlink1">
        <img
          alt="image"
          src="/playground_assets/asset%201%408x-1500w.png"
          class="store1-image"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Store1',

  data() {
    return {
      raweuv5: ' ',
      rawercy: ' ',
      rawxxbl: ' ',
    }
  },

  metaInfo: {
    title: 'Store1 - Bestja',
    meta: [
      {
        name: 'description',
        content:
          'Bestja, il-logħba tal-karti fuq il-monstri tal-folklore Malti.',
      },
      {
        property: 'og:title',
        content: 'Store1 - Bestja',
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
.store1-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: #0e000f;
}
.store1-container1 {
  width: 100%;
  height: 594px;
  display: flex;
  margin-top: 10rem;
  align-items: flex-start;
  margin-left: 0rem;
  margin-right: 0rem;
}
.store1-form {
  width: 100%;
  height: 100%;
  margin-left: 3rem;
}
.store1-text {
  font-size: 1.5rem;
}
.store1-textinput {
  margin-left: 2rem;
}
.store1-surname {
  margin-top: var(--dl-space-space-unit);
}
.store1-text1 {
  font-size: 1.5rem;
}
.store1-textinput1 {
  margin-left: 53px;
}
.store1-email {
  margin-top: var(--dl-space-space-unit);
}
.store1-text2 {
  font-size: 1.5rem;
}
.store1-textinput2 {
  margin-left: 94px;
}
.store1-button {
  margin-top: 3rem;
  margin-left: 10rem;
}
.store1-container2 {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 133px;
  display: flex;
  position: absolute;
  align-items: flex-end;
  justify-content: flex-end;
}
.store1-container3 {
  width: 30%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
}
.store1-navlink {
  font-size: 2.5rem;
  font-style: normal;
  font-family: Oswald;
  font-weight: 500;
  text-decoration: none;
}
.store1-navlink1 {
  display: contents;
}
.store1-image {
  top: 0px;
  left: 0px;
  right: 0px;
  width: 50%;
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
@media(max-width: 991px) {
  .store1-container1 {
    align-items: stretch;
    justify-content: flex-start;
  }
}
@media(max-width: 767px) {
  .store1-container1 {
    align-items: center;
    flex-direction: column;
  }
  .store1-container2 {
    top: 0px;
    left: 0px;
    height: 20%;
    position: absolute;
    align-items: center;
    padding-top: 5rem;
  }
  .store1-image {
    width: 100%;
    height: 70%;
  }
}
@media(max-width: 479px) {
  .store1-container2 {
    height: 20%;
  }
  .store1-image {
    width: 70%;
    height: 70%;
  }
}
</style>
