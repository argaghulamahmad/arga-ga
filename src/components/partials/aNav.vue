<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
    <a class="navbar-brand js-scroll-trigger">
      <span class="d-block d-lg-none">Arga Ghulam Ahmad</span>
      <span class="d-none d-lg-block">
          <img class="img-fluid img-profile rounded-circle mx-auto mb-2"
               src="https://avatars3.githubusercontent.com/u/19942092?s=460&v=4" alt="">
        </span>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link js-scroll-trigger" to="/" tag="li" active-class="active" exact><a>Home</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link js-scroll-trigger" to="/experience" tag="li" active-class="active" exact><a>Experience</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link js-scroll-trigger" to="/education" tag="li" active-class="active" exact><a>Education</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link js-scroll-trigger" to="/projects" tag="li" active-class="active" exact>
            <a>Projects</a></router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link js-scroll-trigger" to="/skills" tag="li" active-class="active" exact>
            <a>Skills</a></router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link js-scroll-trigger" to="/interests" tag="li" active-class="active" exact><a>Interests</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link js-scroll-trigger" to="/achievements" tag="li" active-class="active" exact><a>Achievements</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link js-scroll-trigger" to="/contact-me" tag="li" active-class="active" exact><a>Contact
            Me</a>
          </router-link>
        </li>
      </ul>
    </div>
    <p class="nav__footer">Arga Ghulam Ahmad © 2018</p>
  </nav>
</template>

<script>
  export default {
    name: "aNav",
    props: {
      photoUrl: String,
      name: String,
      photoHrefUrl: String,
    }
  }
</script>

<style scoped>
  .nav-link a {
    color: rgba(255, 255, 255, .5)
  }

  .nav__footer {
    color: rgba(255, 255, 255, .5)
  }
</style>
