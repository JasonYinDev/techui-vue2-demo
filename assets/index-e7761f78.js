import{n as o,_ as a}from"./index-2766203e.js";const i={name:"SVC",mixins:[],data(){return{adptivePanelConfig:{adaptiveType:"advance",chartCount:11}}},components:{layout:()=>a(()=>import("./layout-ce9d55e3.js"),["assets/layout-ce9d55e3.js","assets/index-2766203e.js","assets/index-ff56af40.css","assets/layout-a380034d.css"])},computed:{},methods:{},watch:{},mounted(){const{tipState:e,$notify:t,$timer:n}=this;e&&n("notify1",()=>{t({title:"提示",message:'本数据屏为"dashboardAGlobal"未处理国际化的版本',duration:3e3})},3e3)},beforeDestroy(){const{$notify:e,$timer:t}=this;e.closeAll(),t("notify1"),t("notify2"),t("notify3")}};var r=function(){var t=this,n=t._self._c;return n("adaptivePanel",{attrs:{config:t.adptivePanelConfig}},[n("layout")],1)},s=[],_=o(i,r,s,!1,null,null,null,null);const d=_.exports;export{d as default};
