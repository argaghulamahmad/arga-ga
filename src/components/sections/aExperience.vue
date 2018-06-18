<template>
  <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
    <div class="my-auto">
      <h2 class="mb-5">Experience</h2>
      <div v-for="experience in experiences">
        <div class="resume-item d-flex flex-column flex-md-row mb-5">
          <div>
            <div class="image"><img :src="experience['company-logo']"
                                    :alt="experience['company']"></div>
          </div>
          <div class="resume-content mr-auto">
            <h3 class="mb-0 weight">{{experience['title']}}</h3>
            <div class="subheading mb-3 weight">
              <a :href="experience['company-url']"
                 target="_blank">{{experience['company']}}</a>
            </div>
            <div class="div--stacks">
              <div class="tag" v-for="stack in experience['stacks']">
                {{stack}}
              </div>
            </div>
            <br>
            <ul>
              <li v-for="desc in experience['description']" class="weight">
                {{desc}}
              </li>
            </ul>
          </div>
          <div class="resume-date text-md-right weight">
            <span class="text-primary">
              {{experience['location']}}
            </span>
            <br>
            <span class="text-primary">
              {{experience['from']}} - {{experience['to']}}
            </span>
          </div>
          <br>
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

  .image {
    position: relative;
    padding-top: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .image img {
    width: 3rem;
    height: 3rem;
    object-fit: contain;
    border-radius: 9999px;
    position: relative;
    z-index: 1;
    display: block;
    margin: auto;
  }
</style>
