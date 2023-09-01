(function () {
  new GMaps({ el: "#google-map", lat: -12.043333, lng: -77.028333 });
  var a = new GMaps({
    el: "#google-map-overlay",
    lat: -12.043333,
    lng: -77.028333,
  });
  a.drawOverlay({
    lat: a.getCenter().lat(),
    lng: a.getCenter().lng(),
    layer: "overlayLayer",
    content:
      '<div class="google-map-overlay">Lima<div class="google-overlay_arrow above"></div></div>',
    verticalAlign: "top",
    horizontalAlign: "center",
  }),
    new GMaps({ el: "#map-layers", lat: -12.043333, lng: -77.028333, zoom: 3 });
  var l = new GMaps({ el: "#map-markers", lat: -12.043333, lng: -77.028333 });
  l.addMarker({
    lat: -12.043333,
    lng: -77.03,
    title: "Lima",
    details: { database_id: 42, author: "HPNeo" },
    click: function (e) {
      console.log && console.log(e), alert("You clicked in this marker");
    },
    mouseover: function (e) {
      console.log && console.log(e);
    },
  }),
    l.addMarker({
      lat: -12.042,
      lng: -77.028333,
      title: "Marker with InfoWindow",
      infoWindow: { content: "<p>HTML Content</p>" },
    }),
    GMaps.createPanorama({
      el: "#streetview-map",
      lat: 42.3455,
      lng: -71.0983,
      pov: { heading: 60, pitch: -10, zoom: 1 },
    });
  var o = new GMaps({
      el: "#map-geofencing",
      lat: -12.043333,
      lng: -77.028333,
    }),
    t = [
      [-12.040397656836609, -77.03373871559225],
      [-12.040248585302038, -77.03993927003302],
      [-12.050047116528843, -77.02448169303511],
      [-12.044804866577001, -77.02154422636042],
    ];
  o.drawPolygon({
    paths: t,
    strokeColor: "#b95d4b",
    strokeOpacity: 1,
    strokeWeight: 3,
    fillColor: "#b95d4b",
    fillOpacity: 0.5,
  }),
    o.drawCircle({
      lat: -12.040504866577,
      lng: -77.02024422636042,
      radius: 350,
      strokeColor: "#a68e5e",
      strokeOpacity: 1,
      strokeWeight: 3,
      fillColor: "#a68e5e",
      fillOpacity: 0.5,
    });
})();
