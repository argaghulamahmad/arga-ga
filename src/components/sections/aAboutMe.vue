<template>
  <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
    <div class="my-auto weight center">
      <h1 class="mb-0">Hi, Everyone! My name is
        <br>
        <span class="text-primary">{{this.firstName}} {{this.lastName}}</span>
      </h1>
      <p class="mb-5">{{this.description}}</p>
      <ul class="list-inline list-social-icons mb-0">
        <li class="list-inline-item" v-for="social in socials">
          <a :href="social['url']" target="_blank">
                <span>
                  <i :class="getSocialIconClass(social['name'])"></i>
                </span>
          </a>
        </li>
      </ul>
    </div>
    <aSpinner v-if="loading"></aSpinner>
  </section>
</template>

<script>
  import axios from 'axios';
  import aSpinner from '../partials/aSpinner'

  export default {
    name: "aAboutMe",
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        description: '',
        socials: [],
        loading: true
      }
    },
    components: {
      aSpinner
    },
    methods: {
      getSocialIconClass: function (socialName) {
        return "fa fa-" + socialName;
      }
    },
    created: function () {
      axios.get(`/data/about-me.json`)
        .then(response => {
          // console.log(response.data);
          this.firstName = response.data['first-name'];
          this.lastName = response.data['last-name'];
          this.email = response.data['email'];
          this.description = response.data['description'];
        })
        .catch(e => {
          console.log(e)
        });

      axios.get(`/data/social.json`)
        .then(response => {
          // console.log(response.data);
          const data = response.data;
          const socials = [];
          for (let key in data) {
            const social = data[key];
            social.id = key;
            socials.push(social)
          }
          this.socials = socials;
          this.loading = false;
          // console.log(this.socials);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
</script>

<style scoped>
  .center {
    text-align: center;
  }

  .list-social-icons a {
    font-size: 1.75rem;
  }

  .list-social-icons li {
    padding-right: 1.5rem;
  }

  .weight {
    font-weight: 600;
  }
</style>
