(function () {
  var e = document.getElementById("btcCoin");
  if (e !== null) {
    e.innerHTML = "";
    var t = {
        series: [{ data: [34, 55, 41, 67, 22, 43, 21] }],
        chart: {
          sparkline: { enabled: !0 },
          dropShadow: {
            enabled: !0,
            enabledOnSeries: void 0,
            top: 3,
            right: 6,
            blur: 3,
            color: ["#47bbed"],
            opacity: 0.2,
          },
          type: "line",
          height: 20,
          width: 100,
        },
        tooltip: {
          x: { show: !1 },
          y: {
            title: {
              formatter: function (i) {
                return "";
              },
            },
          },
          marker: { show: !1 },
        },
        colors: ["#47bbed"],
        stroke: { width: [1.5], curve: ["smooth"] },
        xaxis: { crosshairs: { show: !1 } },
        fill: {
          type: "gradient",
          gradient: { opacityFrom: 0.9, opacityTo: 0.9, stops: [0, 98] },
        },
      },
      s = new ApexCharts(document.querySelector("#btcCoin"), t);
    s.render();
  }
  var e = document.getElementById("ethCoin");
  if (e !== null) {
    e.innerHTML = "";
    var t = {
        series: [{ data: [34, 55, 41, 47, 32, 53, 31] }],
        chart: {
          sparkline: { enabled: !0 },
          dropShadow: {
            enabled: !0,
            enabledOnSeries: void 0,
            top: 3,
            right: 6,
            blur: 3,
            color: ["#60a5fa"],
            opacity: 0.2,
          },
          type: "line",
          height: 20,
          width: 100,
        },
        tooltip: {
          x: { show: !1 },
          y: {
            title: {
              formatter: function (a) {
                return "";
              },
            },
          },
          marker: { show: !1 },
        },
        colors: ["#60a5fa"],
        stroke: { width: [1.5], curve: ["smooth"] },
        xaxis: { crosshairs: { show: !1 } },
        fill: {
          type: "gradient",
          gradient: { opacityFrom: 0.9, opacityTo: 0.9, stops: [0, 98] },
        },
      },
      r = new ApexCharts(document.querySelector("#ethCoin"), t);
    r.render();
  }
  var e = document.getElementById("dshCoin");
  if (e !== null) {
    e.innerHTML = "";
    var t = {
        series: [{ data: [31, 53, 32, 47, 41, 55, 44] }],
        chart: {
          sparkline: { enabled: !0 },
          dropShadow: {
            enabled: !0,
            enabledOnSeries: void 0,
            top: 3,
            right: 6,
            blur: 3,
            color: ["#FF534D"],
            opacity: 0.2,
          },
          type: "line",
          height: 20,
          width: 100,
        },
        tooltip: {
          x: { show: !1 },
          y: {
            title: {
              formatter: function (o) {
                return "";
              },
            },
          },
          marker: { show: !1 },
        },
        colors: ["#FF534D"],
        stroke: { width: [1.5], curve: ["smooth"] },
        xaxis: { crosshairs: { show: !1 } },
        fill: {
          type: "gradient",
          gradient: { opacityFrom: 0.9, opacityTo: 0.9, stops: [0, 98] },
        },
      },
      r = new ApexCharts(document.querySelector("#dshCoin"), t);
    r.render();
  }
  var e = document.getElementById("glmCoin");
  if (e !== null) {
    e.innerHTML = "";
    var t = {
        series: [{ data: [21, 43, 22, 45, 35, 55, 34] }],
        chart: {
          sparkline: { enabled: !0 },
          dropShadow: {
            enabled: !0,
            enabledOnSeries: void 0,
            top: 3,
            right: 6,
            blur: 3,
            color: ["#FFBE14"],
            opacity: 0.2,
          },
          type: "line",
          height: 20,
          width: 100,
        },
        tooltip: {
          x: { show: !1 },
          y: {
            title: {
              formatter: function (o) {
                return "";
              },
            },
          },
          marker: { show: !1 },
        },
        colors: ["#FFBE14"],
        stroke: { width: [1.5], curve: ["smooth"] },
        xaxis: { crosshairs: { show: !1 } },
        fill: {
          type: "gradient",
          gradient: { opacityFrom: 0.9, opacityTo: 0.9, stops: [0, 98] },
        },
      },
      r = new ApexCharts(document.querySelector("#glmCoin"), t);
    r.render();
  }
  var e = document.getElementById("totalRevenue");
  if (e !== null) {
    e.innerHTML = "";
    var t = {
        series: [
          {
            name: "Revenue",
            data: [55, 55, 52, 52, 55, 55, 58, 58, 53, 53, 55, 55],
          },
        ],
        chart: { height: 180, type: "area", sparkline: { enabled: !0 } },
        dataLabels: { enabled: !1 },
        stroke: { width: [1.4], show: !0, curve: ["smooth"] },
        xaxis: { crosshairs: { show: !1 } },
        legend: { show: !1 },
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        markers: { size: 0 },
        colors: ["#60a5fa"],
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.7,
            stops: [0, 100],
          },
        },
      },
      r = new ApexCharts(document.querySelector("#totalRevenue"), t);
    r.render();
  }
  var e = document.getElementById("sessionsByDevice");
  if (e !== null) {
    e.innerHTML = "";
    var t = {
        series: [
          { name: "Tablet", data: [[10, 35, 80]] },
          { name: "Mobile", data: [[22, 10, 80]] },
          { name: "Desktop", data: [[25, 25, 150]] },
        ],
        chart: { height: 350, type: "bubble", toolbar: { show: !1 } },
        grid: { borderColor: "#f3f3f3", strokeDashArray: 3 },
        colors: ["#f43f63", "#60a5fa", "#6366f1"],
        dataLabels: { enabled: !1 },
        legend: {
          show: !0,
          fontSize: "13px",
          labels: { colors: "#959595" },
          markers: { width: 10, height: 10 },
        },
        xaxis: {
          min: 0,
          max: 50,
          labels: { show: !1 },
          axisBorder: { show: !1 },
        },
        yaxis: { max: 50, labels: { show: !1 } },
      },
      n = new ApexCharts(document.querySelector("#sessionsByDevice"), t);
    n.render();
  }
  if (typeof jsVectorMap < "u") {
    var l = [
        { name: "Russia", coords: [61, 105], style: { fill: "#60a5fa" } },
        { name: "Geenland", coords: [72, -42], style: { fill: "#6366f1" } },
        { name: "Canada", coords: [56, -106], style: { fill: "#ff534d" } },
        { name: "Palestine", coords: [31.5, 34.8], style: { fill: "#ffbe14" } },
        {
          name: "Brazil",
          coords: [-14.235, -51.9253],
          style: { fill: "#f43f63" },
        },
      ],
      e = document.getElementById("users-map");
    e !== null &&
      ((e.innerHTML = ""),
      new jsVectorMap({
        map: "world_merc",
        selector: "#users-map",
        markersSelectable: !0,
        onMarkerSelected(a, o, d) {},
        labels: {
          markers: {
            render: function (a) {
              return a.name;
            },
          },
        },
        markers: l,
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
      }));
  }
})();
