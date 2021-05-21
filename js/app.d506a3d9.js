(function(e){function t(t){for(var n,i,c=t[0],s=t[1],l=t[2],u=0,d=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);v&&v(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var s=a[i];0!==r[s]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={app:0},o=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"57da5c8d"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=n);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e);var l=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(u);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,a[1](l)}r[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/xshed/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var v=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"034f":function(e,t,a){"use strict";a("85ec")},"5ced":function(e,t,a){},"629a":function(e,t,a){"use strict";a("ce7c")},"85ec":function(e,t,a){},cccb:function(e,t,a){"use strict";a("5ced")},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("Navigation"),a("v-main",{staticClass:"mt-4 mx-2"},[a("router-view")],1),a("Dialogs")],1)},o=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app-bar",{attrs:{app:"",dense:"",elevation:"3"}},[a("div",{staticClass:"d-flex w-100",class:{container:this.$vuetify.breakpoint.lgAndUp}},[a("v-btn",{staticClass:"btn-black",attrs:{tile:"",icon:"",fab:"",exact:"",to:{name:"Home"}}},[a("v-icon",[e._v("mdi-home")])],1),a("v-spacer"),a("v-btn",{staticClass:"btn-black",attrs:{icon:"",tile:""},on:{click:e.toggleAppTheme}},[a("v-icon",[e._v("mdi-theme-light-dark")])],1),a("v-btn",{staticClass:"btn-black",attrs:{icon:"",tile:"",exact:"",to:{name:"Settings"}}},[a("v-icon",[e._v("mdi-cog")])],1)],1)])},c=[],s=a("d4ec"),l=a("bee2"),u=a("262e"),v=a("2caf"),d=a("9ab4"),m=a("1b40"),p=function(e){Object(u["a"])(a,e);var t=Object(v["a"])(a);function a(){return Object(s["a"])(this,a),t.apply(this,arguments)}return Object(l["a"])(a,[{key:"toggleAppTheme",value:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark;var e=this.$vuetify.theme.dark?"dark":"light";localStorage.setItem("xshed.app-theme",e)}}]),a}(m["e"]);p=Object(d["a"])([m["a"]],p);var f=p,b=f,h=(a("629a"),a("2877")),y=a("6544"),g=a.n(y),O=a("40dc"),k=a("8336"),j=a("132d"),D=a("2fa4"),w=Object(h["a"])(b,i,c,!1,null,"79c5b60d",null),x=w.exports;g()(w,{VAppBar:O["a"],VBtn:k["a"],VIcon:j["a"],VSpacer:D["a"]});var E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ConfirmDialog",{ref:"confirmDialog"}),a("NewEventDialog",{ref:"newEventDialog"}),a("EditEventDialog",{ref:"editEventDialog"})],1)},T=[],_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{"max-width":e.options.width},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.cancel(t)}},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-toolbar",{attrs:{dark:"",color:e.options.color,dense:"",flat:""}},[a("v-toolbar-title",{staticClass:"white--text"},[e._v(e._s(e.title))])],1),a("v-card-text",{directives:[{name:"show",rawName:"v-show",value:!!e.message,expression:"!!message"}],staticClass:"pa-4"},[e._v(e._s(e.message))]),a("v-card-actions",{staticClass:"pt-0"},[a("v-spacer"),a("v-btn",{attrs:{color:"primary darken-1",text:""},nativeOn:{click:function(t){return e.confirm(t)}}},[e._v("Yes")]),a("v-btn",{attrs:{color:"grey",text:""},nativeOn:{click:function(t){return e.cancel(t)}}},[e._v("Cancel")])],1)],1)],1)},C=[],V=(a("d3b7"),function(e){Object(u["a"])(a,e);var t=Object(v["a"])(a);function a(){var e;return Object(s["a"])(this,a),e=t.apply(this,arguments),e.dialog=!1,e.resolve=null,e.reject=null,e.message=null,e.title=null,e.options=e.getDefaultOptions(),e}return Object(l["a"])(a,[{key:"onDialogChanged",value:function(e){e||(this.options=this.getDefaultOptions())}},{key:"open",value:function(e,t,a){var n=this;return this.dialog=!0,this.title=e,this.message=t,this.options=Object.assign(this.options,a),new Promise((function(e,t){n.resolve=e,n.reject=t}))}},{key:"confirm",value:function(){this.resolve&&this.resolve(!0),this.dialog=!1}},{key:"cancel",value:function(){this.resolve&&this.resolve(!1),this.dialog=!1}},{key:"getDefaultOptions",value:function(){return{color:"primary",width:290}}}]),a}(m["e"]));Object(d["a"])([Object(m["f"])("dialog")],V.prototype,"onDialogChanged",null),V=Object(d["a"])([m["a"]],V);var S=V,I=S,M=a("b0af"),$=a("99d9"),A=a("169a"),R=a("71d9"),F=a("2a7f"),N=Object(h["a"])(I,_,C,!1,null,"e23f415c",null),P=N.exports;g()(N,{VBtn:k["a"],VCard:M["a"],VCardActions:$["a"],VCardText:$["b"],VDialog:A["a"],VSpacer:D["a"],VToolbar:R["a"],VToolbarTitle:F["a"]});var B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{fullscreen:e.fullscreenModal,"max-width":"700px"},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},[e.model?a("NewEvent",{attrs:{timestamp:e.timestamp,event:e.event,loading:e.loading,categories:e.categories,scopes:e.scopes},on:{close:e.close,save:e.onEventSave}}):e._e()],1)},U=[],H=a("1da1"),q=(a("96cf"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-card-title",[e._v("Create visit event")]),a("v-card-text",[a("v-container",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.formModel,callback:function(t){e.formModel=t},expression:"formModel"}},[a("v-row",[a("v-col",[a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[a("v-text-field",e._g(e._b({attrs:{label:"Start date","prepend-icon":"mdi-calendar",readonly:""},on:{blur:function(t){e.startDate=e.parseDate(e.startDateFormatted)}},model:{value:e.startDateFormatted,callback:function(t){e.startDateFormatted=t},expression:"startDateFormatted"}},"v-text-field",r,!1),n))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[a("v-date-picker",{attrs:{"no-title":"",scrollable:""},on:{input:function(t){e.menu=!1}},model:{value:e.startDate,callback:function(t){e.startDate=t},expression:"startDate"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.menu=!1}}},[e._v("Cancel")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.menu.save(e.startDate)}}},[e._v("OK")])],1)],1)],1),a("v-col",[a("v-switch",{attrs:{label:"All day visit"},model:{value:e.allDay,callback:function(t){e.allDay=t},expression:"allDay"}})],1)],1),e.allDay?e._e():a("v-row",[a("v-col",[a("v-autocomplete",{attrs:{items:e.visitTimeItems,"prepend-icon":"mdi-clock-time-two-outline",label:"Start time"},model:{value:e.startTime,callback:function(t){e.startTime=t},expression:"startTime"}})],1),a("v-col",[a("v-autocomplete",{attrs:{items:e.visitTimeItems,rules:[function(t){return t>e.startTime||"End time should be greater than start time"}],"prepend-icon":"mdi-clock-time-five-outline",label:"End time"},model:{value:e.endTime,callback:function(t){e.endTime=t},expression:"endTime"}})],1)],1),a("v-row",[a("v-col",[a("v-combobox",{attrs:{rules:[function(e){return!!e||"Category field is mandatory"}],items:e.categories,"prepend-icon":"mdi-tune-variant",label:"Category"},model:{value:e.category,callback:function(t){e.category=t},expression:"category"}})],1),a("v-col",[a("v-combobox",{attrs:{items:e.scopes,"prepend-icon":"mdi-tune",label:"Scope"},model:{value:e.scope,callback:function(t){e.scope=t},expression:"scope"}})],1)],1),a("v-row",[a("v-col",[a("v-textarea",{attrs:{label:"Comment",counter:"",rows:"3","auto-grow":"","prepend-icon":"mdi-message-reply-text-outline"},model:{value:e.comment,callback:function(t){e.comment=t},expression:"comment"}})],1)],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue",text:""},on:{click:e.closeDialog}},[e._v("Close")]),a("v-btn",{attrs:{color:"primary",disabled:!e.formModel,loading:e.loading},on:{click:e.save}},[e._v("Create")])],1)],1)}),L=[],J=a("3835");a("ac1f"),a("1276"),a("99af"),a("4d90"),a("fb6a"),a("5319"),a("a15b");function Y(e,t){var a=null!==e&&void 0!==e?e:new Date,n=6e4*(t||a.getTimezoneOffset());return new Date(a.getTime()-n).toISOString().slice(0,-1)}function z(e){var t=Y(e),a=t.split(".")[0].replace("T"," ").split(" "),n=Object(J["a"])(a,2),r=n[0],o=n[1],i=o.slice(0,5);return[r,i].join(" ")}function K(e){var t=Y(e);return t.slice(0,10)}a("a9e3");function W(e,t){return new Date(e.getTime()+6e4*t)}function G(e){var t={timeStyle:"short",hour12:!1};return new Intl.DateTimeFormat("en-US",t).format(e)}function Q(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:15,n=new Date,r=e.split(":"),o=Object(J["a"])(r,2),i=o[0],c=o[1];n.setHours(Number(i),Number(c),0,0);var s=[];while(G(n)<=t)s.push(G(n)),n=W(n,a);return s}a("25f0"),a("5cc6"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a"),a("72f7");function X(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)}))}var Z=function(e){Object(u["a"])(a,e);var t=Object(v["a"])(a);function a(){var e;return Object(s["a"])(this,a),e=t.apply(this,arguments),e.formModel=!1,e.menu=!1,e.startDate=e.getLocalISODate(),e.startDateFormatted=e.formatDate(e.getLocalISODate()),e.startTime="",e.endTime="",e.allDay=!1,e.category="",e.scope="",e.comment="",e}return Object(l["a"])(a,[{key:"startDateUpdate",value:function(){this.startDateFormatted=this.formatDate(this.startDate)}},{key:"form",get:function(){return this.$refs.form}},{key:"visitTimeItems",get:function(){var e="7:00",t="20:00",a=15;return Q(e,t,a)}},{key:"formatDate",value:function(e){if(!e)return"";var t=e.split("-"),a=Object(J["a"])(t,3),n=a[0],r=a[1],o=a[2];return"".concat(o,"/").concat(r,"/").concat(n)}},{key:"parseDate",value:function(e){if(!e)return"";var t=e.split("/"),a=Object(J["a"])(t,3),n=a[0],r=a[1],o=a[2];return"".concat(o,"-").concat(r.padStart(2,"0"),"-").concat(n.padStart(2,"0"))}},{key:"mounted",value:function(){var e=new Date,t=function(e){return e.toLocaleString("default",{minimumIntegerDigits:2})},a=15;if(this.timestamp){this.startDate=this.timestamp.date,this.startTime="".concat(t(this.timestamp.hour),":00");var n=W(new Date("".concat(this.startDate," ").concat(t(this.timestamp.hour),":00")),a);this.endTime="".concat(t(n.getHours()),":").concat(t(n.getMinutes()))}else{if(this.event){var r=this.event.start.split(" "),o=Object(J["a"])(r,2),i=o[0],c=o[1];this.startDate=i,this.startTime=c;var s=this.event.end.split(" "),l=Object(J["a"])(s,2),u=(l[0],l[1]);return this.endTime=u,this.category=this.event.category,this.scope=this.event.scope,void(this.comment=this.event.comment)}this.startDate=e.toISOString().substr(0,10),this.startTime="".concat(t(e.getHours()),":00");var v=W(new Date("".concat(this.startDate," ").concat(t(e.getHours()),":00")),a);this.endTime="".concat(t(v.getHours()),":").concat(t(v.getMinutes()))}}},{key:"makeDateTime",value:function(e,t){return"".concat(e," ").concat(t)}},{key:"closeDialog",value:function(){}},{key:"save",value:function(){if(this.form.validate()){var e=this.allDay?"00:00":this.startTime,t=this.allDay?"23:59":this.endTime;return{Id:X(),Start:this.makeDateTime(this.startDate,e),End:this.makeDateTime(this.startDate,t),AllDay:this.allDay,Category:this.category,Scope:this.scope,Comment:this.comment}}}},{key:"getLocalISODate",value:function(){var e=Y(new Date);return e.substr(0,10)}}]),a}(m["e"]);Object(d["a"])([Object(m["c"])({required:!1,type:Object})],Z.prototype,"timestamp",void 0),Object(d["a"])([Object(m["c"])({required:!1,type:Object})],Z.prototype,"event",void 0),Object(d["a"])([Object(m["c"])({required:!1,type:Array})],Z.prototype,"categories",void 0),Object(d["a"])([Object(m["c"])({required:!1,type:Array})],Z.prototype,"scopes",void 0),Object(d["a"])([Object(m["c"])({type:Boolean})],Z.prototype,"loading",void 0),Object(d["a"])([Object(m["c"])({type:Boolean})],Z.prototype,"isAdmin",void 0),Object(d["a"])([Object(m["f"])("startDate")],Z.prototype,"startDateUpdate",null),Object(d["a"])([Object(m["b"])("close")],Z.prototype,"closeDialog",null),Object(d["a"])([Object(m["b"])()],Z.prototype,"save",null),Z=Object(d["a"])([m["a"]],Z);var ee=Z,te=ee,ae=a("c6a6"),ne=a("62ad"),re=a("2b5d"),oe=a("a523"),ie=a("2e4b"),ce=a("4bd4"),se=a("e449"),le=a("0fd9"),ue=a("b73d"),ve=a("8654"),de=a("a844"),me=Object(h["a"])(te,q,L,!1,null,"73b922e3",null),pe=me.exports;g()(me,{VAutocomplete:ae["a"],VBtn:k["a"],VCard:M["a"],VCardActions:$["a"],VCardText:$["b"],VCardTitle:$["c"],VCol:ne["a"],VCombobox:re["a"],VContainer:oe["a"],VDatePicker:ie["a"],VForm:ce["a"],VMenu:se["a"],VRow:le["a"],VSpacer:D["a"],VSwitch:ue["a"],VTextField:ve["a"],VTextarea:de["a"]});var fe=a("2f62"),be=a("675f"),he="xshed.storage",ye=function(e){e.subscribe((function(e,t){window.localStorage.setItem(he,JSON.stringify(t))}))},ge=[ye],Oe=JSON.parse(window.localStorage.getItem(he)||"{}"),ke=function e(){Object(s["a"])(this,e),this.events=Oe.events||[]},je=a("2909"),De=(a("d81d"),a("6062"),a("3ca3"),a("ddb0"),a("4de4"),function(e){Object(u["a"])(a,e);var t=Object(v["a"])(a);function a(){return Object(s["a"])(this,a),t.apply(this,arguments)}return Object(l["a"])(a,[{key:"events",get:function(){return this.state.events.map(we)}},{key:"categories",get:function(){var e=this.state.events.reduce((function(e,t){return e.add(t.Category)}),new Set);return Object(je["a"])(e.values()).filter(Boolean)}},{key:"scopes",get:function(){var e=this.state.events.reduce((function(e,t){return e.add(t.Scope||"")}),new Set);return Object(je["a"])(e.values()).filter(Boolean)}}]),a}(be["b"])),we=function(e){var t=e.AllDay?K(new Date(e.Start)):z(new Date(e.Start)),a=e.AllDay?K(new Date(e.End)):z(new Date(e.End));return{id:e.Id,name:e.Scope?"".concat(e.Category,":").concat(e.Scope):e.Category,start:t,end:a,allDay:!!e.AllDay,category:e.Category,scope:e.Scope,comment:e.Comment}},xe=(a("c740"),a("a434"),function(e){Object(u["a"])(a,e);var t=Object(v["a"])(a);function a(){return Object(s["a"])(this,a),t.apply(this,arguments)}return Object(l["a"])(a,[{key:"setEvent",value:function(e){var t=this.state.events,a=t.findIndex((function(t){return t.Id===e.Id}));-1!==a?n["a"].set(t,a,e):t.push(e)}},{key:"removeEvent",value:function(e){var t=this.state.events,a=t.findIndex((function(t){return t.Id===e}));-1!==a&&t.splice(a,1)}}]),a}(be["d"])),Ee=function(e){Object(u["a"])(a,e);var t=Object(v["a"])(a);function a(){return Object(s["a"])(this,a),t.apply(this,arguments)}return Object(l["a"])(a,[{key:"addEvent",value:function(){var e=Object(H["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.commit("setEvent",t);case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"updateEvent",value:function(){var e=Object(H["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.commit("setEvent",t);case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"deleteEvent",value:function(){var e=Object(H["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.commit("removeEvent",t.id);case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}]),a}(be["a"]),Te={},_e=new be["c"]({state:ke,getters:De,mutations:xe,actions:Ee,modules:Te}),Ce=_e;n["a"].use(fe["b"]);var Ve=Object(be["e"])(Ce,{plugins:ge}),Se=Ce.context(Ve),Ie=new fe["b"].Store({state:{},mutations:{},actions:{},modules:{}}),Me=function(e){Object(u["a"])(a,e);var t=Object(v["a"])(a);function a(){var e;return Object(s["a"])(this,a),e=t.apply(this,arguments),e.model=!1,e.timestamp=null,e.event=null,e.loading=!1,e}return Object(l["a"])(a,[{key:"fullscreenModal",get:function(){return this.$vuetify.breakpoint.smAndDown}},{key:"categories",get:function(){return Se.getters.categories}},{key:"scopes",get:function(){return Se.getters.scopes}},{key:"open",value:function(e){e&&(e.start?this.event=e:this.timestamp=e),this.model=!0}},{key:"close",value:function(){this.model=!1,this.timestamp=void 0}},{key:"onEventSave",value:function(){var e=Object(H["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return this.loading=!0,e.prev=3,e.next=6,Se.actions.addEvent(t);case 6:this.model=!1,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](3),console.error(e.t0);case 12:return e.prev=12,this.loading=!1,e.finish(12);case 15:case"end":return e.stop()}}),e,this,[[3,9,12,15]])})));function t(t){return e.apply(this,arguments)}return t}()}]),a}(m["e"]);Me=Object(d["a"])([Object(m["a"])({components:{NewEvent:pe}})],Me);var $e=Me,Ae=$e,Re=Object(h["a"])(Ae,B,U,!1,null,"e34ba0a4",null),Fe=Re.exports;g()(Re,{VDialog:A["a"]});var Ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{fullscreen:e.fullscreenModal,"max-width":"700px"},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},[e.model&&e.event?a("EditEvent",{attrs:{event:e.event,loading:e.loading,categories:e.categories,scopes:e.scopes},on:{save:e.onEventUpdate}}):e._e()],1)},Pe=[],Be=a("5530"),Ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-card-title",[e._v("Edit event")]),a("v-card-text",[a("v-container",[a("v-form",{ref:"form",model:{value:e.formModel,callback:function(t){e.formModel=t},expression:"formModel"}},[a("v-row",[a("v-col",[a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[a("v-text-field",e._g(e._b({attrs:{label:"Start date","prepend-icon":"mdi-calendar",readonly:""},on:{blur:function(t){e.startDate=e.parseDate(e.startDateFormatted)}},model:{value:e.startDateFormatted,callback:function(t){e.startDateFormatted=t},expression:"startDateFormatted"}},"v-text-field",r,!1),n))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[a("v-date-picker",{attrs:{"no-title":"",scrollable:""},on:{input:function(t){e.menu=!1}},model:{value:e.startDate,callback:function(t){e.startDate=t},expression:"startDate"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.menu=!1}}},[e._v("Cancel")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.menu.save(e.startDate)}}},[e._v("OK")])],1)],1)],1),a("v-col",[a("v-switch",{attrs:{label:"All day visit"},model:{value:e.allDay,callback:function(t){e.allDay=t},expression:"allDay"}})],1)],1),e.allDay?e._e():a("v-row",[a("v-col",[a("v-autocomplete",{attrs:{items:e.visitTimeItems,"prepend-icon":"mdi-clock-time-two-outline",label:"Start time"},model:{value:e.startTime,callback:function(t){e.startTime=t},expression:"startTime"}})],1),a("v-col",[a("v-autocomplete",{attrs:{items:e.visitTimeItems,rules:[function(t){return t>e.startTime||"End time should be greater than start time"}],"prepend-icon":"mdi-clock-time-five-outline",label:"End time"},model:{value:e.endTime,callback:function(t){e.endTime=t},expression:"endTime"}})],1)],1),a("v-row",[a("v-col",[a("v-combobox",{attrs:{rules:[function(e){return!!e||"Category field is mandatory"}],items:e.categories,"prepend-icon":"mdi-tune-variant",label:"Category"},model:{value:e.category,callback:function(t){e.category=t},expression:"category"}})],1),a("v-col",[a("v-combobox",{attrs:{items:e.scopes,"prepend-icon":"mdi-tune",label:"Scope"},model:{value:e.scope,callback:function(t){e.scope=t},expression:"scope"}})],1)],1),a("v-row",[a("v-col",[a("v-textarea",{attrs:{label:"Comment",counter:"",rows:"3","auto-grow":"","prepend-icon":"mdi-message-reply-text-outline"},model:{value:e.comment,callback:function(t){e.comment=t},expression:"comment"}})],1)],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue",text:""},on:{click:e.closeDialog}},[e._v("Close")]),a("v-btn",{attrs:{color:"primary",disabled:!e.formModel,loading:e.loading},on:{click:e.save}},[e._v("Submit")])],1)],1)},He=[],qe=function(e){Object(u["a"])(a,e);var t=Object(v["a"])(a);function a(){var e;return Object(s["a"])(this,a),e=t.apply(this,arguments),e.formModel=!1,e.menu=!1,e.startDate=e.getDateString(e.event.start),e.startDateFormatted=e.formatDate(e.startDate),e.startTime=e.getTimeString(e.event.start),e.endTime=e.getTimeString(e.event.end||""),e.allDay=e.event.allDay,e.category=e.event.category||"",e.scope=e.event.scope||"",e.comment=e.event.comment||"",e}return Object(l["a"])(a,[{key:"startDateUpdate",value:function(){this.startDateFormatted=this.formatDate(this.startDate)}},{key:"form",get:function(){return this.$refs.form}},{key:"visitTimeItems",get:function(){var e="7:00",t="20:00",a=15;return Q(e,t,a)}},{key:"formatDate",value:function(e){if(!e)return"";var t=e.split("-"),a=Object(J["a"])(t,3),n=a[0],r=a[1],o=a[2];return"".concat(o,"/").concat(r,"/").concat(n)}},{key:"parseDate",value:function(e){if(!e)return"";var t=e.split("/"),a=Object(J["a"])(t,3),n=a[0],r=a[1],o=a[2];return"".concat(o,"-").concat(r.padStart(2,"0"),"-").concat(n.padStart(2,"0"))}},{key:"getDateString",value:function(e){return e.substr(0,10)}},{key:"getTimeString",value:function(e){return e.substr(11,5)}},{key:"makeDateTime",value:function(e,t){return"".concat(e," ").concat(t)}},{key:"closeDialog",value:function(){}},{key:"save",value:function(){if(this.form.validate()){var e=this.allDay?"00:00":this.startTime,t=this.allDay?"23:59":this.endTime;return{Id:this.event.id,Start:this.makeDateTime(this.startDate,e),End:this.makeDateTime(this.startDate,t),AllDay:this.allDay,Category:this.category,Scope:this.scope,Comment:this.comment}}}}]),a}(m["e"]);Object(d["a"])([Object(m["c"])({required:!1,type:Object})],qe.prototype,"event",void 0),Object(d["a"])([Object(m["c"])({required:!1,type:Array})],qe.prototype,"categories",void 0),Object(d["a"])([Object(m["c"])({required:!1,type:Array})],qe.prototype,"scopes",void 0),Object(d["a"])([Object(m["c"])({type:Boolean})],qe.prototype,"loading",void 0),Object(d["a"])([Object(m["c"])({type:Boolean})],qe.prototype,"isAdmin",void 0),Object(d["a"])([Object(m["f"])("startDate")],qe.prototype,"startDateUpdate",null),Object(d["a"])([Object(m["b"])("close")],qe.prototype,"closeDialog",null),Object(d["a"])([Object(m["b"])()],qe.prototype,"save",null),qe=Object(d["a"])([m["a"]],qe);var Le=qe,Je=Le,Ye=Object(h["a"])(Je,Ue,He,!1,null,"438252ff",null),ze=Ye.exports;g()(Ye,{VAutocomplete:ae["a"],VBtn:k["a"],VCard:M["a"],VCardActions:$["a"],VCardText:$["b"],VCardTitle:$["c"],VCol:ne["a"],VCombobox:re["a"],VContainer:oe["a"],VDatePicker:ie["a"],VForm:ce["a"],VMenu:se["a"],VRow:le["a"],VSpacer:D["a"],VSwitch:ue["a"],VTextField:ve["a"],VTextarea:de["a"]});var Ke=function(e){Object(u["a"])(a,e);var t=Object(v["a"])(a);function a(){var e;return Object(s["a"])(this,a),e=t.apply(this,arguments),e.model=!1,e.event=null,e.loading=!1,e}return Object(l["a"])(a,[{key:"fullscreenModal",get:function(){return this.$vuetify.breakpoint.smAndDown}},{key:"categories",get:function(){return Se.getters.categories}},{key:"scopes",get:function(){return Se.getters.scopes}},{key:"open",value:function(e){this.event=Object(Be["a"])({},e),this.model=!0}},{key:"close",value:function(){this.model=!1,this.event=null}},{key:"onEventUpdate",value:function(){var e=Object(H["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return this.loading=!0,e.prev=3,e.next=6,Se.actions.updateEvent(t);case 6:this.model=!1,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](3),console.error(e.t0);case 12:return e.prev=12,this.loading=!1,e.finish(12);case 15:case"end":return e.stop()}}),e,this,[[3,9,12,15]])})));function t(t){return e.apply(this,arguments)}return t}()}]),a}(m["e"]);Ke=Object(d["a"])([Object(m["a"])({components:{EditEvent:ze}})],Ke);var We=Ke,Ge=We,Qe=Object(h["a"])(Ge,Ne,Pe,!1,null,"bd42e608",null),Xe=Qe.exports;g()(Qe,{VDialog:A["a"]});var Ze=function(e){Object(u["a"])(a,e);var t=Object(v["a"])(a);function a(){return Object(s["a"])(this,a),t.apply(this,arguments)}return Object(l["a"])(a,[{key:"mounted",value:function(){this.$dialogs.confirm=this.$refs.confirmDialog,this.$dialogs.newEventDialog=this.$refs.newEventDialog,this.$dialogs.editEventDialog=this.$refs.editEventDialog}}]),a}(m["e"]);Ze=Object(d["a"])([Object(m["a"])({components:{ConfirmDialog:P,NewEventDialog:Fe,EditEventDialog:Xe}})],Ze);var et=Ze,tt=et,at=Object(h["a"])(tt,E,T,!1,null,"4d079e67",null),nt=at.exports,rt=n["a"].extend({name:"App",components:{Dialogs:nt,Navigation:x},data:function(){return{}}}),ot=rt,it=(a("034f"),a("7496")),ct=a("f6c4"),st=Object(h["a"])(ot,r,o,!1,null,null,null),lt=st.exports;g()(st,{VApp:it["a"],VMain:ct["a"]});var ut=a("8c4f"),vt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home",class:{container:this.$vuetify.breakpoint.lgAndUp}},[a("Calendar")],1)},dt=[],mt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("CalendarRibbon",{attrs:{date:e.calendarTitle},on:{"to-today":e.toToday,"next-timestamp":e.nextTimestamp,"prev-timestamp":e.prevTimestamp,"open-dialog":function(t){return e.openNewEventDialog()}},model:{value:e.view,callback:function(t){e.view=t},expression:"view"}}),a("v-calendar",{ref:"calendar",style:{"user-select":[this.dragEvent?"none":""]},attrs:{type:e.view,"first-time":"7:00","interval-count":14,weekdays:e.weekdays,events:e.events,locale:"en-US"},on:{"click:interval":e.openNewEventDialog,"click:event":e.showEvent,"click:date":e.setViewDay,"mousedown:event":e.mouseDownExistEvent,"mousedown:time":e.createDraftEvent,"mousemove:time":e.updateDraftEvent,"mouseup:time":e.endDraftEvent},nativeOn:{mouseleave:function(t){return e.cancelDrag(t)}},scopedSlots:e._u([{key:"day-body",fn:function(t){var n=t.date,r=t.week;return[a("div",{staticClass:"v-current-time",class:{first:n===r[0].date},style:{top:e.nowY}})]}}]),model:{value:e.currentDate,callback:function(t){e.currentDate=t},expression:"currentDate"}}),a("v-menu",{attrs:{activator:e.selectedElement,"close-on-content-click":!1,"max-width":"500px","offset-x":""},model:{value:e.selectedOpen,callback:function(t){e.selectedOpen=t},expression:"selectedOpen"}},[e.selectedEvent?[a("VisitEventMenuPreview",{attrs:{visit:e.selectedEvent},on:{close:e.closeSelectedEventMenu}})]:e._e()],2)],1)},pt=[],ft=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"calendar-ribbon"},[a("v-sheet",{attrs:{height:"64"}},[a("v-toolbar",{attrs:{flat:""}},[a("v-tooltip",{attrs:{bottom:"","open-delay":"900"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"mr-2",attrs:{outlined:"",large:"",color:"grey darken-2"},on:{click:e.openDialog}},"v-btn",r,!1),n),[a("v-icon",[e._v("mdi-calendar-plus")]),a("span",{staticClass:"hidden-sm-and-down ms-1"},[e._v("Add event")])],1)]}}])},[a("span",[e._v("Add office visit")])]),a("v-tooltip",{attrs:{bottom:"","open-delay":"900"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,r=t.attrs;return[a("v-btn",e._g(e._b({attrs:{outlined:"",large:"",color:"grey darken-2"},on:{click:e.toToday}},"v-btn",r,!1),n),[a("v-icon",[e._v("mdi-calendar-cursor")]),a("span",{staticClass:"hidden-md-and-down ms-1"},[e._v("Show today")])],1)]}}])},[a("span",[e._v("Move to today date")])]),a("v-spacer"),a("v-card",{staticClass:"d-flex align-center mx-4 text-truncate",attrs:{outlined:""}},[a("v-btn",{staticClass:"px-0",attrs:{text:"",large:"",color:"grey darken-2","min-width":"40"},on:{click:e.prevTimestamp}},[a("v-icon",[e._v("mdi-chevron-left")])],1),e.date?a("v-toolbar-title",{staticClass:"mx-4"},[e._v(" "+e._s(e.date)+" ")]):e._e(),a("v-btn",{staticClass:"px-0",attrs:{text:"",large:"",color:"grey darken-2","min-width":"40"},on:{click:e.nextTimestamp}},[a("v-icon",[e._v("mdi-chevron-right")])],1)],1),a("v-spacer"),a("CalendarViewSwitcher",{model:{value:e.view,callback:function(t){e.view=t},expression:"view"}})],1)],1)],1)},bt=[],ht=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-btn-toggle",{staticClass:"calendar-view-switcher",attrs:{borderless:"",mandatory:""},on:{change:e.storeCalendarType},model:{value:e.view,callback:function(t){e.view=t},expression:"view"}},[a("v-btn",{attrs:{value:"day",text:"",color:"grey darken-2"}},[a("span",{staticClass:"hidden-md-and-down me-1"},[e._v("Day")]),a("v-icon",[e._v("mdi-calendar-today")])],1),a("v-btn",{attrs:{value:"week",text:"",color:"grey darken-2"}},[a("span",{staticClass:"hidden-md-and-down me-1"},[e._v("Week")]),a("v-icon",[e._v("mdi-calendar-range")])],1),a("v-btn",{attrs:{value:"month",text:"",color:"grey darken-2"}},[a("span",{staticClass:"hidden-md-and-down me-1"},[e._v("Month")]),a("v-icon",[e._v("mdi-calendar-month")])],1)],1)},yt=[],gt=function(e){Object(u["a"])(a,e);var t=Object(v["a"])(a);function a(){return Object(s["a"])(this,a),t.apply(this,arguments)}return Object(l["a"])(a,[{key:"storeCalendarType",value:function(e){localStorage.setItem("xshed.calendar-view",e)}}]),a}(m["e"]);Object(d["a"])([Object(m["d"])()],gt.prototype,"view",void 0),gt=Object(d["a"])([m["a"]],gt);var Ot=gt,kt=Ot,jt=a("a609"),Dt=Object(h["a"])(kt,ht,yt,!1,null,"108bb02c",null),wt=Dt.exports;g()(Dt,{VBtn:k["a"],VBtnToggle:jt["a"],VIcon:j["a"]});var xt=function(e){Object(u["a"])(a,e);var t=Object(v["a"])(a);function a(){return Object(s["a"])(this,a),t.apply(this,arguments)}return Object(l["a"])(a,[{key:"nextTimestamp",value:function(){}},{key:"prevTimestamp",value:function(){}},{key:"toToday",value:function(){}},{key:"openDialog",value:function(){}}]),a}(m["e"]);Object(d["a"])([Object(m["d"])()],xt.prototype,"view",void 0),Object(d["a"])([Object(m["c"])()],xt.prototype,"date",void 0),Object(d["a"])([Object(m["b"])()],xt.prototype,"nextTimestamp",null),Object(d["a"])([Object(m["b"])()],xt.prototype,"prevTimestamp",null),Object(d["a"])([Object(m["b"])()],xt.prototype,"toToday",null),Object(d["a"])([Object(m["b"])()],xt.prototype,"openDialog",null),xt=Object(d["a"])([Object(m["a"])({components:{CalendarViewSwitcher:wt}})],xt);var Et=xt,Tt=Et,_t=a("8dd9"),Ct=a("3a2f"),Vt=Object(h["a"])(Tt,ft,bt,!1,null,"5f9b495f",null),St=Vt.exports;g()(Vt,{VBtn:k["a"],VCard:M["a"],VIcon:j["a"],VSheet:_t["a"],VSpacer:D["a"],VToolbar:R["a"],VToolbarTitle:F["a"],VTooltip:Ct["a"]});var It=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{"min-width":"350px",flat:""}},[a("v-toolbar",{attrs:{color:e.getEventColor(e.visit),dark:""}},[a("v-toolbar-title",{staticClass:"ml-3",domProps:{innerHTML:e._s(e.visit.name)}}),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:e.close}},[a("v-icon",[e._v("mdi-window-close")])],1)],1),a("v-card-text",[a("div",{staticClass:"mb-2"},[a("h3",[e._v("Comment")]),a("div",{staticClass:"subtitle-1"},[e._v(" "+e._s(e.getComment)+" ")])])]),a("v-card-actions",[a("v-btn",{attrs:{elevation:"0",color:"error"},on:{click:function(t){return e.deleteVisitEvent(e.visit)}}},[a("v-icon",{staticClass:"mr-2"},[e._v("mdi-delete")]),e._v(" Delete ")],1),a("v-btn",{attrs:{elevation:"0",color:"primary"},on:{click:function(t){return e.openEditDialog(e.visit)}}},[a("v-icon",{staticClass:"mr-2"},[e._v("mdi-pencil")]),e._v(" Edit ")],1)],1)],1)},Mt=[],$t=function(e){Object(u["a"])(a,e);var t=Object(v["a"])(a);function a(){return Object(s["a"])(this,a),t.apply(this,arguments)}return Object(l["a"])(a,[{key:"getComment",get:function(){return this.visit.comment||"The event comment was not provided"}},{key:"getEventColor",value:function(e){return"#000"}},{key:"openEditDialog",value:function(e){this.$dialogs.editEventDialog.open(e)}},{key:"deleteVisitEvent",value:function(){var e=Object(H["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.id){e.next=8;break}return e.next=3,this.$dialogs.confirm.open("Delete","Are you sure you want to delete this visit?",{color:"error"});case 3:if(a=e.sent,!a){e.next=8;break}return e.next=7,Se.actions.deleteEvent(t);case 7:this.close();case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"close",value:function(){}}]),a}(m["e"]);Object(d["a"])([Object(m["c"])({type:Object,required:!0})],$t.prototype,"visit",void 0),Object(d["a"])([Object(m["b"])()],$t.prototype,"close",null),$t=Object(d["a"])([m["a"]],$t);var At=$t,Rt=At,Ft=Object(h["a"])(Rt,It,Mt,!1,null,"4ec44d56",null),Nt=Ft.exports;function Pt(e,t){var a={down:!1,roundTo:60},n=Object(Be["a"])(Object(Be["a"])({},a),t),r=n.down,o=n.roundTo,i=60*o*1e3;return r?e-e%i:e+(i-e%i)}function Bt(e){return new Date(e.year,e.month-1,e.day,e.hour,e.minute).getTime()}g()(Ft,{VBtn:k["a"],VCard:M["a"],VCardActions:$["a"],VCardText:$["b"],VIcon:j["a"],VSpacer:D["a"],VToolbar:R["a"],VToolbarTitle:F["a"]});var Ut=function(e){Object(u["a"])(a,e);var t=Object(v["a"])(a);function a(){var e;return Object(s["a"])(this,a),e=t.apply(this,arguments),e.view="day",e.currentDate="",e.calendarReady=!1,e.weekdays=[1,2,3,4,5,6,0],e.roundMinutes=15,e.selectedEvent=null,e.selectedElement=null,e.dragEvent=!1,e.draftEvent=null,e.selectedOpen=!1,e}return Object(l["a"])(a,[{key:"calendarInstance",get:function(){return this.$refs.calendar}},{key:"calendarTitle",get:function(){if(!this.calendarReady)return"";var e=this.calendarInstance.title;if("day"===this.view){var t=this.currentDate?Number(this.currentDate.split("-").pop()):(new Date).getDate();return"".concat(t," ").concat(e)}if("week"===this.view){var a=this.calendarInstance.lastStart,n=this.calendarInstance.lastEnd,r=a.day,o=n.day,i=new Date(a.date).toLocaleString("en-US",{month:"short"}),c=new Date(n.date).toLocaleString("en-US",{month:"short"});return"".concat(r," ").concat(i===c?"":i," ").concat(a.year===n.year?"":a.year," - ").concat(o," ").concat(c," ").concat(n.year)}return e}},{key:"nowY",get:function(){return this.calendarReady?this.calendarInstance.timeToY(this.calendarInstance.times.now)+"px":"-10px"}},{key:"events",get:function(){var e=Se.getters.events;return"month"===this.view?e:this.dragEvent?[].concat(Object(je["a"])(e),[this.draftEvent]):e}},{key:"mounted",value:function(){this.calendarInstance.checkChange(),this.calendarReady=!0}},{key:"toToday",value:function(){this.currentDate=""}},{key:"setViewDay",value:function(e){var t=e.date;this.currentDate=t,this.view="day"}},{key:"nextTimestamp",value:function(){this.calendarInstance.next()}},{key:"prevTimestamp",value:function(){this.calendarInstance.prev()}},{key:"showEvent",value:function(e){var t=this,a=e.nativeEvent,n=e.event,r=function(){t.selectedEvent=n,t.selectedElement=a.target,setTimeout((function(){t.selectedOpen=!0}),10)};this.selectedOpen?(this.selectedOpen=!1,setTimeout(r,10)):r()}},{key:"mouseDownExistEvent",value:function(e){var t=e.nativeEvent;t.stopPropagation()}},{key:"createDraftEvent",value:function(e){if(!this.dragEvent&&null===this.draftEvent){var t=Bt(e),a=new Date(Pt(t,{roundTo:this.roundMinutes}));this.dragEvent=!0,this.draftEvent={name:"#Draft event",start:z(a)},this.updateDraftEvent(e)}}},{key:"updateDraftEvent",value:function(e){if(this.dragEvent&&null!==this.draftEvent){var t=Bt(e),a=new Date(Pt(t,{roundTo:this.roundMinutes})),n=new Date(this.draftEvent.start);n.setHours(a.getHours()),n.setMinutes(a.getMinutes()),this.draftEvent=Object(Be["a"])(Object(Be["a"])({},this.draftEvent),{},{end:z(n)})}}},{key:"endDraftEvent",value:function(){this.dragEvent=!1,this.draftEvent&&(this.openNewEventDialog(this.draftEvent),this.draftEvent=null)}},{key:"cancelDrag",value:function(){this.dragEvent=!1,this.draftEvent=null}},{key:"openNewEventDialog",value:function(e){this.$dialogs.newEventDialog.open(e)}},{key:"closeSelectedEventMenu",value:function(){this.selectedOpen=!1}}]),a}(m["e"]);Ut=Object(d["a"])([Object(m["a"])({components:{CalendarRibbon:St,VisitEventMenuPreview:Nt}})],Ut);var Ht=Ut,qt=Ht,Lt=a("a4f6"),Jt=Object(h["a"])(qt,mt,pt,!1,null,"47dab56d",null),Yt=Jt.exports;g()(Jt,{VCalendar:Lt["a"],VMenu:se["a"]});var zt=function(e){Object(u["a"])(a,e);var t=Object(v["a"])(a);function a(){return Object(s["a"])(this,a),t.apply(this,arguments)}return a}(m["e"]);zt=Object(d["a"])([Object(m["a"])({components:{Calendar:Yt}})],zt);var Kt=zt,Wt=Kt,Gt=(a("cccb"),Object(h["a"])(Wt,vt,dt,!1,null,null,null)),Qt=Gt.exports;n["a"].use(ut["a"]);var Xt=[{path:"/",name:"Home",component:Qt},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],Zt=new ut["a"]({mode:"history",base:"/xshed/",routes:Xt}),ea=Zt,ta=a("f309");n["a"].use(ta["a"]);var aa=new ta["a"]({});n["a"].prototype.$dialogs={},n["a"].config.productionTip=!1,new n["a"]({router:ea,store:Ie,vuetify:aa,render:function(e){return e(lt)}}).$mount("#app")},ce7c:function(e,t,a){}});
//# sourceMappingURL=app.d506a3d9.js.map