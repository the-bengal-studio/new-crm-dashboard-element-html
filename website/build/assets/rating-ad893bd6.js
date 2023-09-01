(function () {
  var s = {
    rate: function (t) {
      return {
        then: function (e) {
          setTimeout(function () {
            e(Math.random() * 5);
          }, 1e3);
        },
      };
    },
  };
  raterJs({
    starSize: 24,
    element: document.querySelector("#rater-basic"),
    rateCallback: function (e, r) {
      this.setRating(e), r();
    },
  }),
    raterJs({
      element: document.querySelector("#rater-steps"),
      rateCallback: function (e, r) {
        this.setRating(e), r();
      },
      starSize: 24,
      step: 0.5,
    });
  var c = raterJs({
    starSize: 24,
    max: 5,
    rating: 4,
    element: document.querySelector("#custom-messages"),
    disableText: "Custom disable text!",
    ratingText: "My custom rating text {rating}",
    showToolTip: !0,
    rateCallback: function (e, r) {
      c.setRating(e), c.disable(), r();
    },
  });
  raterJs({
    max: 10,
    starSize: 24,
    readOnly: !0,
    rating: 6,
    element: document.querySelector("#stars-unlimited"),
  });
  var n = raterJs({
    starSize: 24,
    isBusyText: "Rating in progress. Please wait...",
    element: document.querySelector("#stars-busytext"),
    rateCallback: function (e, r) {
      n.setRating(e),
        s.rate().then(function (a) {
          n.setRating(a), r();
        });
    },
  });
  raterJs({
    starSize: 24,
    element: document.querySelector("#stars-hover"),
    rateCallback: function (e, r) {
      this.setRating(e), r();
    },
    onHover: function (t, e) {
      document.querySelector(".live-rating").textContent = t;
    },
    onLeave: function (t, e) {
      document.querySelector(".live-rating").textContent = e;
    },
  });
  var l = raterJs({
    starSize: 24,
    element: document.querySelector("#rater-reset"),
    rateCallback: function (e, r) {
      this.setRating(e), r();
    },
  });
  document.querySelector("#rater-reset-button").addEventListener(
    "click",
    function () {
      l.clear();
    },
    !1
  ),
    raterJs({
      starSize: 24,
      element: document.querySelector("#rater-basic"),
      rateCallback: function (e, r) {
        this.setRating(e), r();
      },
    });
  let i = () => {
      [
        document.querySelector("#rater-steps"),
        document.querySelector("#rater-basic"),
        document.querySelector("#custom-messages"),
        document.querySelector("#rater-reset"),
      ].map((t) => {
        t.firstChild.remove(),
          raterJs({
            starSize: 24,
            reverse: !0,
            element: t,
            rateCallback: function (r, a) {
              this.setRating(r), a();
            },
          });
      }),
        document.querySelector("#stars-busytext").firstChild.remove(),
        (n = raterJs({
          starSize: 24,
          reverse: !0,
          isBusyText: "Rating in progress. Please wait...",
          element: document.querySelector("#stars-busytext"),
          rateCallback: function (e, r) {
            n.setRating(e),
              s.rate().then(function (a) {
                n.setRating(a), r();
              });
          },
        })),
        document.querySelector("#stars-hover").firstChild.remove(),
        raterJs({
          starSize: 24,
          reverse: !0,
          element: document.querySelector("#stars-hover"),
          rateCallback: function (e, r) {
            this.setRating(e), r();
          },
          onHover: function (t, e) {
            document.querySelector(".live-rating").textContent = t;
          },
          onLeave: function (t, e) {
            document.querySelector(".live-rating").textContent = e;
          },
        });
    },
    o = () => {
      [
        document.querySelector("#rater-steps"),
        document.querySelector("#rater-basic"),
        document.querySelector("#custom-messages"),
        document.querySelector("#rater-reset"),
      ].map((t) => {
        t.firstChild.remove(),
          raterJs({
            starSize: 24,
            element: t,
            rateCallback: function (r, a) {
              this.setRating(r), a();
            },
          });
      }),
        document.querySelector("#stars-busytext").firstChild.remove(),
        (n = raterJs({
          starSize: 24,
          isBusyText: "Rating in progress. Please wait...",
          element: document.querySelector("#stars-busytext"),
          rateCallback: function (e, r) {
            n.setRating(e),
              s.rate().then(function (a) {
                n.setRating(a), r();
              });
          },
        })),
        document.querySelector("#stars-hover").firstChild.remove(),
        raterJs({
          starSize: 24,
          element: document.querySelector("#stars-hover"),
          rateCallback: function (e, r) {
            this.setRating(e), r();
          },
          onHover: function (t, e) {
            document.querySelector(".live-rating").textContent = t;
          },
          onLeave: function (t, e) {
            document.querySelector(".live-rating").textContent = e;
          },
        });
    };
  document.getElementById("switcher-rtl").addEventListener("click", i),
    document.getElementById("switcher-ltr").addEventListener("click", o),
    document.getElementById("reset-all").addEventListener("click", o),
    localStorage.getItem("Syntortl") &&
      setTimeout(() => {
        i();
      }, 100);
})();
