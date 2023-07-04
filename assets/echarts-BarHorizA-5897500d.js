import{t as r}from"./themeChart-df325d8f.js";import{n as i}from"./index-2766203e.js";const o="image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAZlBMVEUAAABe3uVe3+Vf3uVf3+Zf3uVg3+Zg3+Zf3+Vi4OZh4OZg3+Z86/Bh3+Zi4Odj4Odi4OZ86/B76/B86/Bj4ed56+9x5+xn4umB7/N87PB36e+A7/N+7fF/7vJ/7vJ+7fGA7/OB7/PReX+lAAAAIXRSTlMABQkVDREmIhk3MR10LEFFPHh7cUprXE35h2XnqMLAp+mHAG9cAAAB5ElEQVRIx83WjU7CMBQFYIoiKMqU/XUboHv/l/Tce7t2XamDNSacETEmX86tlK2rx4py150o+MstMBLwWRfHKo6JCVxLnvmFGBjFQ58oF1//sUZhGy/ClSTWObgnL4O+bkeN4nY2okfNMbkRt9/vtxz8InoTsWplJSCzFxPmO8+GpSIByX3YQAuGDWtRKhKjCnxDXhF6Z4yxnZ20Wgko7BMRDmxtSGVaI4kdTIgb+zTYoJQlIMlDlmUFgrcDWWC201qSayqlTkiCddWWeV62VU0YlnpRi9VOKaSUsiyq/N0krwq2Ugt7lVpZl5BfHNiytjagMi+XYp0kCR45hMlivVQrE/uU5pXSrCB5bM6d1t2lOZItMqmliT3q5uVxqxzyW/ccfYLNKx7ZTeykMvNyac2yt2Fbc61MHLSC0rwoxbiNdlQ3GBm1NLHQsHUrtEXppR/ljNpW6DbSCoqlFiVoN6YdaFlgsSFVPs1BdT8OaB5QyQzVcaqWDows/zepxR8ObLglTrdtCRVuRNj4Rrxh+//0ke2f8KVL+Kon3GCSbmsJN9OUW3j6g0Ns+LgCij2u0h+Sghc8mlMPBMgdx5DFh59VmOVHrvmDnoNxCz3J7MFWsMuaLyR089xz/xhlfijvwutR8gv3zk6BLUUeCgAAAABJRU5ErkJggg==",s={components:{},mixins:[r],data(){return{chartData:{color:[$c.cyl4,$c.orl5,$c.rel5],data:[69,96,35,26,96,32,52,22,72]},chartOption:{}}},watch:{"$tState.mapData.name"(a,t){let e=this.randomData({min:0,max:100,length:9,group:1});this.chartData.data=e[0],this.processData(),this.chartOption.update=!0}},computed:{fillArr(){return new Array(this.chartData.data.length).fill(100)}},methods:{chartClick(a){let t=this.$tState.chartData;t.title=this.chartData.title+"-"+a.seriesName+"-"+a.name,t.params=a},getSymbolData(a){let t=[];for(var e=0;e<a.length;e++)t.push({value:a[e],symbolPosition:"end"});return t},processData(){this.chartData;let a=[];for(let t=1;t<=6;t++)t==3?a.push(this.$t("dashboardA.l3.longNmae")+t):a.push(this.$t("dashboardA.l3.name")+t);this.chartOption.yAxis.data=a,this.chartOption.series[0].data=this.chartData.data,this.chartOption.series[1].data=this.fillArr,this.chartOption.series[2].data=this.getSymbolData(this.chartData.data),this.dataScroll()},processOption(){const{getColor:a}=this;this.chartOption={update:!1,title:{show:!1,textStyle:{fontSize:16,fontWeight:"normal"}},grid:{top:"15%",left:"18%",right:"12%",bottom:"5%"},tooltip:{show:!1},xAxis:{type:"value",min:0,max:100,axisLine:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1}},dataZoom:{yAxisIndex:0,show:!1,type:"slider",startValue:0,endValue:5},yAxis:{type:"category",inverse:!0,splitLine:{show:!1},axisLine:{show:!1},axisLabel:{show:!0,interval:0,margin:10,fontSize:12,width:50,lineHeight:14,overflow:"breakAll",fontWeight:"normal"},axisTick:{show:!1},data:[]},series:[{type:"bar",barWidth:"40%",animationDuration:2e3,itemStyle:{borderWidth:0,borderRadius:10,color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:$c.cyl8},{offset:1,color:$c.cyl4}]}},label:{show:!1},data:[],z:0},{type:"bar",barWidth:"40%",barGap:"-100%",animation:!1,itemStyle:{borderWidth:0,borderRadius:5,color:"rgba(0,202,255,0.2)"},label:{color:a("staFC"),show:!0,position:["101%","20%"],fontSize:14,fontWeight:"normal",formatter:t=>" "+this.chartData.data[t.dataIndex]+"%"},data:[],z:0},{type:"pictorialBar",animation:!0,animationDuration:3e3,symbol:o,symbolSize:[50,50],symbolOffset:[20,0],z:12,itemStyle:{color:"#fff"},data:[]}]},this.processData()},chartTheme(){const{chartData:a,getPalette:t,oriColors:e}=this;a.colors=t({actual:2,pickType:"rdm"})},dataScroll(){this.$timer("dataScrollBarHorizA",()=>{let{data:a}=this.chartData,{dataZoom:t}=this.chartOption;t.endValue==a.length?(t.endValue=5,t.startValue=0):(t.endValue++,t.startValue++),this.chartOption.update=!0,this.dataScroll()},5e3)}},mounted(){this.processOption()}};var l=function(){var t=this,e=t._self._c;return e("echartsInit",{attrs:{chartOption:t.chartOption},on:{chartClick:t.chartClick}})},h=[],n=i(s,l,h,!1,null,null,null,null);const m=n.exports;export{m as default};
