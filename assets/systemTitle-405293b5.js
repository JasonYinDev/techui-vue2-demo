import{n as c}from"./index-2766203e.js";const i={name:"blockCenter",mixins:[],components:{},data(){return{show:!0,update:0,pageConfig:{config:{current:"cfgOn",children:[{title:"配置项开",label:"cfgOn"},{title:"配置项关",label:"cfgOff"}]}},techTitle:[{name:"systemTitleA1",desc:"带动画效果的系统标题组件,原创开发的第一款标题组件。",children:[{border:"systemTitleA1",config:{}},{border:"systemTitleA1",config:{gradientBG:!1,decorationColorAlt:!0,width:700}},{border:"systemTitleA1",config:{ani:!1,backgroundColor:$c.aql5,decorationColor:[$c.aql3,$c.cyl5],fontColor:[$c.cyl9,$c.aql7]}},{border:"systemTitleA1",config:{dur:1,scale:.7,gradientReverse:!0,decoration:!1,decorationColorAlt:!0}}]},{name:"systemTitleA2",desc:"原创设计开发的锐利风格的标题组件，内置2种子风格，可以通过subType切换子风格。",children:[{border:"systemTitleA2",config:{subType:"A"}},{border:"systemTitleA2",config:{subType:"B"}},{border:"systemTitleA2",config:{subType:"A",scale:.9,backgroundColor:$c.aql5,decorationColor:[$c.aql1,$c.cyl8],fontColor:[$c.cyl9,$c.aql7],decoration:!1}},{border:"systemTitleA2",config:{subType:"B",gradientReverse:!0,decorationColorAlt:!0,decoration:!1}}]},{name:"systemTitleA3",desc:"原创设计开发的锐利风格的标题组件，内置2种子风格，可以通过subType切换子风格。",children:[{border:"systemTitleA3",config:{subType:"A"}},{border:"systemTitleA3",config:{subType:"B"}},{border:"systemTitleA3",config:{subType:"A",gradientReverse:!0,decorationColorAlt:!0,decoration:!1}},{border:"systemTitleA3",config:{subType:"B",gradientReverse:!0,decorationColorAlt:!0,decoration:!1}}]},{name:"systemTitleA4",desc:"原创设计开发的锐利风格的标题组件，内置2种子风格，可以通过subType切换子风格。",children:[{border:"systemTitleA4",config:{subType:"A"}},{border:"systemTitleA4",config:{subType:"B"}},{border:"systemTitleA4",config:{subType:"A",backgroundColor:$c.aql5,decorationColor:[$c.aql1,$c.cyl8],fontColor:[$c.cyl9,$c.aql7]}},{border:"systemTitleA4",config:{subType:"B",backgroundColor:$c.aql5,decorationColor:[$c.aql1,$c.cyl8],fontColor:[$c.cyl9,$c.aql7]}}]},{name:"systemTitleB1",desc:"简洁风格的系统标题，无装饰效果",children:[{border:"systemTitleB1",config:{}},{border:"systemTitleB1",config:{scale:1.3}}]}]}},computed:{},watch:{},methods:{},mounted(){},beforeDestroy(){}};var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"techTitle-demo deco-demo"},[t("div",{staticClass:"border-toggle"},e._l(e.pageConfig,function(o,r){return t("el-radio-group",{key:r,attrs:{size:"mini"},model:{value:o.current,callback:function(s){e.$set(o,"current",s)},expression:"radioG.current"}},e._l(o.children,function(s,l){return t("el-radio-button",{key:s.label,attrs:{label:s.label}},[e._v(e._s(e.$t(`decorComps.tabs.${r}${l+1}`)))])}),1)}),1),e.show?t("div",{staticClass:"deco-wrap"},[t("div",{staticClass:"deco-intro"},[t("div",{staticClass:"intro"},[e._v(e._s(e.$t("decorComps.intro.desc"))+"：")]),t("div",{staticClass:"content"},[t("p",[e._v(e._s(e.$t("decorComps.intro.systemTitle.detail1")))]),t("p",[e._v(e._s(e.$t("decorComps.intro.systemTitle.detail2")))]),t("p",[e._v(e._s(e.$t("decorComps.intro.systemTitle.detail3")))])])]),e._l(e.techTitle,function(o,r){return t("div",{staticClass:"deco-group"},[t("div",{staticClass:"group-name"},[t("span",{staticClass:"title"},[e._v(e._s(o.name))]),t("span",{staticClass:"subTitle"},[e._v(e._s(o.subTitle))]),t("span",{staticClass:"desc"},[e._v(e._s(e.$t(`decorComps.systemTitle.desc${r+1}`)))])]),t("div",{staticClass:"group-content"},e._l(o.children,function(s){return t("div",{class:"systemTitle-item "},[t(s.border,{tag:"component",attrs:{config:s.config,update:e.update}}),e.pageConfig.config.current=="cfgOn"?t("div",{staticClass:"config-detail"},[e._v(e._s(s))]):e._e()],1)}),0)])})],2):e._e()])},a=[],d=c(i,n,a,!1,null,null,null,null);const f=d.exports;export{f as default};
