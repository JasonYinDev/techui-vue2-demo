import{n,u as r}from"./index-2766203e.js";const e={props:{clickData:{type:Object}},data(){return{}},watch:{"clickData.show"(a,t){a&&this.hide()},"clickData.area"(a,t){this.hide()}},components:{},computed:{curEL(){return this.$el},posX(){const{curEL:a,clickData:t}=this,s=a.clientWidth;return t.x-s/2-1},posY(){const{curEL:a,clickData:t}=this,s=a.clientHeight;return this.clickData.y-s-16},dataType(){const{data:a}=this.clickData;if(typeof a=="number")return"number";if(typeof a=="string"&&a=="danger")return"danger";if(typeof a=="string"&&a=="warning")return"warning"}},methods:{hide(){this.$timer("mapPopver",()=>{this.clickData.show=!1},5e3)}},mounted(){this.hide()},beforeDestroy(){}},c=()=>{r((a,t)=>({"38ac985c":a.posX,"38ac985d":a.posY}))},i=e.setup;e.setup=i?(a,t)=>(c(),i(a,t)):c;const o=e;var l=function(){var t=this,s=t._self._c;return s("div",{staticClass:"mapPopover",class:[t.clickData.show?"show":"hide","popover-"+t.dataType]},[s("div",{staticClass:"item"},[s("span",{staticClass:"label"},[t._v(t._s(t.$t("map.popover.area"))+":")]),s("span",{staticClass:"desc"},[t._v(t._s(t.clickData.area))])]),t.dataType=="number"?s("div",{staticClass:"item"},[s("span",{staticClass:"label"},[t._v(t._s(t.$t("map.popover.data"))+":")]),s("span",{staticClass:"desc"},[t._v(t._s(t.clickData.data))])]):s("div",{staticClass:"item"},[s("span",{staticClass:"label"},[t._v(t._s(t.$t("map.popover.info"))+":")]),s("span",{staticClass:"desc"},[t._v(t._s(t.clickData.info))])])])},p=[],_=n(o,l,p,!1,null,null,null,null);const u=_.exports;export{u as default};
