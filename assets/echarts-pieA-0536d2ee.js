import{t as n}from"./themeChart-df325d8f.js";import{n as s}from"./index-2766203e.js";const l={components:{},mixins:[n],data(){return{chartData:{legend:["政策落实问题","生产保障差","缺乏创新能力","风险防范缺乏","营商环境差"],colors:[$c.yel3,$c.cbl4,$c.aql4,$c.pul3,$c.rel3],data:[2831.2314,998.3421,731.3451,2341.3521,1132.11]},chartOption:{}}},computed:{},methods:{processData(){let{legend:t,colors:e,data:r}=this.chartData,o=[];t.forEach((d,a)=>{this.chartData.legend[a]=this.$t(`dashboard4x2C.p1.legend${a+1}`),o.push({value:r[a],name:this.$t(`dashboard4x2C.p1.legend${a+1}`),itemStyle:{color:e[a]}})}),this.chartOption.series[0].data=o,this.chartOption.legend.data=t},processOption(){const{getColor:t}=this;this.chartOption={update:!1,tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{show:!1,x:"center",y:"center",width:"100px",data:[]},series:[{name:"数据类别",type:"pie",center:["50%","50%"],radius:["45%","70%"],itemStyle:{borderRadius:10,borderColor:$c.fade($c.bll9,1),borderWidth:2,shadowColor:"rgba(0, 0, 0, 0.5)",shadowBlur:10},label:{fontSize:14,color:t("staFC"),align:"left",padding:4,formatter:function(e){return"{b|"+e.name+`}
{hr|}
{d|`+e.percent.toFixed(1)+"%}"},rich:{b:{fontSize:16,fontWeight:"bold",color:t("staFCS"),align:"left",lineHeight:30},hr:{borderColor:t("staFCW"),width:"100%",borderWidth:1,height:0},d:{fontSize:14,color:t("staFC"),align:"left",lineHeight:30}}},labelLine:{show:!0,length:20,length2:20,lineStyle:{width:1}},data:[]}]},this.processData()},chartTheme(){const{chartData:t,getPalette:e,oriColors:r}=this;t.colors=e({actual:5,pickType:"seq",palette:"alt"})}},mounted(){this.processOption()}};var i=function(){var e=this,r=e._self._c;return r("echartsInit",{attrs:{chartOption:e.chartOption}})},c=[],h=s(l,i,c,!1,null,null,null,null);const f=h.exports;export{f as default};
