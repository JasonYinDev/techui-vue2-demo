import{n as r,u as l}from"./index-2766203e.js";const i={name:"blockCenter",mixins:[],props:["config"],data(){return{}},computed:{borderConfig(){return{title:this.config.title,titleWidth:this.config.titleWidth,titleColor:$c.cbl3,backgroundColor:$c.bll9,borderColor:$c.bll6,decorationColor:[$c.cyl3,$c.cbl3],borderWidth:2,glow:!0,glowRange:7,glowColor:$c.fade($c.cyl5,.3),ani:!1,opacity:.95}}},watch:{},methods:{exit(){this.config.show=!1}},mounted(){}},n=()=>{l((e,t)=>({29956514:e.config.width,"216f78ce":e.config.height}))},s=i.setup;i.setup=s?(e,t)=>(n(),s(e,t)):n;const c=i;var a=function(){var t=this,o=t._self._c;return o("div",{staticClass:"layout-dialog"},[o("DVBorderBox1",{attrs:{config:t.borderConfig}},[o("div",{staticClass:"params"},[t._v("{{}}")]),o("div",{staticClass:"exit",on:{click:function(f){return t.exit()}}},[o("i",{staticClass:"fal fa-times"}),o("div",{staticClass:"bdTechBottom"})])])],1)},_=[],d=r(c,a,_,!1,null,null,null,null);const g=d.exports;export{g as default};
