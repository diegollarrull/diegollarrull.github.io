var w = 350,
	h = 350;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = ["Data Science Certification", "IDSE (master)", "Statistics (master)", "Others"];



d_christopher = [
  [
    {axis: "R standard / ggplot", value: 1},
    {axis: "Spatial Visualization", value: 3},
    {axis: "Statistical Learning", value: 3},
    {axis: "Exploratory Analysis", value: 5},
    {axis: "Talkativeness", value: 4},
    {axis: "Research", value: 4}
  ]];

d_junhui = [
  [
    {axis: "R standard / ggplot", value: 5},
    {axis: "Spatial Visualization", value: 2},
    {axis: "Statistical Learning", value: 4},
    {axis: "Exploratory Analysis", value: 2},
    {axis: "Talkativeness", value: 2},
    {axis: "Research", value: 4}
  ]];
  

d_ryan = [
  [
    {axis: "R standard / ggplot", value: 4},
    {axis: "Spatial Visualization", value: 5},
    {axis: "Statistical Learning", value: 5},
    {axis: "Exploratory Analysis", value: 2},
    {axis: "Talkativeness", value: 3},
    {axis: "Research", value: 3}
  ]];
d_diego = [
  [
    {axis: "R standard / ggplot", value: 2},
    {axis: "Spatial Visualization", value: 1},
    {axis: "Statistical Learning", value: 2},
    {axis: "Exploratory Analysis", value: 3},
    {axis: "Talkativeness", value: 5},
    {axis: "Research", value: 4}
  ]];
d_qianyi = [
  [
    {axis: "R standard / ggplot", value: 5},
    {axis: "Spatial Visualization", value: 2},
    {axis: "Statistical Learning", value: 4},
    {axis: "Exploratory Analysis", value: 4},
    {axis: "Talkativeness", value: 2},
    {axis: "Research", value: 5}
  ]];
d_yusen = [
  [
    {axis: "R standard / ggplot", value: 4},
    {axis: "Spatial Visualization", value: 3},
    {axis: "Statistical Learning", value: 4},
    {axis: "Exploratory Analysis", value: 3},
    {axis: "Talkativeness", value: 3},
    {axis: "Research", value: 4}
  ]
];

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 6,
  levels: 6,
  ExtraWidthX: 220,
  ExtraWidthY: 100
}
var mycfg = JSON.parse(JSON.stringify(mycfg)),
  mycfg_diego = JSON.parse(JSON.stringify(mycfg)),
  mycfg_ryan = JSON.parse(JSON.stringify(mycfg)),
  mycfg_yusen = JSON.parse(JSON.stringify(mycfg)),
  mycfg_qianyi = JSON.parse(JSON.stringify(mycfg)),
  mycfg_christopher = JSON.parse(JSON.stringify(mycfg)),
  mycfg_junhui = JSON.parse(JSON.stringify(mycfg));

mycfg_diego.color = d3.scale.ordinal().range(['#1F77B4']);
mycfg_ryan.color = d3.scale.ordinal().range(['#FF7F0E']);
mycfg_yusen.color = d3.scale.ordinal().range(['#2CA02C']);
mycfg_qianyi.color = d3.scale.ordinal().range(['#D62728']);
mycfg_christopher.color = d3.scale.ordinal().range(['#363728']);
mycfg_junhui.color = d3.scale.ordinal().range(['#462458']);


//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart1", d_diego, mycfg_diego);
RadarChart.draw("#chart2", d_ryan, mycfg_ryan);
RadarChart.draw("#chart3", d_christopher, mycfg_christopher);
RadarChart.draw("#chart4", d_junhui, mycfg_junhui);
RadarChart.draw("#chart5", d_yusen, mycfg_yusen);
RadarChart.draw("#chart6", d_qianyi, mycfg_qianyi);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#combined')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+300)
	.attr("height", h)

//Create the title for the legend
var text = svg.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)') 
	.attr("x", w - 50)
	.attr("y", 10)
	.attr("font-size", "12px")
	.attr("fill", "#404040")
	.text("Program Enrolled	");
		
//Initiate Legend	
var legend = svg.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(90,20)') 
	;
	//Create colour squares
	legend.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w - 45)
	  .attr("y", function(d, i){ return i * 20;})
	  .attr("width", 10)
	  .attr("height", 10)
	  .style("fill", function(d, i){ return colorscale(i);})
	  ;
	//Create text next to squares
	legend.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w - 32)
	  .attr("y", function(d, i){ return i * 20 + 9;})
	  .attr("font-size", "11px")
	  .attr("fill", "#737373")
	  .text(function(d) { return d; })
	  ;	