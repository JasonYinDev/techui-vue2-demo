import{n as r}from"./index-2766203e.js";const e={name:"blockCenter",mixins:[],data(){return{arry:[{title:"年度合同总额",icon:"i carbon:thumbnail-1",unit:"万元",total:"14276"},{title:"年度回款总额",icon:"i carbon:table-built",unit:"万元",total:"14276"},{title:"年度开票金额",icon:"i carbon:thumbnail-preview",unit:"万元",total:"3135"},{title:"年度净利润",icon:"i carbon:analytics",unit:"万元",total:"769"},{title:"年度合同总数",icon:"i carbon:document-attachment",unit:"份",total:"3135"},{title:"销售统计",icon:"i carbon:chart-histogram",unit:"人",total:"769"}],borderConfig:{decoration:!1,opacity:.7}}},computed:{},watch:{"$tState.mapData.name"(o,t){let n=this.randomData({min:0,max:9999,length:4,group:1})[0];this.arry.forEach((a,i)=>{a.total=n[i]})}},methods:{},mounted(){}};var l=function(){var t=this,n=t._self._c;return n("div",{staticClass:"counterGrid6-ScreenE"},t._l(t.arry,function(a,i){return n("aYinTechBorderB2",{key:i,attrs:{config:t.borderConfig}},[n("div",{staticClass:"inner-content"},[n("div",{staticClass:"block-title"},[t._v(t._s(a.title)+" "),a.unit?n("span",[t._v("("+t._s(a.unit)+")")]):t._e()]),n("div",{staticClass:"total"},[n("i",{class:[a.icon,"icon"]}),n("DigitalTransform",{staticClass:"numbers",attrs:{value:a.total,useGrouping:!0,interval:t.globalConfig.animation?3e3:0}})],1)]),n("div",{staticClass:"bdTechBottom"})])}),1)},c=[],s=r(e,l,c,!1,null,null,null,null);const _=s.exports;export{_ as default};
