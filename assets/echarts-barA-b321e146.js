import{t as n}from"./themeChart-df325d8f.js";import{n as c}from"./index-2766203e.js";const l={components:{},mixins:[n],data(){return{chartData:{legend:["业务1","业务2"],xAxis:[],colors:[$c.cbl4,$c.bll5],data:[]},chartOption:{}}},computed:{},methods:{processData(){let{legend:t,colors:a}=this.chartData,s=[],o=[],i=[];o.push([],[]);for(var e=0;e<100;e++)s.push(""+e),o[0].push((Math.sin(e/5)*(e/5-10)+e/6)*5),o[1].push((Math.cos(e/5)*(e/5-10)+e/6)*5);t.forEach((m,r)=>{i.push({name:t[r],type:"bar",label:{show:!1,position:"insideRight"},itemStyle:{color:$c.fade(a[r],.9),borderRadius:5},data:o[r]})}),this.chartOption.legend.data=t,this.chartOption.series=i,this.chartOption.xAxis.data=s},processOption(){const{getColor:t}=this;this.chartOption={update:!1,tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{icon:"rect",data:[],right:20,top:10},toolbox:{left:20,top:10,show:!0,feature:{magicType:{type:["line","bar","stack"]}},showTitle:!1,itemSize:20,iconStyle:{color:t("staFC"),borderColor:t("staFCW")},emphasis:{iconStyle:{color:t("staFC"),borderColor:t("staFCW")}}},grid:{left:"3%",right:"3%",bottom:"8%",top:"60",containLabel:!0},yAxis:{type:"value",axisLabel:{align:"right"}},xAxis:{type:"category",data:[],splitLine:{show:!1},axisLabel:{align:"center"}},series:[]},this.processData()},chartTheme(){const{chartData:t,getPalette:a,oriColors:s}=this;t.colors=a({actual:2,pickType:"rdm"})}},mounted(){this.processOption()}};var h=function(){var a=this,s=a._self._c;return s("echartsInit",{attrs:{chartOption:a.chartOption}})},p=[],d=c(l,h,p,!1,null,null,null,null);const f=d.exports;export{f as default};
