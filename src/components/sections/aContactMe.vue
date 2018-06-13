<template>
  <div>
    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" id="pills-calendly-tab" data-toggle="pill" href="#pills-calendly" role="tab"
           aria-controls="pills-calendly" aria-selected="true">Calendly</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="pills-message-tab" data-toggle="pill" href="#pills-message" role="tab"
           aria-controls="pills-message" aria-selected="false">Leave a message</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab"
           aria-controls="pills-contact" aria-selected="false">Contact</a>
      </li>
    </ul>
    <div class="tab-content" id="pills-tabContent">
      <div class="tab-pane fade show active" id="pills-calendly" role="tabpanel" aria-labelledby="pills-calendly-tab">
        <aCalendly></aCalendly>
      </div>
      <div class="tab-pane fade" id="pills-message" role="tabpanel" aria-labelledby="pills-message-tab">
        <aSendMessage></aSendMessage>
      </div>
      <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
        <aContact></aContact>
      </div>
    </div>
  </div>
</template>

<script>
  import aCalendly from '../partials/aCalendly'
  import aSendMessage from '../partials/aSendMessage'
  import aContact from '../partials/aContact'

  export default {
    name: "aContactMe",
    components: {
      aCalendly, aSendMessage, aContact
    }
  }
</script>

<style scoped>
  a {
    text-align: center;
  }

  li {
    margin: auto;
  }

  ul {
    padding-top: 20px;
  }
</style>
