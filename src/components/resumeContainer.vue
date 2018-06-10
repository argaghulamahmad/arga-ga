<template>
  <div class="container-fluid p-0">
    <router-view></router-view>
  </div>
</template>

<script>
  import aAboutMe from './sections/aAboutMe'
  import aAwards from './sections/aAchivements'
  import aEducation from './sections/aEducation'
  import aExperience from './sections/aExperience'
  import aInterests from './sections/aInterests'
  import aSkills from './sections/aSkills'

  export default {
    name: "mainContainer",
    components: {
      aAboutMe, aAwards, aEducation, aExperience, aInterests, aSkills
    }
  }
</script>

<style scoped>

</style>
