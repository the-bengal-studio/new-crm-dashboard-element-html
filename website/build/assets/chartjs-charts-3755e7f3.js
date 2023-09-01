(function () {
  (Chart.defaults.borderColor = "rgba(142, 156, 173,0.1)"),
    (Chart.defaults.color = "#8c9097");
  const a = {
    type: "line",
    data: {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "#6366f1",
          borderColor: "#6366f1",
          data: [0, 10, 5, 2, 20, 30, 45],
        },
      ],
    },
    options: {},
  };
  new Chart(document.getElementById("chartjs-line"), a);
  const t = {
    type: "bar",
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "My First Dataset",
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            "rgba(94, 118, 166, 0.2)",
            "rgba(94, 166, 142, 0.2)",
            "rgba(166, 142, 94, 0.2)",
            "rgba(94, 154, 166, 0.2)",
            "rgba(185, 93, 75, 0.2)",
            "rgba(118, 166, 94, 0.2)",
            "rgba(140, 144, 151, 0.2)",
          ],
          borderColor: [
            "#6366f1",
            "rgb(94, 166, 142)",
            "rgb(166, 142, 94)",
            "rgb(94, 154, 166)",
            "rgb(185, 93, 75)",
            "rgb(118, 166, 94)",
            "rgb(140, 144, 151)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: { scales: { y: { beginAtZero: !0 } } },
  };
  new Chart(document.getElementById("chartjs-bar"), t);
  const r = {
    type: "pie",
    data: {
      labels: ["Primary", "Success", "Warning"],
      datasets: [
        {
          label: "My First Dataset",
          data: [300, 50, 100],
          backgroundColor: [
            "#6366f1",
            "rgb(94, 166, 142)",
            "rgb(166, 142, 94)",
          ],
          hoverOffset: 4,
          borderColor: "rgba(142, 156, 173,0.1)",
        },
      ],
    },
  };
  new Chart(document.getElementById("chartjs-pie"), r);
  const e = {
    type: "doughnut",
    data: {
      labels: ["Primary", "Success", "Warning"],
      datasets: [
        {
          label: "My First Dataset",
          data: [300, 50, 100],
          backgroundColor: [
            "#6366f1",
            "rgb(94, 166, 142)",
            "rgb(166, 142, 94)",
          ],
          hoverOffset: 4,
          borderColor: "rgba(142, 156, 173,0.1)",
        },
      ],
    },
  };
  new Chart(document.getElementById("chartjs-doughnut"), e);
  const o = {
    type: "scatter",
    data: {
      labels: ["January", "February", "March", "April"],
      datasets: [
        {
          type: "bar",
          label: "Bar Dataset",
          data: [10, 20, 30, 40],
          borderColor: "#6366f1",
          backgroundColor: "rgba(94, 118, 166, 0.2)",
        },
        {
          type: "line",
          label: "Line Dataset",
          data: [50, 50, 50, 50],
          fill: !1,
          borderColor: "rgb(94, 166, 142)",
        },
      ],
    },
    options: { scales: { y: { beginAtZero: !0 } } },
  };
  new Chart(document.getElementById("chartjs-mixed"), o);
  const n = {
    type: "polarArea",
    data: {
      labels: ["Primary", "Teal", "Warning", "Gray", "Success"],
      datasets: [
        {
          label: "My First Dataset",
          data: [11, 16, 7, 3, 14],
          backgroundColor: [
            "#6366f1",
            "rgb(75, 192, 192)",
            "rgb(166, 142, 94)",
            "rgb(201, 203, 207)",
            "rgb(94, 166, 142)",
          ],
          borderColor: "rgba(142, 156, 173,0.1)",
        },
      ],
    },
    options: {},
  };
  new Chart(document.getElementById("chartjs-polar"), n);
  const l = {
    type: "radar",
    data: {
      labels: [
        "Eating",
        "Drinking",
        "Sleeping",
        "Designing",
        "Coding",
        "Cycling",
        "Running",
      ],
      datasets: [
        {
          label: "My First Dataset",
          data: [65, 59, 90, 81, 56, 55, 40],
          fill: !0,
          backgroundColor: "rgba(94, 118, 166, 0.2)",
          borderColor: "#6366f1",
          pointBackgroundColor: "#6366f1",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "#6366f1",
        },
        {
          label: "My Second Dataset",
          data: [28, 48, 40, 19, 96, 27, 100],
          fill: !0,
          backgroundColor: "rgba(94, 166, 142, 0.2)",
          borderColor: "rgb(94, 166, 142)",
          pointBackgroundColor: "rgb(94, 166, 142)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgb(94, 166, 142)",
        },
      ],
    },
    options: { elements: { line: { borderWidth: 3 } } },
  };
  new Chart(document.getElementById("chartjs-radar"), l);
  const d = {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "Scatter Dataset",
          data: [
            { x: -10, y: 0 },
            { x: 0, y: 10 },
            { x: 10, y: 5 },
            { x: 0.5, y: 5.5 },
          ],
          backgroundColor: "#6366f1",
        },
      ],
    },
    options: { scales: { x: { type: "linear", position: "bottom" } } },
  };
  new Chart(document.getElementById("chartjs-scatter"), d);
  const s = {
    type: "bubble",
    data: {
      datasets: [
        {
          label: "First Dataset",
          data: [
            { x: 20, y: 30, r: 15 },
            { x: 40, y: 10, r: 10 },
          ],
          backgroundColor: "#6366f1",
        },
      ],
    },
    options: {},
  };
  new Chart(document.getElementById("chartjs-bubble"), s);
})();
