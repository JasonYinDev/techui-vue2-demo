import{t as h}from"./themeChart-df325d8f.js";import{n}from"./index-2766203e.js";const c={components:{},mixins:[h],data(){return{chartData:{legend:["水位(米)","用水量(吨)"],yAxis:["超采区1","超采区2","超采区3","超采区4","超采区5","超采区6"],colors:[$c.bll4,$c.pum3,$c.rel4],data:[[320,302,341,374,390,450],[-120,-132,-101,-134,-190,-230]]},chartOption:{}}},watch:{"$tState.mapData.name"(s,e){let t=this.randomData({min:-400,max:400,length:6,group:2});this.chartData.data[0]=t[0],this.chartData.data[1]=t[1],this.processData(),this.chartOption.update=!0}},computed:{},methods:{processData(){let{legend:s,colors:e,yAxis:t,data:i}=this.chartData,r=[];t.forEach((o,a)=>{this.chartData.yAxis[a]=this.$t("dashboardC.l2.yAxis")+(a+1)}),s.forEach((o,a)=>{this.chartData.legend[a]=this.$t(`dashboardC.l2.legend${a+1}`),r.push({name:this.$t(`dashboardC.l2.legend${a+1}`),type:"bar",barWidth:10,stack:"Total",label:{show:!0},emphasis:{focus:"series"},itemStyle:{color:$c.fade(e[a],.9),borderRadius:3},data:i[a]})}),this.chartOption.legend.data=s,this.chartOption.series=r,this.chartOption.yAxis.data=t},processOption(){this.chartOption={update:!1,tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{orient:"vertical",itemWidth:14,itemHeight:5,itemGap:5,right:"10",top:"10"},grid:{left:"5%",right:"10%",bottom:"8%",top:"25%",containLabel:!0},xAxis:{type:"value",axisLabel:{align:"center",interval:0}},yAxis:{type:"category",axisTick:{show:!1},data:[],axisLine:{show:!1},splitLine:{show:!1},axisLabel:{formatter:"{value}",align:"right"}}},this.processData()},chartTheme(){const{chartData:s,getPalette:e,oriColors:t}=this;s.colors=e({actual:2,pickType:"rdm"})}},mounted(){this.processOption()}};var l=function(){var e=this,t=e._self._c;return t("echartsInit",{attrs:{chartOption:e.chartOption}})},d=[],p=n(c,l,d,!1,null,null,null,null);const g=p.exports;export{g as default};
