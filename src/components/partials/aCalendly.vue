<template>
  <div>
    <b-embed type="iframe"
             src="https://calendly.com/argaghulamahmad"
             style="min-width:320px;height:600px;"
             aspect="1by1"
    ></b-embed>
    <br>
  </div>
</template>

<script>
  import bEmbed from 'bootstrap-vue/es/components/embed/embed'

  export default {
    name: "aCalendly",
    components: {
      bEmbed
    }
  }
</script>

<style scoped>

</style>
