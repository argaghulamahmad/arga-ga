<template>
  <div>
    <section class="p-3 p-lg-5 d-flex flex-column" id="auth">
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
        <b-container style="margin: 10px">
          <b-row>
            <b-col cols="8"><p class="p--title">Hello, {{this.getUserName()}}. It was pleasure to meet you.</p></b-col>
            <b-col cols="4">
              <b-button id="btn-logout" @click="signOut" variant="danger" size="sm">Sign Out</b-button>
            </b-col>
          </b-row>
        </b-container>
        <aContactMe></aContactMe>
      </div>

      <aSpinner v-if="loading"></aSpinner>
    </section>
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
  import firebase from 'firebase/app';
  import 'firebase/auth';
  import {mapActions, mapGetters} from 'vuex'

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
