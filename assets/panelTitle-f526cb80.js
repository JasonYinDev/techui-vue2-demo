import{n}from"./index-2766203e.js";const c={name:"blockCenter",mixins:[],components:{},data(){return{show:!0,update:0,pageConfig:{config:{current:"cfgOn",children:[{title:"配置项开",label:"cfgOn"},{title:"配置项关",label:"cfgOff"}]}},techTitle:[{name:"panelTitleA1",desc:"",children:[{border:"aYinTechBorderB3",blockTi:"panelTitleA1",title:"regular",config:{}},{border:"aYinTechBorderB3",blockTi:"panelTitleA1",title:"long",config:{fontSize:18,width:280}},{border:"aYinTechBorderB3",blockTi:"panelTitleA1",title:"custom",config:{scale:1.2,position:"left",decorationColor:$c.aql5,fontWeight:"bold",color:$c.yel5}},{border:"aYinTechBorderB3",blockTi:"panelTitleA1",title:"regular",config:{subType:"B"}},{border:"aYinTechBorderB3",blockTi:"panelTitleA1",title:"long",config:{subType:"B"}},{border:"aYinTechBorderB3",blockTi:"panelTitleA1",title:"custom",config:{scale:1.2,subType:"B",position:"left",decorationColor:$c.aql5,fontWeight:"bold",color:$c.yel5}},{border:"aYinTechBorderB3",blockTi:"panelTitleA1",title:"regular",config:{subType:"C"}},{border:"aYinTechBorderB3",blockTi:"panelTitleA1",title:"long",config:{subType:"C"}},{border:"aYinTechBorderB3",blockTi:"panelTitleA1",title:"custom",config:{scale:1.2,subType:"C",position:"left",decorationColor:$c.aql5,fontWeight:"bold",color:$c.yel5}},{border:"aYinTechBorderB3",blockTi:"panelTitleA1",title:"regular",config:{subType:"D"}},{border:"aYinTechBorderB3",blockTi:"panelTitleA1",title:"long",config:{subType:"D"}},{border:"aYinTechBorderB3",blockTi:"panelTitleA1",title:"custom",config:{scale:1.2,subType:"D",position:"left",decorationColor:$c.aql5,fontWeight:"bold",color:$c.yel5}}]},{name:"panelTitleA2",desc:"",children:[{border:"aYinTechBorderB3",blockTi:"panelTitleA2",title:"regular",config:{}},{border:"aYinTechBorderB3",blockTi:"panelTitleA2",title:"long",config:{fontSize:18,width:280}},{border:"aYinTechBorderB3",blockTi:"panelTitleA2",title:"custom",config:{scale:1.2,decorationColor:$c.aql5,fontWeight:"bold",color:$c.yel5}},{border:"aYinTechBorderB3",blockTi:"panelTitleA2",title:"regular",config:{subType:"B"}},{border:"aYinTechBorderB3",blockTi:"panelTitleA2",title:"long",config:{subType:"B"}},{border:"aYinTechBorderB3",blockTi:"panelTitleA2",title:"custom",config:{subType:"B",scale:1.2,decorationColor:$c.aql5,fontWeight:"bold",color:$c.yel5}}]},{name:"panelTitleB1",desc:"",children:[{border:"aYinTechBorderB4",blockTi:"panelTitleB1",title:"regular",config:{}},{border:"aYinTechBorderB4",blockTi:"panelTitleB1",title:"regular",config:{fontSize:18}},{border:"aYinTechBorderB4",blockTi:"panelTitleB1",title:"custom",config:{scale:1.2,position:"right",decorationColor:$c.aql5,fontWeight:"bold",color:$c.yel5}}]},{name:"panelTitleB2",desc:"",children:[{border:"aYinTechBorderB4",blockTi:"panelTitleB2",title:"regular",config:{}},{border:"aYinTechBorderB4",blockTi:"panelTitleB2",title:"regular",config:{fontSize:18}},{border:"aYinTechBorderB4",blockTi:"panelTitleB2",title:"custom",config:{scale:1.2,decorationColor:$c.aql5,fontWeight:"bold",color:$c.yel5}}]}]}},computed:{},watch:{},methods:{},mounted(){},beforeDestroy(){}};var a=function(){var e=this,o=e._self._c;return o("div",{staticClass:"panelTitle-demo deco-demo"},[o("div",{staticClass:"border-toggle"},e._l(e.pageConfig,function(t,i){return o("el-radio-group",{key:i,attrs:{size:"mini"},model:{value:t.current,callback:function(l){e.$set(t,"current",l)},expression:"radioG.current"}},e._l(t.children,function(l,r){return o("el-radio-button",{key:l.label,attrs:{label:l.label}},[e._v(e._s(e.$t(`decorComps.tabs.${i}${r+1}`)))])}),1)}),1),e.show?o("div",{staticClass:"deco-wrap"},[o("div",{staticClass:"deco-intro"},[o("div",{staticClass:"intro"},[e._v(e._s(e.$t("decorComps.intro.desc"))+"：")]),o("div",{staticClass:"content"},[o("p",[e._v(e._s(e.$t("decorComps.intro.panelTitle.detail1")))]),o("p",[e._v(e._s(e.$t("decorComps.intro.panelTitle.detail2")))]),o("p",[e._v(e._s(e.$t("decorComps.intro.panelTitle.detail3")))])])]),e._l(e.techTitle,function(t,i){return o("div",{staticClass:"deco-group"},[o("div",{staticClass:"group-name"},[o("span",{staticClass:"title"},[e._v(e._s(t.name))]),o("span",{staticClass:"subTitle"},[e._v(e._s(t.subTitle))]),o("span",{staticClass:"desc"},[e._v(e._s(t.desc))])]),o("div",{staticClass:"group-content"},e._l(t.children,function(l){return o("div",{class:"panelTitle-item "},[o(l.border,{tag:"component"},[o(l.blockTi,{tag:"component",attrs:{config:l.config,update:e.update}},[e._v(" "+e._s(e.$t(`decorComps.panelTitle.${l.title}`))+" ")]),e.pageConfig.config.current=="cfgOn"?o("div",{staticClass:"config-detail"},[e._v(e._s(l))]):e._e()],1)],1)}),0)])})],2):e._e()])},s=[],d=n(c,a,s,!1,null,null,null,null);const b=d.exports;export{b as default};
