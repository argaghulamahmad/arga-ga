(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[0],{ptzY:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-navbar",{attrs:{toggleable:"md",type:"light",variant:"faded"}},[e.user?a("b-navbar-brand",{staticClass:"mb-0",attrs:{tag:"h1"}},[e._v("Contact Me")]):e._e(),a("b-navbar-nav",{staticClass:"ml-auto"},[e.user?a("div",[a("b-button",{attrs:{variant:"danger"},on:{click:e.signOut}},[e._v("Sign Out")])],1):e._e()])],1),a("div",{staticClass:"div--wrapper"},[e.user||e.loading?e._e():a("b-jumbotron",{attrs:{"bg-variant":"white"}},[a("template",{slot:"header"},[e._v("\n        Contact Me\n      ")]),a("template",{slot:"lead"},[e._v("\n        Let me know you, please log in using your google account. To see my personal details such as phone number and\n        email, I need to know who you are.\n      ")]),a("hr",{staticClass:"my-4"}),a("b-button",{staticClass:"mx-auto my-2 my-sm-0",attrs:{size:"sm",variant:"primary",type:"submit"},on:{click:e.signInWithGoogle}},[a("i",{staticClass:"fa fa-google"}),e._v(" Sign in with Google\n      ")])],2)],1),e.user?a("div",[a("p",{staticClass:"p--title"},[e._v("Hello, "+e._s(this.getUserName())+". It was pleasure to meet you.")]),a("aContactMe")],1):e._e(),e.loading?a("aSpinner"):e._e()],1)},n=[],r=a("tmQd"),o=a("4ah+"),l=a("xSrL"),i=a("TQCW"),u=a("THR5"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"weight"},[a("bCard",{attrs:{"no-body":""}},[a("b-tabs",{attrs:{"nav-class":"mx-auto",card:""}},[a("b-tab",{attrs:{title:"Calendly",active:""}},[a("br"),a("aCalendly")],1),a("b-tab",{attrs:{title:"Leave a message"}},[a("br"),a("aSendMessage")],1),a("b-tab",{attrs:{title:"Contact"}},[a("br"),a("aContact")],1)],1)],1),a("br")],1)])},m=[],b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-embed",{staticStyle:{width:"100%",height:"100%"},attrs:{type:"iframe",src:"https://calendly.com/argaghulamahmad",aspect:"16by9",tag:"div",allowfullscreen:""}})],1)},d=[],h=a("zDe6"),p={name:"aCalendly",components:{bEmbed:h["a"]}},f=p,g=a("KHd+"),v=Object(g["a"])(f,b,d,!1,null,null,null),C=v.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sendMessageContainer p-3 p-lg-5 d-flex flex-column my-auto"},[a("h2",{staticClass:"mb-5"},[e._v("Leave a message")]),e.show?a("b-form",{on:{submit:e.onSubmit,reset:e.onReset}},[a("b-form-group",{attrs:{id:"formInputGroup1",label:"Email address:","label-for":"formInput1",description:"We'll never share your email with anyone else."}},[a("b-form-input",{attrs:{id:"formInput1",type:"email",value:this.user.userEmail,required:"",placeholder:"Enter email",disabled:""}})],1),a("b-form-group",{attrs:{id:"formInputGroup2",label:"Your Name:","label-for":"formInput2"}},[a("b-form-input",{attrs:{id:"formInput2",type:"text",value:this.user.userName,required:"",placeholder:"Enter name",disabled:""}})],1),a("b-form-group",{attrs:{id:"formInputGroup3",label:"Is Important:","label-for":"formInput3"}},[a("b-form-select",{attrs:{id:"formInput3",options:e.level,required:""},model:{value:e.form.level,callback:function(t){e.$set(e.form,"level",t)},expression:"form.level"}})],1),a("b-form-group",{attrs:{id:"formInputGroup4",label:"Message:","label-for":"formInput4"}},[a("b-form-textarea",{attrs:{id:"textarea1",placeholder:"Enter something",rows:3,"max-rows":6},model:{value:e.form.message,callback:function(t){e.$set(e.form,"message",t)},expression:"form.message"}})],1),a("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")]),a("span",{staticStyle:{padding:"0 4px 0 4px"}}),a("b-button",{attrs:{type:"reset",variant:"danger"}},[e._v("Reset")])],1):e._e(),a("br"),a("b-modal",{ref:"successModal",attrs:{"ok-only":!0,id:"modal-center",centered:"",title:"Message has been sent!"}},[a("p",{staticClass:"my-4"},[e._v("Your message has been sent!")])])],1)},_=[],U=a("BZbT"),w=a("QhaI"),x=a("0jn2"),E=a("/zX4"),I=a("Eau4"),N=a("vbH8"),O=a("DEDl"),M=a("Oluq"),j=a("vDqi"),S=a.n(j),k=a("L2JU"),G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},T={name:"aSendMessage",components:{bForm:U["a"],bFormInput:w["a"],bFormGroup:x["a"],bFormSelect:E["a"],bFormCheckboxGroup:I["a"],bFormCheckbox:N["a"],bButton:r["a"],bFormTextarea:O["a"],bModal:M["a"]},data:function(){return{user:{userName:"",userEmail:""},form:{message:"",level:null},level:[{text:"Select One",value:null},"Critical","Important","Normal","Unimportant"],show:!0}},methods:G({},Object(k["c"])(["getUserName","getUserEmail","getUserPhotoUrl"]),{onReset:function(e){var t=this;e.preventDefault(),this.form.level=null,this.form.message="",this.show=!1,this.$nextTick(function(){t.show=!0})},showModal:function(){this.$refs.successModal.show()},hideModal:function(){this.$refs.successModal.hide()},onSubmit:function(e){e.preventDefault();var t=this;S.a.post("/messages.json",{userName:this.userName,userEmail:this.userEmail,level:this.form.level,message:this.form.message}).then(function(e){t.showModal()}).catch(function(e){console.log(e)})}}),created:function(){this.user.userName=this.getUserName(),this.user.userEmail=this.getUserEmail()}},$=T,L=Object(g["a"])($,y,_,!1,null,null,null),P=L.exports,W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"contactContainer p-3 p-lg-5 d-flex flex-column my-auto"},[a("h2",{staticClass:"mb-5"},[e._v("Contact")]),a("b-list-group",e._l(e.contacts,function(t,s){return a("b-list-group-item",{key:s},[a("i",{class:e.iconClass(t.icon)}),e._v("\n      "+e._s(t.content)+"\n    ")])}))],1)},D=[],F=a("Wl7S"),q=a("WsjD"),R={name:"aContact",components:{bListGroup:F["a"],bListGroupItem:q["a"]},methods:{iconClass:function(e){return"fa fa-"+e}},data:function(){return{contacts:[]}},beforeCreate:function(){var e=this;S.a.get("/data/contact-me/contact.json").then(function(t){var a=t.data,s=[];for(var n in a){var r=a[n];r.id=n,s.push(r)}e.contacts=s}).catch(function(e){console.log(e)})}},z=R,B=Object(g["a"])(z,W,D,!1,null,null,null),H=B.exports,J=a("ohI8"),Q=a("QLus"),A=a("noT/"),Y={name:"aContactMe",components:{aCalendly:C,aSendMessage:P,aContact:H,bTab:J["a"],bTabs:Q["a"],bCard:A["a"]},props:{userName:"",userEmail:""}},K=Y,X=Object(g["a"])(K,c,m,!1,null,null,null),Z=X.exports,V=a("T0Gc"),ee=a("Wcq6"),te=a.n(ee),ae=(a("6nsN"),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}),se={name:"aAuth",components:{aContactMe:Z,aSpinner:V["a"],bNavbar:o["a"],bNavbarBrand:l["a"],bNavbarNav:i["a"],bButton:r["a"],bJumbotron:u["a"]},beforeCreate:function(){var e=this;te.a.auth().onAuthStateChanged(function(t){t&&(e.user=t,e.actionUserName(e.user.displayName),e.actionUserEmail(e.user.email),e.actionUserPhotoUrl(e.user.photoURL)),e.loading=!1})},data:function(){return{loading:!0,user:null}},methods:ae({},Object(k["b"])(["actionUserName","actionUserEmail","actionUserPhotoUrl"]),Object(k["c"])(["getUserName","getUserEmail","getUserPhotoUrl"]),{signInWithGoogle:function(){var e=this,t=new te.a.auth.GoogleAuthProvider;te.a.auth().signInWithRedirect(t).then(function(t){e.user=t.user}).catch(function(e){return console.log(e)})},signOut:function(){var e=this;te.a.auth().signOut().then(function(){e.user=null,e.actionUserName(""),e.actionUserEmail(""),e.actionUserPhotoUrl(""),console.log(e.getUserName(),e.getUserEmail(),e.getUserPhotoUrl())}).catch(function(e){return console.log(e)})}})},ne=se,re=Object(g["a"])(ne,s,n,!1,null,null,null);t["default"]=re.exports}}]);
//# sourceMappingURL=0.6e663791.js.map