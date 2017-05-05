import * as d3 from 'd3'

const scatterPlot = (dataset) => {
  const w = 500;
  const h = 500;

  const svg = d3.select("body")
                .append("svg")
                .attr("class", "scatter")
                .attr("width", w)
                .attr("height", h);

  svg.selectAll("circle")
     .data(dataset)
     .enter()
     .append("circle")
     .attr("cx", d => d[0])
     .attr("cy", d => h - d[1])
     .attr("r", 5)
     .attr("fill", "black")

  svg.selectAll("text")
     .data(dataset)
     .enter()
     .append("text")
     .attr("x", d => d[0] + 10)
     .attr("y", d => h - d[1])
     .text(d => d.join(", "))

}

export default scatterPlot
