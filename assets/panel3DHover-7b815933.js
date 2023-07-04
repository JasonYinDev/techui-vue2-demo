import{n as i}from"./index-2766203e.js";const e={name:"SVC",mixins:[],data(){return{loading:!0,adptivePanelConfig:{backgroundName:"A1",backgroundFillAll:!0,loading:!0},configBLeft:{rotate:{y:20},transformOrigin:"right",view3d:!0,showShadow:!0},configBTopLeft:{rotate:{y:20,x:-35},rotateHover:{x:-20,y:-20},view3d:!0,showShadow:!0},configBTopRight:{rotate:{y:-20,x:-35},view3d:!0,showShadow:!0},configBBottomLeft:{rotate:{y:20,x:35},view3d:!0,showShadow:!0},configBBottomRight:{rotate:{y:-20,x:35},view3d:!0,showShadow:!0},configBRight:{rotate:{y:-20},transformOrigin:"left",view3d:!0,showShadow:!0},toggleConfig:{checked:!0,title:"3D视图开关"}}},components:{},computed:{},watch:{"globalConfig.panel3D"(o){this.change3Dview()}},methods:{change3Dview(){let o=this.globalConfig.panel3D;[this.configBLeft,this.configBTopLeft,this.configBTopRight,this.configBBottomLeft,this.configBBottomRight,this.configBRight].forEach((t,r)=>{t.view3d=o})}},mounted(){this.change3Dview(),this.$timer("B3DLoading",()=>{this.adptivePanelConfig.loading=!1},1e3)}};var s=function(){var a=this,t=a._self._c;return t("adaptivePanel",{attrs:{config:a.adptivePanelConfig}},[t("div",{staticClass:"view3d-state",class:[a.globalConfig.panel3D?"on3D":"off3D"]},[t("div",{staticClass:"state state-on"},[a._v("3D视图已打开")]),t("div",{staticClass:"state state-off"},[a._v("3D视图已关闭")]),t("div",{staticClass:"desc"},[a._v("请在全局配置项中打开3D面板功能")])]),t("div",{staticClass:"title-desc"},[a._v("Hover模式为静态参数，本demo为分别配置的参数，变形轴向，参数，阴影等")]),t("div",{staticClass:"panel3D-test-hover-wrap"},[t("panel3D",{staticClass:"panel-3d board-left",attrs:{config:a.configBLeft}},[t("div",{staticClass:"demo-box"})]),t("panel3D",{staticClass:"panel-3d board-topLeft",attrs:{config:a.configBTopLeft}},[t("div",{staticClass:"demo-box"},[t("div",{staticClass:"inner-box"})])]),t("panel3D",{staticClass:"panel-3d board-topRight",attrs:{config:a.configBTopRight}},[t("div",{staticClass:"demo-box"},[t("div",{staticClass:"inner-box"})])]),t("panel3D",{staticClass:"panel-3d board-bottomLeft",attrs:{config:a.configBBottomLeft}},[t("div",{staticClass:"demo-box"},[t("div",{staticClass:"inner-box"})])]),t("panel3D",{staticClass:"panel-3d board-bottomRight",attrs:{config:a.configBBottomRight}},[t("div",{staticClass:"demo-box"},[t("div",{staticClass:"inner-box"})])]),t("panel3D",{staticClass:"panel-3d board-right",attrs:{config:a.configBRight}},[t("div",{staticClass:"demo-box"},[t("div",{staticClass:"inner-box"})])])],1)])},n=[],l=i(e,s,n,!1,null,null,null,null);const d=l.exports;export{d as default};