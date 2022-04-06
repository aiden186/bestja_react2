<template>
  <div class="store-container">
    <maltese-header rootClassName="rootClassName1"></maltese-header>
    <div class="store-container1">
      <form
        action="https://formsubmit.co/cachiaaiden@gmail.com"
        method="POST"
        class="store-form"
      >
        <div>
          <span class="store-text">
            First Name:
            <span v-html="rawo53r"></span>
          </span>
          <input
            type="text"
            name="First Name"
            required="true"
            placeholder="George"
            class="store-textinput input"
          />
        </div>
        <div class="store-surname">
          <span class="store-text1">
            Surname:
            <span v-html="rawu1tb"></span>
          </span>
          <input
            type="text"
            name="Surname"
            required="true"
            placeholder="Borg"
            class="store-textinput1 input"
          />
        </div>
        <div class="store-email">
          <span class="store-text2">
            Email:
            <span v-html="rawkr1l"></span>
          </span>
          <input
            type="text"
            name="Email"
            required="true"
            placeholder="georgeborg@gmail.com"
            class="store-textinput2 input"
          />
        </div>
        <button type="submit" class="store-button button">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import MalteseHeader from '../components/maltese-header'

export default {
  name: 'Store',
  components: {
    MalteseHeader,
  },

  data() {
    return {
      rawo53r: ' ',
      rawu1tb: ' ',
      rawkr1l: ' ',
    }
  },

  metaInfo: {
    title: 'Store - Bestja',
    meta: [
      {
        name: 'description',
        content:
          'Bestja, il-logħba tal-karti fuq il-monstri tal-folklore Malti.',
      },
      {
        property: 'og:title',
        content: 'Store - Bestja',
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
.store-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: #0e000f;
}
.store-container1 {
  width: 100%;
  height: 594px;
  display: flex;
  align-items: flex-start;
  margin-left: 0rem;
  margin-right: 0rem;
}
.store-form {
  width: 100%;
  height: 100%;
  padding-top: 3rem;
  padding-left: 3rem;
}
.store-text {
  font-size: 1.5rem;
}
.store-textinput {
  margin-left: 2rem;
  background-color: var(--dl-color-secondary-700);
}
.store-surname {
  margin-top: var(--dl-space-space-unit);
}
.store-text1 {
  font-size: 1.5rem;
}
.store-textinput1 {
  margin-left: 53px;
  background-color: var(--dl-color-secondary-700);
}
.store-email {
  margin-top: var(--dl-space-space-unit);
}
.store-text2 {
  font-size: 1.5rem;
}
.store-textinput2 {
  margin-left: 94px;
  background-color: var(--dl-color-secondary-700);
}
.store-button {
  margin-top: 3rem;
  margin-left: 10rem;
}
@media(max-width: 991px) {
  .store-container1 {
    align-items: stretch;
    justify-content: flex-start;
  }
}
@media(max-width: 767px) {
  .store-container1 {
    align-items: center;
    flex-direction: column;
  }
  .store-form {
    padding-top: 197px;
  }
}
</style>
