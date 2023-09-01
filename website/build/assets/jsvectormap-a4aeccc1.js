(function () {
  new jsVectorMap({ selector: "#vector-map", map: "world_merc" });
  var r = [
    { name: "Russia", coords: [61, 105], style: { fill: "#5c5cff" } },
    { name: "Geenland", coords: [72, -42], style: { fill: "#ff9251" } },
    { name: "Canada", coords: [56, -106], style: { fill: "#56de80" } },
    { name: "Palestine", coords: [31.5, 34.8], style: { fill: "yellow" } },
    { name: "Brazil", coords: [-14.235, -51.9253], style: { fill: "#000" } },
  ];
  new jsVectorMap({
    map: "world_merc",
    selector: "#marker-map",
    markersSelectable: !0,
    onMarkerSelected(e, t, s) {},
    labels: {
      markers: {
        render: function (e) {
          return e.name;
        },
      },
    },
    markers: r,
    markerStyle: {
      hover: { stroke: "#DDD", strokeWidth: 3, fill: "#FFF" },
      selected: { fill: "#ff525d" },
    },
    markerLabelStyle: {
      initial: {
        fontFamily: "Poppins",
        fontSize: 13,
        fontWeight: 500,
        fill: "#35373e",
      },
    },
  });
  var r = [
    { name: "Palestine", coords: [31.5, 34.8] },
    { name: "Russia", coords: [61, 105] },
    { name: "Geenland", coords: [72, -42] },
    { name: "Canada", coords: [56, -106] },
  ];
  new jsVectorMap({
    map: "world_merc",
    selector: "#marker-image-map",
    labels: {
      markers: {
        render: function (e) {
          return e.name;
        },
      },
    },
    markers: r,
    markerStyle: { initial: { image: !0 } },
    series: {
      markers: [
        {
          attribute: "image",
          scale: {
            marker1title: {
              url: "https://website/build/assets/img/ecommerce/products/15.png",
              offset: [10, 0],
            },
            marker2title: {
              url: "https://website/build/assets/img/ecommerce/products/15.png",
              offset: [10, 0],
            },
          },
          values: {
            0: "marker1title",
            1: "marker2title",
            2: "marker2title",
            3: "marker1title",
          },
        },
      ],
    },
  });
  var r = [
      { name: "Russia", coords: [61.524, 105.3188] },
      { name: "Egypt", coords: [26.8206, 30.8025] },
      { name: "Greenland", coords: [71.7069, -42.6043], offsets: [2, 10] },
      { name: "Canada", coords: [56, -106], offsets: [-7, 12] },
    ],
    a = [
      {
        from: "Russia",
        to: "Egypt",
        style: { stroke: "#abb0b7", strokeWidth: 1.5 },
      },
      {
        from: "Canada",
        to: "Russia",
        style: { stroke: "#abb0b7", strokeWidth: 1.5 },
      },
    ];
  new jsVectorMap({
    map: "world_merc",
    selector: document.querySelector("#lines-map"),
    labels: {
      markers: {
        render: function (e) {
          return e.name;
        },
        offsets: function (e) {
          return r[e].offsets || [0, 0];
        },
      },
    },
    markers: r,
    lines: a,
    lineStyle: { animation: !0, strokeDasharray: "6 3 6" },
    markerStyle: {
      initial: { r: 6, fill: "#1266f1", stroke: "#fff", strokeWidth: 3 },
    },
    markerLabelStyle: {
      initial: { fontSize: 13, fontWeight: 500, fill: "#35373e" },
    },
  }),
    new jsVectorMap({
      selector: "#us-map",
      map: "us_merc_en",
      regionStyle: {
        initial: {
          stroke: "#e9e9e9",
          strokeWidth: 0.15,
          fill: "#5a66f1",
          fillOpacity: 1,
        },
      },
    }),
    new jsVectorMap({
      selector: "#russia-map",
      map: "russia",
      regionStyle: {
        initial: {
          stroke: "#e9e9e9",
          strokeWidth: 0.15,
          fill: "#60a5fa",
          fillOpacity: 1,
        },
      },
    }),
    new jsVectorMap({
      selector: "#spain-map",
      map: "spain",
      regionStyle: {
        initial: {
          stroke: "#e9e9e9",
          strokeWidth: 0.15,
          fill: "#d1dae5",
          fillOpacity: 1,
        },
      },
    }),
    new jsVectorMap({
      selector: "#canada-map",
      map: "canada",
      regionStyle: {
        initial: {
          stroke: "#e9e9e9",
          strokeWidth: 0.15,
          fill: "#efbd1d",
          fillOpacity: 1,
        },
      },
    });
})();
