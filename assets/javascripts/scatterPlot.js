import * as d3 from 'd3'

const scatterPlot = (dataset) => {
  const w = 500;
  const h = 500;
  const padding = 60;

  const xScale = d3.scaleLinear()
                   .domain([0, d3.max(dataset, (d) => d[0])])
                   .range([padding, w - padding]);

  const yScale = d3.scaleLinear()
                   .domain([0, d3.max(dataset, (d) => d[1])])
                   .range([h - padding, padding]);

  const svg = d3.select("body")
                .append("svg")
                .attr("class", "scatter")
                .attr("width", w)
                .attr("height", h);

  svg.selectAll("circle")
     .data(dataset)
     .enter()
     .append("circle")
     .attr("cx", d => xScale(d[0]))
     .attr("cy", d => h - yScale(d[1]))
     .attr("r", 5)
     .attr("fill", "black")

  svg.selectAll("text")
     .data(dataset)
     .enter()
     .append("text")
     .attr("x", d => xScale(d[0] + 10))
     .attr("y", d => h - yScale(d[1]))
     .text(d => d.join(", "))

}

export default scatterPlot
