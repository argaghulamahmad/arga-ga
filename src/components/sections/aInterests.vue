<template>
  <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
    <div class="my-auto">
      <h2 class="mb-5">Interests</h2>
      <ul>
        <li v-for="interest in interests">{{interest['title']}}</li>
      </ul>
    </div>
  </section>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "aInterests",
    data() {
      return {
        interests: []
      }
    },
    created() {
      axios.get(`/data/interests.json`)
        .then(response => {
          const data = response.data;
          const interests = [];
          for (let key in data) {
            const interest = data[key];
            interest.id = key;
            interests.push(interest)
          }
          this.interests = interests;
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
</script>

<style scoped>

</style>
