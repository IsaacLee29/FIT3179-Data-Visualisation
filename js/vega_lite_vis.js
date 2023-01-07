var spec1 = "js/choropleth_map.vg.json";
vegaEmbed("#choropleth-map", spec1, {"actions": false})
  .then(function (result) {})
  .catch(console.error);

var spec2 = "js/scatterplot.vg.json";
vegaEmbed("#scatterplot", spec2, {"actions": false})
  .then(function (result) {})
  .catch(console.error);

var spec3 = "js/boxplot.vg.json";
vegaEmbed("#boxplot", spec3, {"actions": false})
  .then(function (result) {})
  .catch(console.error);

var spec4 = "js/stacked_bar_chart.vg.json";
vegaEmbed("#stacked-bar-chart", spec4, {"actions": false})
  .then(function (result) {})
  .catch(console.error);

var spec5 = "js/bump_chart.vg.json";
vegaEmbed("#bump-chart", spec5, {"actions": false})
  .then(function (result) {})
  .catch(console.error);

var spec6 = "js/lollipop_chart.vg.json";
vegaEmbed("#lollipop-chart", spec6, {"actions": false})
  .then(function (result) {})
  .catch(console.error);
