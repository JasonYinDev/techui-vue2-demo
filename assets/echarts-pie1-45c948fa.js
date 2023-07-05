import{t as s}from"./themeChart-df325d8f.js";import{n}from"./index-beda625d.js";const i={components:{},mixins:[s],data(){return{select:{options:[{value:"a",label:"全年"},{value:"b",label:"去年"},{value:"c",label:"2022年1月"},{value:"d",label:"2022年2月"},{value:"e",label:"2022年3月"},{value:"f",label:"2022年4月"},{value:"g",label:"2022年5月"}],current:"a"},counter:{title:"合同总额",num:1723},chartData:{legend:["产品合同","MA续保合同","技术服务合同","硬件合同","实施合同"],colors:[$c.yel3,$c.cbl4,$c.aql4,$c.pul3,$c.rel3],data:[2831.2314,998.3421,731.3451,2341.3521,1132.11]},chartOption:{}}},watch:{"select.current"(a,t){let e=this.randomData({min:100,max:500,length:5,group:1}),l=0;this.chartData.data=e[0],e[0].forEach((o,r)=>{l+=o}),this.counter.num=l,this.processData(),this.chartOption.update=!0}},computed:{},methods:{processData(){let{legend:a,colors:t,data:e}=this.chartData,l=[];this.select.options.forEach((o,r)=>{o.label=this.$t(`dashboardE.b4.select${r+1}`)}),a.forEach((o,r)=>{this.chartData.legend[r]=this.$t(`dashboardE.b4.legend${r+1}`),l.push({name:this.$t(`dashboardE.b4.legend${r+1}`),value:e[r],itemStyle:{color:t[r]}})}),this.chartOption.series[0].data=l,this.chartOption.legend.data=a},processOption(){const{getColor:a}=this;this.chartOption={update:!1,title:{text:this.$t("dashboardE.b4.unit"),left:10,top:10,textStyle:{color:a("staFC"),fontSize:12,fontWeight:"normal"}},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{show:!1,x:"center",y:"center",width:"100px",data:[]},series:[{name:"数据类别",type:"pie",center:["50%","50%"],radius:["50%","70%"],itemStyle:{borderRadius:10,borderColor:$c.fade($c.bll9,1),borderWidth:2,shadowColor:"rgba(0, 0, 0, 0.5)",shadowBlur:10},label:{fontSize:14,color:a("staFC"),align:"left",padding:4,formatter:function(t){return"{b|"+t.name+`}
{hr|}
{d|`+t.percent.toFixed(1)+"%}"},rich:{b:{fontSize:16,fontWeight:"bold",color:$c.cyl5,align:"left",lineHeight:30},hr:{borderColor:a("staFC"),width:"100%",borderWidth:1,height:0},d:{fontSize:14,color:a("staFC"),align:"left",lineHeight:30},c:{fontSize:14,color:$c.cyl3,align:"center",padding:4}}},labelLine:{show:!0,length:20,length2:20,lineStyle:{width:1}},data:[]}]},this.processData()},chartTheme(){const{chartData:a,getPalette:t,oriColors:e}=this;a.colors=t({actual:5,total:10,palette:"alt"})}},mounted(){this.processOption()}};var c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"dashboardC-pie1-wrap echarts-hasSelect"},[e("div",{staticClass:"total-digital"},[e("span",{staticClass:"desc"},[t._v(t._s(t.$t("dashboardE.b4.total")))]),e("DigitalTransform",{staticClass:"counter",attrs:{value:t.counter.num,interval:t.globalConfig.animation?1e3:0,dislocation:!1}})],1),e("el-select",{staticStyle:{width:"120px"},attrs:{size:"mini",filterable:"",placeholder:"选择时间范围","popper-append-to-body":!1},model:{value:t.select.current,callback:function(l){t.$set(t.select,"current",l)},expression:"select.current"}},t._l(t.select.options,function(l){return e("el-option",{key:l.value,attrs:{label:l.label,value:l.value}})}),1),e("echartsInit",{attrs:{chartOption:t.chartOption}})],1)},d=[],h=n(i,c,d,!1,null,null,null,null);const b=h.exports;export{b as default};