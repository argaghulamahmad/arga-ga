<template>
  <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
    <div class="my-auto">
      <h2 class="mb-5">Achievements</h2>
      <ul class="fa-ul mb-0 weight">
        <li v-for="achievement in achievements">
          <i class="fa-li fa fa-trophy text-warning"></i>
          {{achievement['title']}}
        </li>
      </ul>
    </div>
    <aSpinner v-if="loading"></aSpinner>
  </section>
</template>

<script>
  import axios from 'axios'
  import aSpinner from '../partials/aSpinner'

  export default {
    name: "aAwards",
    data() {
      return {
        achievements: [],
        loading: true
      }
    },
    components: {
      aSpinner
    },
    created() {
      axios.get(`/data/achievements.json`)
        .then(response => {
          const data = response.data;
          // console.log(data);
          const achievements = [];
          for (let key in data) {
            const item = data[key];
            item.id = key;
            achievements.push(item)
          }
          this.achievements = achievements;
          this.loading = false;
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
</script>

<style scoped>
  .weight {
    font-weight: 600;
  }
</style>
