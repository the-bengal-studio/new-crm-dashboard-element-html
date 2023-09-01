var e = document.getElementById("salesOverview");
if (e !== null) {
  e.innerHTML = "";
  var o = {
      series: [
        {
          name: "Income",
          data: [20, 38, 38, 72, 55, 63, 43, 76, 55, 80, 40, 80],
        },
        {
          name: "Expenses",
          data: [85, 65, 75, 38, 85, 35, 62, 40, 40, 64, 50, 89],
        },
      ],
      chart: {
        animations: {
          enabled: !1,
        },
        height: 300,
        type: "bar",
        zoom: {
          enabled: !1,
        },
        toolbar: {
          show: !1,
        },
      },
      plotOptions: {
        bar: {
          horizontal: !1,
          columnWidth: "55%",
          endingShape: "rounded",
          borderRadius: 5,
        },
      },
      dataLabels: { enabled: !1 },
      legend: { show: !1 },
      stroke: { show: !0, width: 3, colors: ["transparent"] },
      grid: { borderColor: "rgba(107 ,114 ,128,0.1)" },
      colors: ["rgb(90,102,241)", "rgb(203,213,225)"],
      yaxis: {
        title: {
          style: {
            color: "#adb5be",
            fontSize: "14px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            cssClass: "apexcharts-yaxis-label",
          },
        },
        labels: {
          style: { colors: "rgb(107 ,114 ,128)", fontSize: "12px" },
          formatter: function (s) {
            return s.toFixed(0) + "";
          },
        },
      },
      xaxis: {
        type: "month",
        categories: [
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
        axisBorder: {
          show: !0,
          color: "rgba(119, 119, 142, 0.05)",
          offsetX: 0,
          offsetY: 0,
        },
        axisTicks: {
          show: !0,
          borderType: "solid",
          color: "rgba(119, 119, 142, 0.05)",
          width: 6,
          offsetX: 0,
          offsetY: 0,
        },
        labels: {
          rotate: -90,
          style: { colors: "rgb(107 ,114 ,128)", fontSize: "12px" },
        },
      },
    },
    r = new ApexCharts(document.querySelector("#salesOverview"), o);
  r.render();
}

var e = document.getElementById("visitors");
if (e !== null) {
  e.innerHTML = "";
  var o = {
      series: [
        {
          data: [400, 470, 540, 690, 1100, 1380],
        },
      ],
      chart: {
        type: "bar",
        height: 370,
        toolbar: {
          show: !1,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 1,
          colorStops: [
            { offset: 0, color: "#60a5fa", opacity: 1 },
            { offset: 100, color: "#5a66f1", opacity: 1 },
          ],
        },
      },
      plotOptions: { bar: { borderRadius: 4, horizontal: !0 } },
      colors: ["#5e76a6"],
      grid: { borderColor: "transparent" },
      dataLabels: { enabled: !1 },
      xaxis: {
        categories: [
          "Facebook",
          "Instagram",
          "Dribble",
          "Twitter",
          "Chrome",
          "Pininterest",
        ],
        labels: {
          show: !0,
          style: {
            colors: "#adb5be",
            fontSize: "11px",
            fontWeight: 600,
            cssClass: "apexcharts-xaxis-label",
          },
        },
      },
      yaxis: {
        labels: {
          show: !0,
          style: {
            colors: "#adb5be",
            fontSize: "11px",
            fontWeight: 600,
            cssClass: "apexcharts-yaxis-label",
          },
        },
      },
    },
    l = new ApexCharts(document.querySelector("#visitors"), o);
  l.render();
}

var t = document.getElementById("sales-donut");
if (t) {
  t.getContext("2d");
  var a = Chart.getChart("sales-donut");
  a && a.destroy(),
    (a = new Chart(t, {
      type: "doughnut",
      data: {
        labels: ["Items", "Revenue"],
        datasets: [
          {
            data: [60, 40],
            backgroundColor: ["rgb(90, 102, 241)", "rgb(96, 165, 250)"],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: !0,
        maintainAspectRatio: !1,
        plugins: { legend: { display: !1 } },
        cutout: 90,
      },
    }));
}
