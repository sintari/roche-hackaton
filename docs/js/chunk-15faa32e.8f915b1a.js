(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15faa32e"],{"5a80":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-content",[s("v-card",[s("v-card-text",[s("v-container",[s("v-layout",[s("v-flex",{attrs:{sm6:""}},[s("p",{staticClass:"display-1 modal-title"},[e._v("Wskazanie: "),s("span",{staticClass:"font-italic"},[e._v(e._s(e.$route.params.selected))])])]),s("v-flex",{staticClass:"text-sm-right",attrs:{sm6:""}},[s("v-btn",{staticClass:"white--text submit-button",attrs:{round:"",color:"blue darken-1"},on:{click:function(t){e.$router.push({path:"search"})}}},[s("v-icon",{attrs:{dark:"",left:""}},[e._v("arrow_back")]),e._v("\n\t\t\t\t\t\t\t\tWróć\n\t\t\t\t\t\t\t")],1)],1)],1)],1),s("v-container",{attrs:{"fill-height":"","grid-list-md":""}},[s("v-layout",{attrs:{"justify-center":"",row:"","justify-space-between":"","align-top":"","align-content-center":""}},[s("v-flex",{attrs:{sm4:""}},[e._l(e.steps,function(t,a){return s("div",{key:a},[s("v-select",{attrs:{outline:"",items:t.options.filter(function(t){return null===t.parentValues||t.parentValues.indexOf(e.selectedValues[a-1])>=0}),label:t.label,"no-data-text":"brak opcji do wyboru",disabled:a>0&&!e.selectedValues[a-1]},on:{change:function(){return e.changeValue(a)}},model:{value:e.selectedValues[a],callback:function(t){e.$set(e.selectedValues,a,t)},expression:"selectedValues[index]"}})],1)}),s("div",{staticClass:"text-sm-right"},[s("v-btn",{staticClass:"white--text submit-button",attrs:{round:"",color:"blue darken-1",disabled:e.selectedValues.length!==e.steps.length},on:{click:e.goToResult}},[e._v("\n\t\t\t\t\t\t\t\t\tSzukaj\n\t\t\t\t\t\t\t\t\t"),s("v-icon",{attrs:{right:"",dark:""}},[e._v("search")])],1)],1)],2),s("v-flex",{attrs:{sm6:"","offset-sm2":""}},[s("img",{staticClass:"main-image",attrs:{src:a("7933"),alt:"tasks"}})])],1)],1)],1)],1)],1)},l=[],n={name:"SelectValues",data:function(){return{steps:[{label:"Typ wskazania",options:[{value:1,text:"niedrobnokomórkowy",parentValues:null},{value:2,text:"drobnokomórkowy",parentValues:null,disabled:!0}]},{label:"Podtyp wskazania 1",options:[{value:3,text:"płaskonabłonkowy",parentValues:[1],disabled:!0},{value:4,text:"niepłaskonabłonkowy",parentValues:[1]}]},{label:"Podtyp wskazania 2",options:[{value:5,text:"brak",parentValues:[3],disabled:!0},{value:6,text:"gruczołowy",parentValues:[4]},{value:7,text:"wielokomórkowy",parentValues:[4],disabled:!0},{value:8,text:"NOS",parentValues:[4],disabled:!0}]},{label:"Rodzaje mutacji",options:[{value:9,text:"brak",parentValues:[5],disabled:!0},{value:10,text:"mutacja EGFR",parentValues:[5],disabled:!0},{value:11,text:"mutacja ALK",parentValues:[6]},{value:12,text:"mutacja T790M",parentValues:[6],disabled:!0},{value:13,text:"mutacja ROS",parentValues:[6],disabled:!0}]},{label:"Stopień zaawansowania choroby",options:[{value:14,text:"III A",parentValues:[9,10,11],disabled:!0},{value:15,text:"III B",parentValues:[9,10,11]},{value:16,text:"IV",parentValues:[9,10,11],disabled:!0}]},{label:"Przerzuty do OUN",options:[{value:17,text:"tak",parentValues:[14,15,16]},{value:18,text:"nie",parentValues:[14,15,16],disabled:!0}]},{label:"Stopień wg ECOG",options:[{value:19,text:"0",parentValues:[17,18]},{value:20,text:"1",parentValues:[17,18],disabled:!0},{value:21,text:"2",parentValues:[17,18],disabled:!0},{value:22,text:"3",parentValues:[17,18],disabled:!0},{value:23,text:"4",parentValues:[17,18],disabled:!0}]}],selectedValues:[]}},methods:{changeValue:function(e){for(var t=e+1;t<this.selectedValues.length;t++)this.selectedValues[t]=null},goToResult:function(){var e=this,t=[];this.steps.forEach(function(a){a.options.forEach(function(s){e.selectedValues.indexOf(s.value)>=0&&t.push({label:a.label,value:s.text})})}),this.$router.replace({name:"result",params:{title:this.$route.params.selected,values:t,selectedValues:this.selectedValues}})}},mounted:function(){this.$route.params.select&&(this.selectedValues=this.$route.params.select)}},u=n,i=(a("da8f"),a("2877")),o=Object(i["a"])(u,s,l,!1,null,"8cc97976",null);o.options.__file="SelectValues.vue";t["default"]=o.exports},"762f":function(e,t,a){},7933:function(e,t,a){e.exports=a.p+"img/tasks.b355abad.svg"},da8f:function(e,t,a){"use strict";var s=a("762f"),l=a.n(s);l.a}}]);
//# sourceMappingURL=chunk-15faa32e.8f915b1a.js.map