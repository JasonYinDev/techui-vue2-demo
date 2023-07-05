import{n as v,_ as b}from"./index-e5c47b2c.js";import{t as y}from"./themeChart-df325d8f.js";import{m as g}from"./api-0c0121c1.js";let C="path://m172.27,501.67C26.97,291.03,0,269.41,0,192,0,85.96,85.96,0,192,0s192,85.96,192,192c0,77.41-26.97,99.03-172.27,309.67-9.54,13.77-29.93,13.77-39.46,0h0Zm19.73-229.67c44.18,0,80-35.82,80-80s-35.82-80-80-80-80,35.82-80,80,35.82,80,80,80Z";const _={mixins:[y],components:{mapPopover:()=>b(()=>import("./map-popover-6bd075a2.js"),["assets/map-popover-6bd075a2.js","assets/index-e5c47b2c.js","assets/index-ff56af40.css","assets/map-popover-e2ab1a87.css"]),mapViewToggle:()=>b(()=>import("./map-viewToggle-ba4afe02.js"),["assets/map-viewToggle-ba4afe02.js","assets/index-e5c47b2c.js","assets/index-ff56af40.css","assets/map-viewToggle-13399c52.css"])},data(){return{mapInited:!1,view:{data:[{title:"矿山分布",label:"data1"},{title:"执法完成",label:"data2"},{title:"风险分布",label:"data3"},{title:"区域分布",label:"data4"}],current:"data1"},chartData:{alladcode:[],geoJson:{},visualMapColors:[$c.cyA16,$c.cbA17,$c.blA18],mapData:[],pointData:[],sum:0,nav:{data:[{code:21e4,name:this.$t("map.navRoot")}],show:!1},maxData:500,minData:9,maxPin:45,minPin:20,layoutCenter:[["50%","66%"],["50%","50%"]],layoutSize:["100%","80%"],visualMapPos:{right:"3%",bottom:"5%"}},chartOption:{update:!1},clickData:{show:!1,area:"北京",data:"325",x:120,y:120}}},computed:{publicUrl(){return`./static/maps/${this.globalConfig.language}/`},pinColor(){const{view:t}=this;if(t.current=="data1")return[$c.aql2,$c.aql5,$c.bll7];if(t.current=="data2")return[$c.cbl3,$c.cyl5,$c.wh];if(t.current=="data3")return[$c.orl3,$c.rel5,$c.wh];if(t.current=="data4")return[$c.pul3,$c.inl6,$c.wh]},mapCenter(){const{chartData:t}=this,{layoutCenter:a}=t;return t.nav.data[t.nav.data.length-1].name=="全国"?a[0]:a[1]},mapSize(){const{chartData:t}=this,{layoutSize:a}=t;return t.nav.data[t.nav.data.length-1].name=="全国"?a[0]:a[1]}},watch:{},methods:{changeView(t){let a=this.chartData.nav.data;this.view.current=t.label,this.clickData.show=!1,this.getMapData(a[a.length-1])},processMapData(t){const{getColor:a,chartData:s,chartOption:i,processTimeLine:c}=this,{mapData:r,pointData:o,sum:l,navDept:m,maxData:e,minData:u,maxPin:p,minPin:D}=s;let f=[];f.push({geo3DIndex:0,geoIndex:0,type:"map3D",roam:!1,zlevel:3,map:t.name,symbolSize:0,boxHeight:10,boxWidth:200,regionHeight:4,shading:"lambert",viewControl:{autoRotateAfterStill:13,minBeta:-180,maxBeta:180,center:[0,-50,-20],beta:5,alpha:50,distance:260,rotateMouseButton:"left",panMouseButton:"right",panSensitivity:1,animationDurationUpdate:1e3,animationEasingUpdate:"cubicInOut"},realisticMaterial:{detailTexture:"#fff",textureTiling:1,roughness:0,metalness:0,roughnessAdjust:0},emphasis:{disabled:!1,label:{show:!1,color:a("staFCWr"),fontSize:16},itemStyle:{color:a("mapBGHA")}},label:{show:!1,position:"top",color:a("staFCSr"),fontSize:14,distance:50,formatter:n=>{switch(n.name){case"内蒙古自治区":n.name="内蒙古";break;case"西藏自治区":n.name="西藏";break;case"新疆维吾尔自治区":n.name="新疆";break;case"宁夏回族自治区":n.name="宁夏";break;case"广西壮族自治区":n.name="广西";break;case"香港特别行政区":n.name="香港";break;case"澳门特别行政区":n.name="澳门";break}return`
`+n.name}},light:{main:{color:"#fff",intensity:1,shadowQuality:"high",shadow:!0,shadowQuality:"medium",alpha:100,beta:10},ambient:{intensity:.7}},itemStyle:{color:a("mapBGA"),borderColor:a("mapBGB"),opacity:1,borderWidth:.4,shadowColor:a("mapSD")},data:r},{roam:!1,silent:!0,type:"scatter3D",coordinateSystem:"geo3D",zlevel:90,geo3DIndex:3,geoIndex:3,zlevel:3,shading:"lambert",symbol:C,symbolSize:n=>{var h=(p-D)/(e-u),d=p-h*u;return d=p-h*e,[h*n[3]+d*1,h*n[3]+d*1.2]},label:{show:!0,position:"top",distance:0,color:this.pinColor[1],fontSize:14,formatter:n=>n.data.value[3]},silent:!0,emphasis:{label:{fontSize:14,color:this.pinColor[2],fontWeight:"bold"}},itemStyle:{color:this.pinColor[1]},data:o}),i.series=f,this.mapInited=!0},processOption(t){if(!t){let e=this.chartData.nav.data;t=e[e.length-1]}const{mapCenter:a,mapSize:s,chartData:i,chartOption:c,processMapData:r,getColor:o}=this,{visualMapPos:l}=i;let m={title:{show:!1,text:t.name,left:"center"},geo3D:{map:t.name,silent:!0,boxHeight:8,boxWidth:200,regionHeight:0,regions:[{name:"北京市",height:5},{name:"重庆市",height:5}],viewControl:{autoRotateAfterStill:13,minBeta:-180,maxBeta:180,center:[0,-50,-20],beta:5,alpha:50,distance:260,rotateMouseButton:"left",panMouseButton:"right",panSensitivity:1,animationDurationUpdate:1e3,animationEasingUpdate:"cubicInOut"},label:{show:!0,position:"top",color:o("staFCSr"),fontSize:14,distance:.8,formatter:e=>{switch(e.name){case"内蒙古自治区":e.name="内蒙古";break;case"西藏自治区":e.name="西藏";break;case"新疆维吾尔自治区":e.name="新疆";break;case"宁夏回族自治区":e.name="宁夏";break;case"广西壮族自治区":e.name="广西";break;case"香港特别行政区":e.name="香港";break;case"澳门特别行政区":e.name="澳门";break}return`
`+e.name}},emphasis:{disabled:!1,label:{show:!0,color:o("staFCWr"),fontSize:16},itemStyle:{color:o("mapBGHA")}},light:{main:{color:"#fff",intensity:1,shadowQuality:"high",shadow:!0,shadowQuality:"medium",alpha:100,beta:10},ambient:{intensity:.7}},itemStyle:{show:!0,color:o("mapBGA"),borderColor:"rgba(0,0,0,0)",opacity:1,borderWidth:.4},instancing:!0,zlevel:-1},series:[]};m.visualMap={seriesIndex:0,right:l.right,bottom:l.bottom,min:0,max:500,inRange:{color:i.visualMapColors},textStyle:{color:o("staFC")},calculable:!0};for(let e in m)c[e]=m[e];c.update=!0,r(t)},getMapData(t){const{chartData:a,processOption:s}=this;let i=[],c=[],r=0;a.geoJson.features.forEach(o=>{if(o.properties.name){let l=(Math.random()*500).toFixed(0);i.push({name:o.properties.name,value:l,cityCode:parseInt(o.properties.adcode)}),o.properties.center&&c.push({name:o.properties.name,value:[o.properties.center[0],o.properties.center[1],1,l],cityCode:parseInt(o.properties.adcode)}),r+=l}}),a.mapData=i,a.pointData=c,a.sum=r,s(t)},async initChart(t){const{chartData:a,getMapData:s}=this;a.alladcode.length==0&&await g(this.publicUrl,"all.json").then(i=>{a.alladcode=i}).catch(function(i){console.error("getmap",i)}),await g(this.publicUrl,t.code+"_geojson_full.json").then(i=>{a.geoJson={...i,...t}}).catch(function(i){console.error("getmap",i)}),s(t)},mapAction(t){const{clickData:a}=this;a.show=!1},mapClick(t){var o;const{clickData:a}=this,{alladcode:s,initChart:i,nav:c}=this.chartData,r=c.data;if(a.show=!1,r[r.length-1].name!=t.name)if(t.componentType=="geo"||t.componentType=="series"&&t.componentSubType=="map"){let l=(o=s.filter(e=>e.name===t.name)[0])==null?void 0:o.adcode,m={code:l,name:t.name};r[r.length-1].name!=t.name&&r.length<2&&(this.initChart(m),r.push({code:l,name:t.name}))}else t.code&&this.initChart(t);t.componentType=="series"&&t.componentSubType=="scatter"&&(a.area=t.name,a.data=t.data.value[2],a.x=t.domPosition[0],a.y=t.domPosition[1],a.show=!0)},chartTheme(){let t=this.themePalette.chart.visual;this.chartData.visualMapColors=this.getPalette({total:10,actual:5,palette:t,extra:["fade",1]})}},mounted(){const{chartData:t}=this;this.initChart(t.nav.data[0])},beforeDestroy(){},destroyed(){}};var w=function(){var a=this,s=a._self._c;return s("div",{staticClass:"map-wrap map3D-simple"},[s("mapPopover",{attrs:{clickData:a.clickData}}),a.mapInited?s("echartsMap",{staticClass:"echartsMap",attrs:{chartOption:a.chartOption,chartData:a.chartData},on:{mapClick:a.mapClick,mapAction:a.mapAction}}):a._e()],1)},x=[],S=v(_,w,x,!1,null,null,null,null);const $=S.exports;export{$ as default};