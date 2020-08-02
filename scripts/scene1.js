/*var data = {"China": 18.34,
            "India": 17.81,
            "United States": 4.3,
            "Indonesia": 3.53,
            "Pakistan": 2.79,
            "Brazil": 2.76,
            "Nigeria": 2.58,
            "Bangladesh": 2.13,
            "Russia": 1.9,
            "Rest of World": 43.86};*/
var data = [18.34,17.81,4.3,3.53,2.79,2.76,2.58,2.13,1.9,43.86]            
var labels = ["China","India","United States","Indonesia","Pakistan","Brazil","Nigeria","Bangladesh","Russia","Rest of World"];
var color = d3.scaleOrdinal()
  .domain(["China","India","United States","Indonesia","Pakistan","Brazil","Nigeria","Bangladesh","Russia","Rest of World"])  
  .range(d3.schemeCategory10);
//var color = ['green','yellow','red','pink','orange','cyan','blue','lightgreen','lightred','violet','lightblue','brown'];
var pie = d3.pie();
var arc = d3.arc().innerRadius(0).outerRadius(120);
var g = d3.select('#svg1')
  .append("g")
  .attr("transform","translate(300,200)");

g.selectAll("path")
 .data(pie(data))
 .enter()
 .append("path")
 .attr("d",arc)
 .attr("fill",function(d,i) {return color(labels[i]);});

g.selectAll("text")
 .data(pie(data))
 .enter()
 .append("text")
 .text(function(d,i) {return labels[i]+" "+data[i]+"%";})
 .attr("transform", function(d,i) {
     var pos = arc.centroid(d);
     switch(labels[i]) {
       case "Rest of World":
           pos[0] = pos[0]+75;
           break;      
       case "China":
           pos[0] = pos[0]-100;
           pos[1] = pos[1]+90;
           break;
       case "India":
           pos[0] = pos[0]-160;
           pos[1] = pos[1]+30;
           break;      
       case "United States":
           pos[0] = pos[0]-200;
           pos[1] = pos[1]-20;
           break;
       case "Indonesia":
           pos[0] = pos[0]-175;
           pos[1] = pos[1]-40;
           break;      
       case "Pakistan":
           pos[0] = pos[0]-150;
           pos[1] = pos[1]-60;
           break;
       case "Brazil":
           pos[0] = pos[0]-125;
           pos[1] = pos[1]-81;
           break;      
       case "Nigeria":
           pos[0] = pos[0]-100;
           pos[1] = pos[1]-100;
           break;
       case "Bangladesh":
           pos[0] = pos[0]+20;
           pos[1] = pos[1]-100;
           break;      
       case "Russia":
           pos[0] = pos[0]+70;
           pos[1] = pos[1]-70;
           break;                                  
     }
     pos = arc.centroid(d);
     pos[0] = 120 * 1.2 * (midAngle(d) < Math.PI ? 1 : -1);
     pos[1] = pos[1] * 2.5;
     return 'translate(' + pos + ')';
     })
     .style('text-anchor', function(d) {
        return (midAngle(d)) < Math.PI ? 'start' : 'end';
    });

g.selectAll("polylines")
.data(pie(data))
.enter()
.append("polyline")
.style("stroke","gray")
.style("fill","none")
.style("stroke-width","0.75px")
.attr("points",function(d,i){
    var posA = arc.centroid(d);
    var posB = arc.centroid(d);
    var posC = arc.centroid(d);
    switch(labels[i]) {
        case "Rest of World":
            posA[0] = posA[0]+52;
            posA[1] = posA[1]+50;
            posB[0] = posB[0]+75;
            posB[1] = posB[1]+50;
            posC[0] = posC[0]+90;
            posC[1] = posC[1]+5;
            break;      
        case "China":
            posA[0] = posA[0]-40;
            posA[1] = posA[1]+50;
            posB[0] = posB[0]-40;
            posB[1] = posB[1]+50;
            posC[0] = posC[0]-60;
            posC[1] = posC[1]+75;            
            break;
        case "India":
            posA[0] = posA[0]-60;
            posA[1] = posA[1]-20;
            posB[0] = posB[0]-60;
            posB[1] = posB[1]-20;
            posC[0] = posC[0]-100;
            posC[1] = posC[1]+10;            
            break;      
        case "United States":
            break;
        case "Indonesia":
            break;      
        case "Pakistan":
            break;
        case "Brazil":
            break;      
        case "Nigeria":
            break;
        case "Bangladesh":
            break;      
        case "Russia":
            break;                                  
      }    
    return [posA, posB, posC];
});

function midAngle(d) { return d.startAngle + (d.endAngle - d.startAngle) / 2; } 