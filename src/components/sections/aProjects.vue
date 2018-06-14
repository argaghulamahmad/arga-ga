<template>
  <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="projects">
    <div class="my-auto">
      <h2 class="mb-5">Projects</h2>
      <div v-for="project in projects" class="resume-item d-flex flex-column flex-md-row mb-5">
        <div class="resume-content mr-auto">
          <h3 class="mb-0">{{project['name']}}</h3>
          <div class="subheading mb-3"><a :href="project['url']" target="_blank">{{project['url']}}</a></div>
          <p>{{project['description']}}</p>
        </div>
        <div class="resume-date text-md-right">
          <span class="text-primary">{{project['from']}} - {{project['to']}}</span>
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
    name: "aProjects",
    data() {
      return {
        projects: [],
        loading: true
      }
    },
    components: {
      aSpinner
    },
    created() {
      axios.get(`/data/projects.json`)
        .then(response => {
          const data = response.data;
          const projects = [];
          for (let key in data) {
            const project = data[key];
            project.id = key;
            projects.push(project)
          }
          this.projects = projects;
          // console.log(this.projects);
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
