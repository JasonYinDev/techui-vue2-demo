import{n as i}from"./index-2766203e.js";const o={name:"SVC",mixins:[],data(){return{boxStyle:{color1:$c.bll5,color2:$c.cyl5,color3:$c.bll9,BGColor:$c.fade($c.bim9,.6),BGColor2:$c.fade($c.bim9,.5)},boar3dConfig:{mode:"matrix",view3d:!0,showShadow:!0,coeff:2},toggleConfig:{checked:!0,title:"3D视图开关"},adptivePanelConfig:{backgroundName:"A2",backgroundFillAll:!0,loading:!0}}},components:{},computed:{},watch:{"globalConfig.panel3D"(e){this.boar3dConfig.view3d=e}},methods:{},mounted(){this.boar3dConfig.view3d=this.globalConfig.panel3D,this.$timer("B3DLoading",()=>{this.adptivePanelConfig.loading=!1},1e3)},beforeDestroy(){}};var n=function(){var t=this,a=t._self._c;return a("adaptivePanel",{attrs:{config:t.adptivePanelConfig}},[a("div",{staticClass:"view3d-state",class:[t.globalConfig.panel3D?"on3D":"off3D"]},[a("div",{staticClass:"state state-on"},[t._v(t._s(t.$t("panel3D.state.on")))]),a("div",{staticClass:"state state-off"},[t._v(t._s(t.$t("panel3D.state.off")))]),a("div",{staticClass:"desc"},[t._v(t._s(t.$t("panel3D.state.offTip")))])]),a("div",{staticClass:"title-desc"},[t._v(t._s(t.$t("panel3D.desc.matrix")))]),a("div",{staticClass:"panel3D-test-matrix-wrap"},[a("div",{staticClass:"gridDemoMax"},t._l(15,function(c,s){return a("div",{staticClass:"item"},[a("panel3D",{staticClass:"panel-3d",attrs:{config:t.boar3dConfig,index:s}},[a("div",{staticClass:"demo-box"},[a("div",{staticClass:"inner-box"})])])],1)}),0)])])},l=[],r=i(o,n,l,!1,null,null,null,null);const f=r.exports;export{f as default};