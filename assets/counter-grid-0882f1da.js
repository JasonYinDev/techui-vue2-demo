import{n as r}from"./index-e5c47b2c.js";const e={name:"blockCenter",mixins:[],data(){return{arry:[{title:"国控自动站",icon:"i carbon:building",unit:"",total:"4276"},{title:"国土自动站",icon:"i carbon:building-insights-1",unit:"",total:"1873"},{title:"省级自动站",icon:"i carbon:building-insights-2",unit:"个",total:"3135"},{title:"人工监测站",icon:"i carbon:building-insights-3",unit:"个",total:"769"}],borderConfig:{decoration:!1,opacity:.7}}},computed:{},watch:{"$tState.mapData.name"(o,t){let i=this.randomData({min:0,max:9999,length:4,group:1})[0];this.arry.forEach((n,a)=>{n.total=i[a]})}},methods:{},mounted(){}};var s=function(){var t=this,i=t._self._c;return i("div",{staticClass:"counterGrid-mobile"},t._l(t.arry,function(n,a){return i("aYinTechBorderB2",{key:a,attrs:{config:t.borderConfig}},[i("div",{staticClass:"inner-content"},[i("div",{staticClass:"block-title"},[t._v(t._s(t.$t(`dashboardC.l4.item${a+1}`))+" "),t._e()]),i("div",{staticClass:"total"},[i("i",{class:[n.icon,"icon"]}),i("DigitalTransform",{staticClass:"numbers",attrs:{value:n.total,useGrouping:!0,interval:t.globalConfig.animation?3e3:0}})],1)]),i("div",{staticClass:"bdTechBottom"})])}),1)},l=[],c=r(e,s,l,!1,null,null,null,null);const d=c.exports;export{d as default};