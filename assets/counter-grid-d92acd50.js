import{n as r}from"./index-2766203e.js";const e={name:"blockCenter",mixins:[],data(){return{arry:[{title:"国控自动站",icon:"i carbon:building",unit:"",total:"4276"},{title:"国土自动站",icon:"i carbon:building-insights-1",unit:"",total:"1873"},{title:"省级自动站",icon:"i carbon:building-insights-2",unit:"个",total:"3135"},{title:"人工监测站",icon:"i carbon:building-insights-3",unit:"个",total:"769"}],borderConfig:{decoration:!1,opacity:.7}}},computed:{},watch:{"$tState.mapData.name"(o,t){let n=this.randomData({min:0,max:9999,length:4,group:1})[0];this.arry.forEach((i,a)=>{i.total=n[a]})}},methods:{},mounted(){}};var s=function(){var t=this,n=t._self._c;return n("div",{staticClass:"counterGrid-mobile"},t._l(t.arry,function(i,a){return n("aYinTechBorderB2",{key:a,attrs:{config:t.borderConfig}},[n("div",{staticClass:"inner-content"},[n("div",{staticClass:"block-title"},[t._v(t._s(i.title)+" "),i.unit?n("span",[t._v("("+t._s(i.unit)+")")]):t._e()]),n("div",{staticClass:"total"},[n("i",{class:[i.icon,"icon"]}),n("DigitalTransform",{staticClass:"numbers",attrs:{value:i.total,useGrouping:!0,interval:t.globalConfig.animation?3e3:0}})],1)]),n("div",{staticClass:"bdTechBottom"})])}),1)},l=[],c=r(e,s,l,!1,null,null,null,null);const d=c.exports;export{d as default};
