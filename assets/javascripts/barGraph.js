import * as d3 from 'd3'

const barGraph = (dataset) => {
  const w = 500;
  const h = 100;

  const svg = d3.select("body")
                .append("svg")
                .attr("width", w)
                .attr("height", h);

  svg.selectAll("rect")
     .data(dataset)
     .enter()
     .append("rect")
     .attr("x", (d, i) => 30 * i)
     .attr("y", (d, i) => h + 15 - 3 * d)
     .attr("width", 25)
     .attr("height", (d) => 3 * d)
     .attr("fill", "navy")
     .attr("class", "bar")
     .append("title")
     .text(d => d)

  svg.selectAll("text")
     .data(dataset)
     .enter()
     .append("text")
     .text(d => d)
     .attr("x", (d, i) => i * 30)
     .attr("y", (d, i) => h + 15 - 3 * d - 5)
     .style("font-size", "25px")
     .style("fill", "red")
}

export default barGraph
