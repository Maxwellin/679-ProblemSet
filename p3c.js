//Part c.
function updateCirclesWithAttributes() {
  //const svg = d3.select("svg");
  //const newX = [/* Your new data here */];
  const svg = d3.select("svg");
  let generator = d3.randomUniform();
  let newX = d3.range(10).map(generator);

  svg.selectAll("circle")
    .data(newX)
    .transition()
    .duration(1000)
    .attr("cx", d=> (d* 300 + 30)*1.2)
    //.attr("cy", (d) => 100 - d * 5)
    .attr("cy", (d) => (d*2+1) * (100*d)+10)
    .attr("r", (d) => d * 10)
    .style("fill", (d) => d3.interpolateViridis(d)); // Change the color
}
// Set a time interval to periodically update the position and other attributes of the circle.
setInterval(updateCirclesWithAttributes, 1000);
