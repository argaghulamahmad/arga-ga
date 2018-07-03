<template>
  <div>
    <b-navbar toggleable="md" type="light" variant="faded">
      <b-navbar-brand v-if="user" tag="h1" class="mb-0">Contact Me</b-navbar-brand>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <div v-if=user>
          <b-button @click="signOut" variant="danger">Sign Out</b-button>
        </div>
      </b-navbar-nav>
    </b-navbar>

    <div class="div--wrapper">
      <b-jumbotron v-if="!user && !loading" bg-variant="white">
        <template slot="header">
          Contact Me
        </template>
        <template slot="lead">
          Let me know you, please log in using your google account. To see my personal details such as phone number and
          email, I need to know who you are.
        </template>
        <hr class="my-4">
        <b-button size="sm" class="mx-auto my-2 my-sm-0" variant="primary" type="submit"
                  @click="signInWithGoogle"><i
          class="fa fa-google"></i> Sign in with Google
        </b-button>
      </b-jumbotron>
    </div>

    <div v-if="user">
      <p class="p--title">Hello, {{this.getUserName()}}. It was pleasure to meet you.</p>
      <aContactMe></aContactMe>
    </div>

    <aSpinner v-if="loading"></aSpinner>
  </div>
</template>

<script>
  import bButton from 'bootstrap-vue/es/components/button/button'
  import bNavbar from 'bootstrap-vue/es/components/navbar/navbar'
  import bNavbarBrand from 'bootstrap-vue/es/components/navbar/navbar-brand'
  import bNavbarNav from 'bootstrap-vue/es/components/navbar/navbar-nav'
  import bJumbotron from 'bootstrap-vue/es/components/jumbotron/jumbotron'
  import aContactMe from '../sections/aContactMe'
  import aSpinner from '../partials/aSpinner'
  import firebase from 'firebase'
  import {mapActions} from 'vuex'
  import {mapGetters} from 'vuex'

  export default {
    name: "aAuth",
    components: {
      aContactMe,
      aSpinner,
      bNavbar,
      bNavbarBrand,
      bNavbarNav,
      bButton,
      bJumbotron
    },
    beforeCreate: function () {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.user = user;
          this.actionUserName(this.user.displayName);
          this.actionUserEmail(this.user.email);
          this.actionUserPhotoUrl(this.user.photoURL);
        }
        this.loading = false
      })
    },
    data() {
      return {
        loading: true,
        user: null,
      }
    },
    methods: {
      ...mapActions(['actionUserName', 'actionUserEmail', 'actionUserPhotoUrl']),
      ...mapGetters(['getUserName', 'getUserEmail', 'getUserPhotoUrl']),
      signInWithGoogle: function () {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider).then((result) => {
          this.user = result.user;
        }).catch(error => console.log(error))
      },
      signOut: function () {
        firebase.auth().signOut().then(() => {
          this.user = null;
          this.actionUserName('');
          this.actionUserEmail('');
          this.actionUserPhotoUrl('');
          console.log(this.getUserName(), this.getUserEmail(), this.getUserPhotoUrl())
        }).catch(error => console.log(error))
      }
    }
  }


</script>

<style scoped>
  .div--wrapper {
    padding: 20px 20px 20px 20px;
  }

  .p--title {
    text-align: center;
    font-weight: bolder;
    padding: 0 20px 0 20px;
  }

  .weight {
    font-weight: 600;
  }
</style>
