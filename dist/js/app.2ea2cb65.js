(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],u=0,f=[];u<o.length;u++)r=o[u],s[r]&&f.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var o=a[r];0!==s[o]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={8:0},s={8:0},i=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{0:"699484ad",1:"5fa60543",2:"0ff9280e",3:"5c280c73",4:"89390b03",5:"c9fa138c",6:"5a30cb03"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={0:1,1:1,2:1,3:1,4:1,5:1,6:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise(function(e,a){for(var n="css/"+({}[t]||t)+"."+{0:"d2b808f0",1:"33643184",2:"d0c6a3ef",3:"148bd457",4:"80885ffa",5:"9b18430c",6:"04fba280"}[t]+".css",r=c.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var o=s[i],l=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(l===n||l===r))return e()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){o=u[i],l=o.getAttribute("data-href");if(l===n||l===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||r,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.request=n,a(s)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){r[t]=0}));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise(function(e,a){n=s[t]=[e,a]});e.push(n[2]=i);var l,u=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.src=o(t),l=function(e){f.onerror=f.onload=null,clearTimeout(p);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+n+": "+r+")");i.type=n,i.request=r,a[1](i)}s[t]=void 0}};var p=setTimeout(function(){l({type:"timeout",target:f})},12e4);f.onerror=f.onload=l,u.appendChild(f)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var p=u;i.push([12,7]),a()})({12:function(t,e,a){t.exports=a("Vtdi")},"20uz":function(t,e,a){"use strict";var n=a("PKXa"),r=a.n(n);r.a},PKXa:function(t,e,a){},RLTr:function(t,e,a){},T0Gc:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"spinner-wrapper"},[a("div",{staticClass:"spinner"},[a("div",{staticClass:"bounce1"}),a("div",{staticClass:"bounce2"}),a("div",{staticClass:"bounce3"})])])}],s={name:"aSpinner"},i=s,o=(a("lgrM"),a("KHd+")),c=Object(o["a"])(i,n,r,!1,null,"631d2bf2",null);e["a"]=c.exports},VkPS:function(t,e,a){},Vtdi:function(t,e,a){"use strict";a.r(e);var n=a("Kw5r"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("main",{staticClass:"container",attrs:{role:"main"}},[a("a-nav"),a("resume-container")],1),a("aFooter")],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("bNavbar",{staticClass:"navbar-expand-lg navbar-dark bg-primary fixed-top",attrs:{id:"sideNav"}},[a("bNavbarBrand",[a("span",{staticClass:"d-block d-lg-none"},[t._v("Arga Ghulam Ahmad")]),a("span",{staticClass:"d-none d-lg-block"},[a("img",{staticClass:"img-fluid img-profile rounded-circle mx-auto mb-2",attrs:{src:"https://avatars3.githubusercontent.com/u/19942092?s=460&v=4",alt:""}})])]),a("bNavbarToggler",{attrs:{type:"button","data-toggle":"collapse",target:"navbarSupportedContent","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})]),a("bNavbarCollapse",{staticClass:"navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link js-scroll-trigger",attrs:{to:"/",tag:"li","active-class":"active",exact:""}},[a("a",[t._v("Home")])])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link js-scroll-trigger",attrs:{to:"/experience",tag:"li","active-class":"active",exact:""}},[a("a",[t._v("Experience")])])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link js-scroll-trigger",attrs:{to:"/education",tag:"li","active-class":"active",exact:""}},[a("a",[t._v("Education")])])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link js-scroll-trigger",attrs:{to:"/projects",tag:"li","active-class":"active",exact:""}},[a("a",[t._v("Projects")])])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link js-scroll-trigger",attrs:{to:"/skills",tag:"li","active-class":"active",exact:""}},[a("a",[t._v("Skills")])])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link js-scroll-trigger",attrs:{to:"/interests",tag:"li","active-class":"active",exact:""}},[a("a",[t._v("Interests")])])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link js-scroll-trigger",attrs:{to:"/achievements",tag:"li","active-class":"active",exact:""}},[a("a",[t._v("Achievements")])])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link js-scroll-trigger",attrs:{to:"/contact-me",tag:"li","active-class":"active",exact:""}},[a("a",[t._v("Contact\n          Me")])])],1)])])],1)},o=[],c=a("4ah+"),l=a("5MXG"),u=a("Qc1p"),f=a("xSrL"),p={name:"aNav",props:{photoUrl:String,name:String,photoHrefUrl:String},components:{bNavbar:c["a"],bNavbarCollapse:l["a"],bNavbarToggler:u["a"],bNavbarBrand:f["a"]}},v=p,m=(a("gG85"),a("KHd+")),d=Object(m["a"])(v,i,o,!1,null,"6aea2ada",null),g=d.exports,h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"div--footer"},[a("footer",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("span",{staticClass:"text-muted"},[t._v("Arga Ghulam Ahmad © 2018")])])])])}],C={name:"aFooter"},_=C,k=(a("sahj"),Object(m["a"])(_,h,b,!1,null,"1da5a546",null)),x=k.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid p-0"},[a("router-view")],1)},j=[],N={name:"mainContainer"},E=N,S=(a("20uz"),Object(m["a"])(E,y,j,!1,null,"0ae3d866",null)),U=S.exports,w={name:"app",components:{aNav:g,resumeContainer:U,aFooter:x}},P=w,O=(a("nNx0"),Object(m["a"])(P,r,s,!1,null,null,null)),T=O.exports,A=a("jE9Z"),M=a("vDqi"),R=a.n(M),L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"resume-section p-3 p-lg-5 d-flex d-column",attrs:{id:"about"}},[a("div",{staticClass:"my-auto weight center"},[a("h1",{staticClass:"mb-0"},[t._v("Hi, Everyone! My name is\n      "),a("br"),a("span",{staticClass:"text-primary"},[t._v(t._s(this.firstName)+" "+t._s(this.lastName))])]),a("p",{staticClass:"mb-5"},[t._v(t._s(this.description))]),a("ul",{staticClass:"list-inline list-social-icons mb-0"},t._l(t.socials,function(e){return a("li",{staticClass:"list-inline-item"},[a("a",{attrs:{href:e["url"],target:"_blank"}},[a("span",[a("i",{class:t.getSocialIconClass(e["name"])})])])])}))]),t.loading?a("aSpinner"):t._e()],1)},q=[],I=a("T0Gc"),K={name:"aAboutMe",data:function(){return{firstName:"",lastName:"",email:"",description:"",socials:[],loading:!0}},components:{aSpinner:I["a"]},methods:{getSocialIconClass:function(t){return"fa fa-"+t}},beforeCreate:function(){var t=this;R.a.get("/data/about-me.json").then(function(e){t.firstName=e.data["first-name"],t.lastName=e.data["last-name"],t.email=e.data["email"],t.description=e.data["description"]}).catch(function(t){console.log(t)}),R.a.get("/data/social.json").then(function(e){var a=e.data,n=[];for(var r in a){var s=a[r];s.id=r,n.push(s)}t.socials=n,t.loading=!1}).catch(function(t){console.log(t)})}},B=K,G=(a("qYvw"),Object(m["a"])(B,L,q,!1,null,"d09bdea4",null)),$=G.exports,z=function(t){a.e(6).then(function(){t(a("T3Nh"))}.bind(null,a)).catch(a.oe)},H=function(t){a.e(5).then(function(){t(a("+osr"))}.bind(null,a)).catch(a.oe)},V=function(t){a.e(4).then(function(){t(a("EjKl"))}.bind(null,a)).catch(a.oe)},X=function(t){a.e(3).then(function(){t(a("10z/"))}.bind(null,a)).catch(a.oe)},D=function(t){a.e(2).then(function(){t(a("0pR8"))}.bind(null,a)).catch(a.oe)},F=function(t){a.e(1).then(function(){t(a("WxFB"))}.bind(null,a)).catch(a.oe)},J=function(t){a.e(0).then(function(){t(a("ptzY"))}.bind(null,a)).catch(a.oe)},Y=[{path:"/",component:$},{path:"/achievements",component:z},{path:"/education",component:H},{path:"/experience",component:V},{path:"/projects",component:F},{path:"/interests",component:X},{path:"/skills",component:D},{path:"/contact-me",component:J}],Z=a("L2JU"),W={userName:"",userEmail:"",userPhotoUrl:""},Q={getUserName:function(t){return t.userName},getUserEmail:function(t){return t.userEmail},getUserPhotoUrl:function(t){return t.userPhotoUrl}},tt={setUserName:function(t,e){t.userName=e},setUserEmail:function(t,e){t.userEmail=e},setUserPhotoUrl:function(t,e){t.userPhotoUrl=e}},et={actionUserName:function(t,e){var a=t.commit;a("setUserName",e)},actionUserEmail:function(t,e){var a=t.commit;a("setUserEmail",e)},actionUserPhotoUrl:function(t,e){var a=t.commit;a("setUserPhotoUrl",e)}},at={state:W,mutations:tt,actions:et,getters:Q};n["a"].use(Z["a"]);var nt=new Z["a"].Store({state:{},getters:{},mutations:{},actions:{},modules:{user:at}}),rt=a("iqUP"),st=a.n(rt),it=a("n3sq");a("+eM2"),a("LdiE");n["a"].use(it["a"]),n["a"].use(A["a"]),R.a.defaults.baseURL="https://arga-ga-backend.firebaseio.com/",R.a.defaults.headers.get["Accepts"]="application/json";var ot={apiKey:"AIzaSyDKkCGqULqtZnbfeEWpZwp7xXbCKlH3xX0",authDomain:"arga-ga-backend.firebaseapp.com",databaseURL:"https://arga-ga-backend.fire baseio.com",projectId:"arga-ga-backend",storageBucket:"YOUR_PROJECT_ID.appspot.com",messagingSenderId:"883924954020"};st.a.initializeApp(ot),st.a.auth.Auth.Persistence.NONE;var ct=new A["a"]({routes:Y,mode:"history"});new n["a"]({el:"#app",store:nt,router:ct,render:function(t){return t(T)}})},gG85:function(t,e,a){"use strict";var n=a("VkPS"),r=a.n(n);r.a},kRTI:function(t,e,a){},lgrM:function(t,e,a){"use strict";var n=a("s7VS"),r=a.n(n);r.a},nNx0:function(t,e,a){"use strict";var n=a("RLTr"),r=a.n(n);r.a},qYvw:function(t,e,a){"use strict";var n=a("kRTI"),r=a.n(n);r.a},s7VS:function(t,e,a){},sahj:function(t,e,a){"use strict";var n=a("uR2O"),r=a.n(n);r.a},uR2O:function(t,e,a){}});
//# sourceMappingURL=app.2ea2cb65.js.map