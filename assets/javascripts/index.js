import barGraph from './barGraph'
import scatterPlot from './scatterPlot'

document.addEventListener('DOMContentLoaded', () => {
  const dataset1 = [12, 31, 22, 17, 25, 18, 29, 14, 9];
  const dataset2 = [
    [ 34,    78 ],
    [ 109,   280 ],
    [ 310,   120 ],
    [ 79,    411 ],
    [ 420,   220 ],
    [ 233,   145 ],
    [ 333,   96 ],
    [ 222,   333 ],
    [ 78,    320 ],
    [ 21,    123 ]
  ];

  barGraph(dataset1)
  scatterPlot(dataset2)
});
