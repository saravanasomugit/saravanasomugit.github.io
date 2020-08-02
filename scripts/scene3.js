var bangladesh_scene3 = [49.39,50.61];
var brazil_scene3 = [50.83,49.17];
var china_scene3 = [48.68,51.32];
var india_scene3 = [50,50];
var indonesia_scene3 = [50,50];
var nigeria_scene3 = [50,50];
var pakistan_scene3 = [50,50];
var russia_scene3 = [50,50];
var us_scene3 = [50,50];
var world_scene3 = [50,50];      
var roworld_scene3 = [50,50];
var labels_scene3 = ["Male","Female"];
var color_scene3 = d3.scaleOrdinal()
  .domain(["Male","Female"])  
  .range(d3.schemeCategory10);


function updateChart_scene3(data_scene3) {
    var pie_scene3 = d3.pie();
    var arc_scene3 = d3.arc().innerRadius(0).outerRadius(120);
    d3.select('#svg3').select('g').remove();
    var g_scene3 = d3.select('#svg3')
    .append("g")
    .attr("transform","translate(300,200)");
    var chart_scene3 = g_scene3.selectAll("path").data(pie_scene3(data_scene3));
    chart_scene3.enter()
    .append("path")
    .attr("d",arc_scene3)
    .attr("fill",function(d,i) {return color_scene3(labels_scene3[i]);});
    g_scene3.selectAll("text")
    .data(pie_scene3(data_scene3))
    .enter()
    .append("text")
    .text(function(d,i) {return labels_scene3[i]+"\n"+data_scene3[i]+"%";})
    .attr("transform", function(d,i) {
        var pos_scene3 = arc.centroid(d);
        switch(labels_scene3[i]) {
          case "Male":
              break;      
          case "Female":
              break;                                      
        }
        return "translate("+pos_scene3+")";
        });    
}

updateChart_scene3(world_scene3);

d3.select('#country1')
  .on('change', function() {
    var data_scene3 = eval(d3.select(this).property('value'));
    updateChart_scene3(data_scene3);
  });