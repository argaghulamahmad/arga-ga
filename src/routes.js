import aAboutMe from './components/sections/aAboutMe';
import aAwards from './components/sections/aAchivements';
import aEducation from './components/sections/aEducation';
import aExperience from './components/sections/aExperience';
import aInterests from './components/sections/aInterests';
import aSkills from './components/sections/aSkills';
import aContactMe from './components/sections/aContactMe'
import aProjects from './components/sections/aProjects'
import aCalendly from './components/partials/aCalendly'

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
    path: '/contact-me', component: aContactMe, children: [
      {
        path: '/calendly', component: aCalendly
      }
    ]

  }
];
