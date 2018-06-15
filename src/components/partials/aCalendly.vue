<template>
  <div class="p-3 p-lg-5 d-flex flex-column my-auto">
    <b-embed type="iframe"
             src="https://calendly.com/argaghulamahmad"
             style="min-width:320px;height:600px;"
             aspect="16by9"
             tag="div"
             allowfullscreen
    ></b-embed>
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
