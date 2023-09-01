var e = document.getElementById("earnings");
if (e !== null) {
  e.innerHTML = "";
  var o = {
      series: [
        {
          name: "Orders",
          type: "bar",
          data: [23, 55, 22, 45, 20, 32, 22, 42, 21, 44, 22, 30],
        },
        {
          name: "Sales",
          type: "line",
          data: [40, 35, 66, 28, 38, 55, 45, 70, 55, 69, 46, 49],
        },
      ],
      chart: {
        animations: { enabled: !1 },
        height: 310,
        zoom: { enabled: !1 },
        toolbar: { show: !1 },
      },
      plotOptions: {
        bar: {
          horizontal: !1,
          columnWidth: "35%",
          endingShape: "rounded",
          borderRadius: 2,
        },
      },
      dataLabels: { enabled: !1 },
      legend: {
        position: "top",
        fontSize: "12px",
        fontFamily: "Inter, sans-serif",
        fontWeight: 600,
      },
      stroke: { curve: "smooth", width: [5, 1] },
      grid: { borderColor: "rgba(107 ,114 ,128,0.1)" },
      colors: ["rgb(90,102,241)", "rgb(203,213,225)"],
      yaxis: {
        title: {
          style: {
            color: "#adb5be",
            fontSize: "12px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            cssClass: "apexcharts-yaxis-label",
          },
        },
        labels: {
          style: {
            colors: "rgb(107 ,114 ,128)",
            fontSize: "12px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
          },
          formatter: function (t) {
            return t.toFixed(0) + "";
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
    r = new ApexCharts(document.querySelector("#earnings"), o);
  r.render();
}
