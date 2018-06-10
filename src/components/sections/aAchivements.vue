<template>
  <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
    <div class="my-auto">
      <h2 class="mb-5">Achievements</h2>
      <ul class="fa-ul mb-0">
        <li v-for="achievement in achievements">
          <i class="fa-li fa fa-trophy text-warning"></i>
          {{achievement['title']}}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "aAwards",
    data() {
      return {
        achievements: []
      }
    },
    created() {
      axios.get(`/data/achievements.json`)
        .then(response => {
          const data = response.data;
          console.log(data);
          const achievements = [];
          for (let key in data) {
            const item = data[key];
            item.id = key;
            achievements.push(item)
          }
          this.achievements = achievements;
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
</script>

<style scoped>

</style>
