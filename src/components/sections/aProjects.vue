<template>
  <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="projects">
    <div class="my-auto">
      <h2 class="mb-5">Projects</h2>
      <div v-for="project in projects" class="resume-item d-flex flex-column flex-md-row mb-5">
        <div class="resume-content mr-auto">
          <h3 class="mb-0 weight">{{project['name']}}</h3>
          <div class="subheading mb-3 weight"><a :href="project['url']" target="_blank">{{project['url']}}</a></div>
          <div class="div--stacks">
            <div class="tag" v-for="stack in project['stacks']">
              {{stack}}
            </div>
          </div>
          <br>
          <ul>
            <li v-for="desc in project['description']" class="weight">
              {{desc}}
            </li>
          </ul>
        </div>
        <div class="resume-date text-md-right weight">
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
    beforeCreate() {
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
  .div--stacks {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 0 0 0 30px;
  }

  .div--stacks .tag {
    color: #1976D2;
    padding: 0.25rem;
    margin-top: 0.5rem;
    margin-right: 0.5rem;
    border-radius: .25rem;
    border: 2px solid #1976D2;
    text-align: center;
    font-size: smaller;
    font-style: oblique;
    font-weight: 700;
  }

  .weight {
    font-weight: 600;
  }
</style>
