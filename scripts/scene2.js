var bangladesh_scene2 = [27.7,67.14,5.16];
var brazil_scene2 = [21.33,69.75,8.92];
var china_scene2 = [17.88,71.2,10.92];
var india_scene2 = [27.05,66.77,6.18];
var indonesia_scene2 = [26.55,67.59,5.86];
var nigeria_scene2 = [43.87,53.39,2.74];
var pakistan_scene2 = [35.27,60.42,4.31];
var russia_scene2 = [17.91,67.41,14.68];
var us_scene2 = [18.71,65.48,15.81];
var world_scene2 = [25.8,65.33,8.87];      
var roworld_scene2 = [28.1,62.65,9.25];
var labels_scene2 = ["Ages 0-14","Ages 15-64","Ages 65 and above"];
var color_scene2 = d3.scaleOrdinal()
  .domain(["Ages 0-14","Ages 15-64","Ages 65 and above"])  
  .range(d3.schemeCategory10);


function updateChart_Scene2(data_scene2) {
    var pie_scene2 = d3.pie();
    var arc_scene2 = d3.arc().innerRadius(90).outerRadius(120);
    d3.select('#svg2').select('g').remove();
    var g_scene2 = d3.select('#svg2')
    .append("g")
    .attr("transform","translate(300,200)");
    var chart_scene2 = g_scene2.selectAll("path").data(pie_scene2(data_scene2));
    chart_scene2.enter()
    .append("path")
    .attr("d",arc_scene2)
    .attr("fill",function(d,i) {return color_scene2(labels_scene2[i]);});
    g_scene2.selectAll("text")
    .data(pie_scene2(data_scene2))
    .enter()
    .append("text")
    .text(function(d,i) {return labels_scene2[i]+" "+data_scene2[i]+"%";})
    .attr("transform", function(d,i) {
        var pos_scene2 = arc.centroid(d);
        switch(labels_scene2[i]) {
          case "Ages 0-14":
              pos_scene2[0] = pos_scene2[0]-190;
              pos_scene2[1] = pos_scene2[1]-10;
              break;      
          case "Ages 15-64":
              pos_scene2[0] = pos_scene2[0]+90;
              pos_scene2[1] = pos_scene2[1]-30;
              break;
          case "Ages 65 and above":
              pos_scene2[0] = pos_scene2[0]-75;
              pos_scene2[1] = pos_scene2[1]-90;
              break;                                        
        }
        return "translate("+pos_scene2+")";
        });    
}

updateChart_Scene2(world_scene2);

d3.select('#country')
  .on('change', function() {
    var data_scene2 = eval(d3.select(this).property('value'));
    updateChart_Scene2(data_scene2);
  });