//Part b.
function updateCircles() {
  const svg = d3.select("svg");
  let generator = d3.randomUniform();
  let newX = d3.range(10).map(generator);

  svg.selectAll("circle")
    .data(newX)
    .transition()
    .duration(1000)
    //.attr("cx", (d,i) => i * 40 + 30)
    .attr("cx", d => (d * 300 + 30)*1.2)
    //.attr("cy", d => 100 - d * 5)
    .attr("cy", (d) => (d*2+1) * (100*d)+10)
    .attr("r", d => d * 10);
}

// Set a time interval to periodically update circles
setInterval(updateCircles, 1000);
