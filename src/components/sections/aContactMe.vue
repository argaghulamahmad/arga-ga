<template>
  <div>
    <div class="weight">
      <bCard no-body>
        <b-tabs nav-class="mx-auto" card>
          <b-tab title="Calendly" active>
            <br>
            <aCalendly></aCalendly>
          </b-tab>
          <b-tab title="Leave a message">
            <br>
            <aSendMessage></aSendMessage>
          </b-tab>
          <b-tab title="Contact">
            <br>
            <aContact></aContact>
          </b-tab>
        </b-tabs>
      </bCard>
      <br>
    </div>
  </div>
</template>

<script>
  import aCalendly from '../partials/aCalendly'
  import aSendMessage from '../partials/aSendMessage'
  import aContact from '../partials/aContact'
  import bTab from 'bootstrap-vue/es/components/tabs/tab'
  import bTabs from 'bootstrap-vue/es/components/tabs/tabs'
  import bCard from 'bootstrap-vue/es/components/card/card'

  export default {
    name: "aContactMe",
    components: {
      aCalendly, aSendMessage, aContact, bTab, bTabs, bCard
    },
    props: {
      userName: '',
      userEmail: ''
    }
  }
</script>

<style scoped>
  .auto {
    margin: auto;
  }

  .div--list {
    padding: 0 20px 0 20px;
  }

  .weight {
    font-weight: 600;
  }
</style>
