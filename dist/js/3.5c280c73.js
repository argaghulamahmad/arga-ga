(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"10z/":function(t,n,e){"use strict";e.r(n);var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"resume-section p-3 p-lg-5 d-flex flex-column",attrs:{id:"interests"}},[e("div",{staticClass:"my-auto"},[e("h2",{staticClass:"mb-5"},[t._v("Interests")]),e("ul",{staticClass:"weight"},t._l(t.interests,function(n){return e("li",[t._v(t._s(n["title"]))])}))]),t.loading?e("aSpinner"):t._e()],1)},a=[],i=e("vDqi"),r=e.n(i),o=e("T0Gc"),c={name:"aInterests",data:function(){return{interests:[],loading:!0}},components:{aSpinner:o["a"]},beforeCreate:function(){var t=this;r.a.get("/data/interests.json").then(function(n){var e=n.data,s=[];for(var a in e){var i=e[a];i.id=a,s.push(i)}t.interests=s,t.loading=!1}).catch(function(t){console.log(t)})}},l=c,u=(e("hSDz"),e("KHd+")),f=Object(u["a"])(l,s,a,!1,null,"a1fe1756",null);n["default"]=f.exports},hSDz:function(t,n,e){"use strict";var s=e("rKbp"),a=e.n(s);a.a},rKbp:function(t,n,e){}}]);
//# sourceMappingURL=3.5c280c73.js.map