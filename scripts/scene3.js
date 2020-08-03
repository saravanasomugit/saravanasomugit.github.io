var bangladesh_scene3 = [49.39,50.61];
var brazil_scene3 = [50.83,49.17];
var china_scene3 = [48.68,51.32];
var india_scene3 = [48.02,51.98];
var indonesia_scene3 = [49.64,50.36];
var nigeria_scene3 = [49.34,50.66];
var pakistan_scene3 = [48.54,51.46];
var russia_scene3 = [53.66,46.34];
var us_scene3 = [50.52,49.48];
var world_scene3 = [49.58,50.42];      
var roworld_scene3 = [50.34,49.66];
var labels_scene3 = ["Female","Male"];
var color_scene3 = d3.scaleOrdinal()
  .domain(["Female","Male"])  
  .range(d3.schemeCategory10);


function updateChart_scene3(data_scene3) {
    var pie_scene3 = d3.pie();
    var arc_scene3 = d3.arc().innerRadius(0).outerRadius(120);
    d3.select('#svg3').select('g').remove();
    var g_scene3 = d3.select('#svg3')
    .append("g")
    .attr("transform","translate(450,200)");
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
        var pos = arc.centroid(d);
        switch(labels_scene3[i]) {
          case "Male":
              pos[0] = pos[0]-100;
              pos[1] = pos[1];
              break;      
          case "Female":
              pos[0] = pos[0]+150;
              pos[1] = pos[1];
              break;                                      
        }
        pos = arc.centroid(d);
        pos[0] = 120 * 1.1 * (midAngle_scene3(d) < Math.PI ? 1 : -1);
        pos[1] = pos[1] * 2.5;
        return "translate("+pos+")";
        })
        .style('text-anchor', function(d) {
            return (midAngle_scene3(d)) < 3 ? 'start' : 'end';
        }); 
        
        g_scene3.append("text")
        .text("Generally, %share of Female and Male are pretty equal")
        .attr("transform","translate(-120,-175)")
        .style("font-size","16px")
        .style("fill","brown");

        g_scene3.append("text")
        .text("for most of the countries in this group")
        .attr("transform","translate(-120,-155)")
        .style("font-size","16px")
        .style("fill","brown");        

        if(data_scene3 == russia_scene3) {
            g_scene3.append("text")
            .text("For Russia, %share of Female population is around 7%")
            .attr("transform","translate(-120,140)")
            .style("font-size","16px")
            .style("fill","brown");
    
            g_scene3.append("text")
            .text("higher than the %share of male population")
            .attr("transform","translate(-120,160)")
            .style("font-size","16px")
            .style("fill","brown");              
        }
}

updateChart_scene3(world_scene3);

d3.select('#country1')
  .on('change', function() {
    var data_scene3 = eval(d3.select(this).property('value'));
    updateChart_scene3(data_scene3);
  });

  function midAngle_scene3(d) {
    return d.startAngle+(d.endAngle-d.startAngle)/2; }   