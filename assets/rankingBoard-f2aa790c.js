import{n as t}from"./index-2766203e.js";const o={name:"blockCenter",mixins:[],components:{},data(){return{option:{data:[{name:"陈志辉",value:55},{name:"刘润生",value:120},{name:"刘斯杰",value:78},{name:"梁羽晖",value:66},{name:"张志豪",value:80},{name:"罗福浩",value:45},{name:"方钧立",value:29},{name:"罗广荣",value:120},{name:"李家华",value:78},{name:"姚志成",value:66},{name:"张咏乐",value:80},{name:"袁文杰",value:45},{name:"李慧心",value:29}],rowNum:7,unit:this.$t("dashboardE.t3.unit"),waitTime:5e3}}},computed:{},methods:{},mounted(){this.option.data.forEach((e,a)=>{e.name=this.$t("dashboardE.t3.item")+"-"+this.randomString(4)})}};var r=function(){var a=this,n=a._self._c;return n("dv-scroll-ranking-board",{staticClass:"dashboardE-seller-rankingBoard",staticStyle:{width:"100%",height:"100%"},attrs:{config:a.option}})},l=[],i=t(o,r,l,!1,null,null,null,null);const m=i.exports;export{m as default};
