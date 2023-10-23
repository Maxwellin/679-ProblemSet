//Part a.
let generator = d3.randomUniform();
let x = d3.range(10).map(generator);
const numCircles = 10;
const svg = d3.select("svg");

svg.selectAll("circle")
   .data(x)
   .enter()
   .append("circle")
   //.attr("cx", (d, i) => i * 40 + 30)
   .attr("cx", d => d * 300 + 30)
   .attr("cy", 100)
   .attr("r", 10);
