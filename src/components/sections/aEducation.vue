<template>
  <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
    <div class="my-auto">
      <h2 class="mb-5">Education</h2>

      <div v-for="education in educations" class="resume-item d-flex flex-column flex-md-row mb-5">
        <div class="resume-content mr-auto">
          <h3 class="mb-0"><a :href="education['school-url']" target="_blank">{{education['school']}}</a></h3>
          <div class="subheading mb-3">{{education['degree']}}</div>
          <div>{{education['study']}}</div>
          <p>{{education['description']}}</p>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">{{education['from']}} - {{education['to']}}</span>
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
    name: "aEducation",
    data() {
      return {
        educations: [],
        loading: true
      }
    },
    components: {
      aSpinner
    },
    created() {
      axios.get(`/data/education.json`)
        .then(response => {
          const data = response.data;
          const educations = [];
          for (let key in data) {
            const education = data[key];
            education.id = key;
            educations.push(education)
          }
          this.educations = educations.reverse();
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
