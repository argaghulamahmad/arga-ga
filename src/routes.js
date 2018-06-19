import aAboutMe from './components/sections/aAboutMe';
import aAwards from './components/sections/aAchievements';
import aEducation from './components/sections/aEducation';
import aExperience from './components/sections/aExperience';
import aInterests from './components/sections/aInterests';
import aSkills from './components/sections/aSkills';
import aProjects from './components/sections/aProjects'
import aAuth from './components/partials/aAuth'

export const routes = [
  {
    path: '/', component: aAboutMe
  }, {
    path: '/achievements', component: aAwards
  }, {
    path: '/education', component: aEducation
  }, {
    path: '/experience', component: aExperience
  }, {
    path: '/projects', component: aProjects
  }, {
    path: '/interests', component: aInterests
  }, {
    path: '/skills', component: aSkills
  }, {
    path: '/contact-me', component: aAuth
  }
];
