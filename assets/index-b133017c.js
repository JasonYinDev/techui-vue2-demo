import{n as t,_ as o}from"./index-2766203e.js";const l={name:"SVC",mixins:[],data(){return{reload:!1,adptivePanelConfig:{adaptiveType:"advance",backgroundName:"A2",backgroundFillAll:!0,chartCount:6}}},components:{layout:()=>o(()=>import("./layout-5cbcde09.js"),["assets/layout-5cbcde09.js","assets/index-2766203e.js","assets/index-ff56af40.css","assets/layout-676e5142.css"])},computed:{},methods:{},watch:{"globalConfig.language"(n){this.reload=!0,this.$nextTick(()=>{this.reload=!1})}},mounted(){},beforeDestroy(){}};var r=function(){var e=this,a=e._self._c;return e.reload?e._e():a("adaptivePanel",{staticClass:"scren1080pB-SA",attrs:{config:e.adptivePanelConfig}},[a("layout")],1)},s=[],_=t(l,r,s,!1,null,null,null,null);const d=_.exports;export{d as default};
