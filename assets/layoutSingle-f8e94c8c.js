import{n,_ as o}from"./index-2766203e.js";const a={mixins:[],name:"dashboardE",components:{echartsLineD:()=>o(()=>import("./echarts-lineD-a80af768.js"),["assets/echarts-lineD-a80af768.js","assets/themeChart-df325d8f.js","assets/index-2766203e.js","assets/index-ff56af40.css"]),echartsBarA:()=>o(()=>import("./echarts-barA-0002d549.js"),["assets/echarts-barA-0002d549.js","assets/themeChart-df325d8f.js","assets/index-2766203e.js","assets/index-ff56af40.css"]),echartsGaugeTwo:()=>o(()=>import("./echarts-gaugeTwo-242a9ab7.js"),["assets/echarts-gaugeTwo-242a9ab7.js","assets/themeChart-df325d8f.js","assets/index-2766203e.js","assets/index-ff56af40.css"]),echartsPie:()=>o(()=>import("./echarts-pieB-ac5791a6.js"),["assets/echarts-pieB-ac5791a6.js","assets/themeChart-df325d8f.js","assets/index-2766203e.js","assets/index-ff56af40.css"])},data(){return{portlets:[{id:"p1",title:"年度收益预测走势",component:"echartsLineD",border:"DVBorderBox1",hideTitle:!0},{id:"p2",title:"业务盈利能力走势",component:"echartsBarA",border:"DVBorderBox1",hideTitle:!0},{id:"p3",title:"仓库温湿度",component:"echartsGaugeTwo",border:"DVBorderBox1",hideTitle:!0},{id:"p4",title:"其他图表",component:"echartsPie",border:"DVBorderBox1",hideTitle:!0}]}},computed:{},methods:{getConfig(i){return{title:this.$t(`dashboard4x2B.PTitle.${i.id}`),ani:!1,titleWidth:250,opacity:.7}}},mounted(){},destroyed(){}};var d=function(){var e=this,t=e._self._c;return t("div",{staticClass:"dashboardSingleE",attrs:{id:"dashboardE"}},e._l(e.portlets,function(r,l){return t("div",{staticClass:"portlet-wrapper"},[t(r.border,{tag:"component",attrs:{config:e.getConfig(r)}},[r.hideTitle?e._e():t("portletTitle",{attrs:{title:r.title}}),t(r.component,{tag:"component"}),t("i",[e._v(e._s(r.component))])],1)],1)}),0)},_=[],s=n(a,d,_,!1,null,null,null,null);const p=s.exports;export{p as default};