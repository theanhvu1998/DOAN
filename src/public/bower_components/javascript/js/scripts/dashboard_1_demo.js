function adddata () {
    let a = {
      labels: ["08:00", "09:00", "09:15", "09:30", "09:45", "10:00", "10:15"],
      datasets: [{
          label: "SOLAR CHARGING",
          borderColor: 'rgb(51, 153, 51)',
          backgroundColor: 'rgb(51, 153, 51)',
          pointBackgroundColor: 'rgb(255, 255, 255)',
          data: [1.48, 2.04, 3.09, 3.96, 14.69, 6.38, 9.94]
      },{
          label: "DISCHARGE",
          backgroundColor: "rgb(0, 153, 255)",
          borderColor: "rgb(0, 153, 255)",
  pointBackgroundColor: 'rgb(255, 255, 255)',
          data: [0, 0, 0, 0, 0, 0, 0]
      }
  ,{
          label: "WIFI CHARGING",
          backgroundColor: "rgb(255, 153, 51)",
          borderColor: "rgb(255, 153, 51)",
  pointBackgroundColor: 'rgb(255, 255, 255)',
          data: [0, 0, 0, 0, 0, 0, 0]
      }
  ,{
          label: "PHONE CHARGING",
          backgroundColor: "rgb(204, 51, 0)",
          borderColor: "rgb(204, 51, 0)",
  pointBackgroundColor: 'rgb(255, 255, 255)',
          data: [0, 0, 0, 0, 0, 0, 0]
      }
  ]
  },
  t = {
      responsive: !0,
      maintainAspectRatio: !1
  },
  e = document.getElementById("bar_chart").getContext("2d");
  new Chart(e, {
  type: "line",
  data: a,
  options: t
  });
};