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
          Let me know you, please login using your google account. To see my personal details such as phone number and email, i need to know who you are.
        </template>
        <hr class="my-4">
        <b-button size="sm" class="mx-auto my-2 my-sm-0" variant="primary" type="submit"
                  @click="signInWithGoogle"><i
          class="fa fa-google"></i> Sign in with Google
        </b-button>
      </b-jumbotron>
    </div>

    <div v-if="user">
      <p class="p--title">Hello, {{this.userName}}. It was pleasure to meet you.</p>
      <aContactMe></aContactMe>
    </div>

    <aSpinner v-if="loading"></aSpinner>
  </div>
</template>

<script>
  import bContainer from 'bootstrap-vue/es/components/layout/container'
  import bRow from 'bootstrap-vue/es/components/layout/row'
  import bCol from 'bootstrap-vue/es/components/layout/col'
  import bButton from 'bootstrap-vue/es/components/button/button'
  import bNavbar from 'bootstrap-vue/es/components/navbar/navbar'
  import bNavbarBrand from 'bootstrap-vue/es/components/navbar/navbar-brand'
  import bNavbarToggle from 'bootstrap-vue/es/components/navbar/navbar-toggle'
  import bCollapse from 'bootstrap-vue/es/components/collapse/collapse'
  import bNavbarNav from 'bootstrap-vue/es/components/navbar/navbar-nav'
  import bNavItem from 'bootstrap-vue/es/components/nav/nav-item'
  import bNavForm from 'bootstrap-vue/es/components/nav/nav-form'
  import bNavItemDropdown from 'bootstrap-vue/es/components/nav/nav-item-dropdown'
  import bDropdownItem from 'bootstrap-vue/es/components/dropdown/dropdown-item'
  import bFormInput from 'bootstrap-vue/es/components/form-input/form-input'
  import bJumbotron from 'bootstrap-vue/es/components/jumbotron/jumbotron'
  import aContactMe from '../sections/aContactMe'
  import aSpinner from '../partials/aSpinner'
  import firebase from 'firebase'

  export default {
    name: "aAuth",
    components: {
      aContactMe,
      bContainer,
      bRow,
      bCol,
      bButton,
      bNavbar,
      bNavbarBrand,
      bNavbarToggle,
      bCollapse,
      bNavbarNav,
      bNavItem,
      bNavForm,
      bFormInput,
      bNavItemDropdown,
      bDropdownItem,
      bJumbotron,
      aSpinner
    },
    beforeCreate: function () {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.user = user;
          this.userName = user.displayName;
          this.$store.state.userName = user.displayName;
          this.$store.state.userEmail = user.email;
          this.$store.state.userPhotoUrl = user.photoURL;
        }
        this.loading = false
      })
    },
    data() {
      return {
        loading: true,
        user: null,
        userName: ''
      }
    },
    methods: {
      signInWithGoogle: function () {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithRedirect(provider).then((result) => {
          this.user = result.user;
        }).catch(err => console.log(error))
      },
      signOut: function () {
        firebase.auth().signOut().then(() => {
          this.user = null;
          this.userName = '';
          this.$store.state.userName = '';
          this.$store.state.userEmail = '';
          this.$store.state.userPhotoUrl = '';
        }).catch(err => console.log(error))
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
</style>
