var data = [18.34,17.81,4.3,3.53,2.79,2.76,2.58,2.13,1.9,43.86]            
var labels = ["China","India","United States","Indonesia","Pakistan","Brazil","Nigeria","Bangladesh","Russia","Rest of World"];
var color = d3.scaleOrdinal()
    .domain(["China","India","United States","Indonesia","Pakistan","Brazil","Nigeria","Bangladesh","Russia","Rest of World"])  
    .range(d3.schemeCategory10);
var pie = d3.pie();
var arc = d3.arc().innerRadius(0).outerRadius(126);
var g = d3.select('#svg1')
    .append("g")
    .attr("transform","translate(450,200)");

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
        pos[0] = 120 * 1.2 * (midAngle(d) < Math.PI ? 1 : -1);
        pos[1] = pos[1] * 2.5;
        switch(labels[i]) {
            case "Nigeria":
                pos[0] = pos[0];
                pos[1] = pos[1]*1.1;
                break;
            case "Brazil":
                pos[0] = pos[0];
                pos[1] = pos[1]*1.05;
                break;    
            case "Bangladesh":
                pos[0] = pos[0]*-1;
                pos[1] = pos[1]*1.07;
                break;
            case "Russia":
                pos[0] = pos[0]*-1;
                pos[1] = (pos[1]*1.2)+45;
                break;
        }
        return 'translate(' + pos + ')';
        })
        .style('text-anchor', function(d) {
        return (midAngle(d)) < 3 ? 'start' : 'end';
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
            posA[0] = posA[0]+59;
            posA[1] = posA[1]+50;
            posB[0] = posB[0]+75;
            posB[1] = posB[1]+50;
            posC[0] = posC[0]+90;
            posC[1] = posC[1]-10;
            break;      
        case "China":
            posA[0] = posA[0]-20;
            posA[1] = posA[1]+60;
            posB[0] = posB[0]-30;
            posB[1] = posB[1]+90;
            posC[0] = posC[0]-128;
            posC[1] = posC[1]+90;            
            break;
        case "India":
            posA[0] = posA[0]-64;
            posA[1] = posA[1]-20;
            posB[0] = posB[0]-90;
            posB[1] = posB[1]-20;
            posC[0] = posC[0]-120;
            posC[1] = posC[1]+6;            
            break;      
        case "United States":
            posA[0] = posA[0]-60;
            posA[1] = posA[1]-23;
            posB[0] = posB[0]-90;
            posB[1] = posB[1]-23;
            posC[0] = posC[0]-120;
            posC[1] = posC[1]-36;            
            break;
        case "Indonesia":
            posA[0] = posA[0]-51;
            posA[1] = posA[1]-39;
            posB[0] = posB[0]-69;
            posB[1] = posB[1]-65;
            posC[0] = posC[0]-90;
            posC[1] = posC[1]-65;             
            break;      
        case "Pakistan":
            posA[0] = posA[0]-41;
            posA[1] = posA[1]-50;
            posB[0] = posB[0]-69;
            posB[1] = posB[1]-75;
            posC[0] = posC[0]-100;
            posC[1] = posC[1]-75;            
            break;
        case "Brazil":
            posA[0] = posA[0]-30;
            posA[1] = posA[1]-54;
            posB[0] = posB[0]-69;
            posB[1] = posB[1]-95;
            posC[0] = posC[0]-108;
            posC[1] = posC[1]-95;            
            break;      
        case "Nigeria":
            posA[0] = posA[0]-25;
            posA[1] = posA[1]-59;
            posB[0] = posB[0]-69;
            posB[1] = posB[1]-110;
            posC[0] = posC[0]-118;
            posC[1] = posC[1]-110;
            break;
        case "Bangladesh":
            posA[0] = posA[0]-12;
            posA[1] = posA[1]-63;
            posB[0] = posB[0];
            posB[1] = posB[1]-110;
            posC[0] = posC[0]+30;
            posC[1] = posC[1]-110;
            break;      
        case "Russia":
            posA[0] = posA[0]-5;
            posA[1] = posA[1]-63;
            posB[0] = posB[0]+20;
            posB[1] = posB[1]-87;
            posC[0] = posC[0]+60;
            posC[1] = posC[1]-87;            
            break;                                  
        } 
    return [posA, posB, posC];
});

g.append("polyline")
.style("stroke","brown")
.style("fill","none")
.style("stroke-width","0.75px")
.attr("points",[-250,-60,-250,-60,-330,-20]);

g.append("polyline")
.style("stroke","brown")
.style("fill","none")
.style("stroke-width","0.75px")
.attr("points",[-240,30,-240,30,-310,10]);

g.append("polyline")
.style("stroke","brown")
.style("fill","none")
.style("stroke-width","0.75px")
.attr("points",[-245,150,-245,150,-330,10]);

g.append("text")
.text("China, India and US contribute")
.attr("transform","translate(-420,-10)")
.style("font-size","16px")
.style("fill","brown");

g.append("text")
.text("to 40% of world's population!")
.attr("transform","translate(-420,5)")
.style("font-size","16px")
.style("fill","brown");

/*const annotations = [
    {
        note: {
            label: "Top 3 countries",
            title: "Fact1"
        },
        x:100,
        y:100,
        dy:100,
        dx:100
    }
];
const makeAnnotations = d3.annotation().annotations(annotations);
d3.select('#svg1')
    .append("g")
    .call(makeAnnotations);*/

function midAngle(d) {
    return d.startAngle+(d.endAngle-d.startAngle)/2; } 