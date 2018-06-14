<template>
  <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
    <div class="my-auto">
      <h2 class="mb-5">Experience</h2>
      <div v-for="experience in experiences" class="resume-item d-flex flex-column flex-md-row mb-5">
        <div class="resume-content mr-auto">
          <h3 class="mb-0">{{experience['title']}}</h3>
          <div class="subheading mb-3"><a :href="experience['company-url']"
                                          target="_blank">{{experience['company']}}</a></div>
          <p v-for="desc in experience['description']">{{desc}}</p>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">{{experience['location']}}</span>
          <br>
          <span class="text-primary">{{experience['from']}} - {{experience['to']}}</span>
        </div>
      </div>
    </div>
    <aSpinner v-if="loading"></aSpinner>
  </section>

</template>

<script>
  import axios from 'axios';
  import aSpinner from '../partials/aSpinner'

  export default {
    name: "aExperience",
    data() {
      return {
        experiences: [],
        loading: true
      }
    },
    components: {
      aSpinner
    },
    created() {
      axios.get(`/data/experience.json`)
        .then(response => {
          const data = response.data;
          const experiences = [];
          for (let key in data) {
            const experience = data[key];
            experience.id = key;
            experiences.push(experience)
          }
          this.experiences = experiences.reverse();
          this.loading = false;
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
</script>

<style scoped>

</style>
