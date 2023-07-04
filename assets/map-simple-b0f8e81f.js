import{n as g,_ as u}from"./index-2766203e.js";import{t as y}from"./themeChart-df325d8f.js";import{m as v}from"./api-0c0121c1.js";const b={mixins:[y],components:{mapPopover:()=>u(()=>import("./map-popover-715a3fe5.js"),["assets/map-popover-715a3fe5.js","assets/index-2766203e.js","assets/index-ff56af40.css","assets/map-popover-eb92adb7.css"]),mapCounter:()=>u(()=>import("./map-counter-590ac015.js"),["assets/map-counter-590ac015.js","assets/index-2766203e.js","assets/index-ff56af40.css","assets/map-counter-2c441136.css"]),mapViewToggle:()=>u(()=>import("./map-viewToggle-ff93ffd3.js"),["assets/map-viewToggle-ff93ffd3.js","assets/index-2766203e.js","assets/index-ff56af40.css","assets/map-viewToggle-9c5a483d.css"])},data(){return{mapInited:!1,view:{data:[{title:"矿山分布",label:"data1"},{title:"执法完成",label:"data2"},{title:"风险分布",label:"data3"},{title:"区域分布",label:"data4"}],current:"data1"},chartData:{alladcode:[],geoJson:{},visualMapColors:[$c.cyA16,$c.cbA17,$c.blA18],mapData:[],pointData:[],sum:0,nav:{data:[{code:21e4,name:this.$t("map.navRoot")}],position:{bottom:"36%",left:"27%"}},maxData:500,minData:9,maxPin:45,minPin:20,layoutCenter:[["50%","50%"],["50%","40%"]],layoutSize:["65%","60%"],visualMapPos:{left:"27%",bottom:"40%"}},chartOption:{update:!1},clickData:{show:!1,area:"北京",data:"325",x:120,y:120}}},computed:{publicUrl(){return`./static/maps/${this.globalConfig.language}/`},pinColor(){const{view:t}=this;if(t.current=="data1")return[$c.aql2,$c.cyl5,$c.bll7];if(t.current=="data2")return[$c.cbl3,$c.bll5,$c.wh];if(t.current=="data3")return[$c.orl3,$c.rel5,$c.wh];if(t.current=="data4")return[$c.pul3,$c.inl6,$c.wh]},mapCenter(){const{chartData:t}=this,{layoutCenter:a}=t;return t.nav.data[t.nav.data.length-1].name=="全国"?a[0]:a[1]},mapSize(){const{chartData:t}=this,{layoutSize:a}=t;return t.nav.data[t.nav.data.length-1].name=="全国"?a[0]:a[1]}},watch:{},methods:{changeView(t){let a=this.chartData.nav.data;this.view.current=t.label,this.clickData.show=!1,this.getMapData(a[a.length-1])},processMapData(t){const{chartData:a,chartOption:o,processTimeLine:l}=this,{mapData:c,pointData:i,sum:e,navDept:n,maxData:s,minData:r,maxPin:m,minPin:D}=a;let f=[];this.view.current=="data4"?f.push({data:i,geoIndex:0,type:"map"}):f.push({symbolSize:5,emphasis:{label:{show:!1}},label:{formatter:p=>{var h,d;return(d=(h=p.data)==null?void 0:h.name)==null?void 0:d.replace(/省|壮族自治区|回族自治区|维吾尔自治区|自治区|市|县|自治县|特别行政区|区/,"")},position:"center",align:"center",show:!1,color:$c.wh,fontSize:12},symbolOffset:[0,-10],itemStyle:{color:"#fff"},name:"light",type:"scatter",coordinateSystem:"geo",zlevel:2,data:i},{type:"scatter",symbol:"pin",coordinateSystem:"geo",symbolOffset:[0,-10],large:!0,label:{show:!0,position:"inside",align:"center",color:this.pinColor[2],fontSize:10,formatter:p=>p.data.value[2]},emphasis:{label:{fontSize:14,color:this.pinColor[2],fontWeight:"bold",formatter:function(p){return p.data.value[2]}}},itemStyle:{color:{type:"radial",x:.3,y:.3,r:.5,colorStops:[{offset:0,color:this.pinColor[0]},{offset:1,color:this.pinColor[1]}],global:!1}},symbolSize:p=>{var h=(m-D)/(s-r),d=m-h*r;return d=m-h*s,h*p[2]+d*1.3},data:i,zlevel:2}),o.series=f,this.mapInited=!0},processOption(t){if(!t){let r=this.chartData.nav.data;t=r[r.length-1]}const{mapCenter:a,mapSize:o,chartData:l,chartOption:c,processMapData:i,getColor:e}=this,{visualMapPos:n}=l;let s={title:{show:!1,text:t.name,left:"center"},geo:{type:"map",map:t.name,roam:!0,scaleLimit:{min:.5,max:3},layoutCenter:a,layoutSize:o,zlevel:1,label:{show:!0,color:e("actFC"),fontSize:12,formatter:r=>{var m;return(m=r==null?void 0:r.name)==null?void 0:m.replace(/省|壮族自治区|回族自治区|维吾尔自治区|自治区|市|县|自治县|特别行政区|区/,"")}},itemStyle:{borderColor:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:e("mapBDA")},{offset:1,color:e("mapBDB")}],!1),borderWidth:1,shadowColor:e("mapSD"),shadowOffsetY:0,shadowBlur:20,areaColor:{x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:$c.fade(e("mapBGA"),.5)},{offset:1,color:$c.fade(e("mapBGB"),.5)}]}},select:{label:{color:e("actFCS"),fontSize:14},itemStyle:{areaColor:e("mapBGHA")}},emphasis:{label:{color:e("actFCS"),fontSize:14,show:!0},itemStyle:{areaColor:{x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:$c.fade(e("mapBGHA"),.5)},{offset:1,color:$c.fade(e("mapBGHB"),.5)}]}}}},series:[]};this.view.current=="data4"?s.visualMap={left:n.left,bottom:n.bottom,min:0,max:500,inRange:{color:l.visualMapColors},calculable:!0}:s.visualMap=null;for(let r in s)c[r]=s[r];c.update=!0,i(t)},getMapData(t){const{chartData:a,processOption:o}=this;let l=[],c=[],i=0;a.geoJson.features.forEach(e=>{if(e.properties.name){let n=(Math.random()*500).toFixed(0);l.push({name:e.properties.name,value:n,cityCode:parseInt(e.properties.adcode)}),e.properties.center&&c.push({name:e.properties.name,value:[e.properties.center[0],e.properties.center[1],n],cityCode:parseInt(e.properties.adcode)}),i+=n}}),a.mapData=l,a.pointData=c,a.sum=i,o(t)},async initChart(t){const{chartData:a,getMapData:o}=this;a.alladcode.length==0&&await v(this.publicUrl,"all.json").then(l=>{a.alladcode=l}).catch(function(l){console.error("getmap",l)}),await v(this.publicUrl,t.code+"_geojson_full.json").then(l=>{a.geoJson={...l,...t}}).catch(function(l){console.error("getmap",l)}),o(t)},mapAction(t){const{clickData:a}=this;a.show=!1},mapClick(t){var e;const{clickData:a}=this,{alladcode:o,initChart:l,nav:c}=this.chartData,i=c.data;if(a.show=!1,i[i.length-1].name!=t.name)if(t.componentType=="geo"||t.componentType=="series"&&t.componentSubType=="map"){let n=(e=o.filter(r=>r.name===t.name)[0])==null?void 0:e.adcode,s={code:n,name:t.name};i[i.length-1].name!=t.name&&i.length<2&&(this.initChart(s),i.push({code:n,name:t.name}))}else t.code&&this.initChart(t);t.componentType=="series"&&t.componentSubType=="scatter"&&(a.area=t.name,a.data=t.data.value[2],a.x=t.domPosition[0],a.y=t.domPosition[1],a.show=!0)},chartTheme(){let t=this.themePalette.chart.visual;this.chartData.visualMapColors=this.getPalette({total:15,actual:5,palette:t})}},mounted(){const{chartData:t}=this;this.initChart(t.nav.data[0])},beforeDestroy(){},destroyed(){}};var _=function(){var a=this,o=a._self._c;return o("div",{staticClass:"dashboard4X2A-map"},[o("mapCounter"),o("mapPopover",{attrs:{clickData:a.clickData}}),o("mapViewToggle",{attrs:{view:a.view},on:{changeView:a.changeView}}),a.mapInited?o("echartsMap",{staticClass:"echartsMap",attrs:{chartOption:a.chartOption,chartData:a.chartData},on:{mapClick:a.mapClick,mapAction:a.mapAction}}):a._e()],1)},C=[],w=g(b,_,C,!1,null,null,null,null);const z=w.exports;export{z as default};
