var spec1 = "js/choropleth_map.vg.json";
vegaEmbed("#choropleth-map", spec1)
  .then(function (result) {})
  .catch(console.error);

var spec2 = "js/happiness_life.vg.json";
vegaEmbed("#scatterplot", spec2)
  .then(function (result) {})
  .catch(console.error);

var spec3 = "js/regions.vg.json";
vegaEmbed("#regions", spec3)
  .then(function (result) {})
  .catch(console.error);

var spec4 = "js/stacked.vg.json";
vegaEmbed("#stacked", spec4)
  .then(function (result) {})
  .catch(console.error);

var spec5 = "js/happiness_rank.vg.json";
vegaEmbed("#ranked", spec5)
  .then(function (result) {})
  .catch(console.error);
