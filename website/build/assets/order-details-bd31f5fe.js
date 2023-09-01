(function () {
  var t = raterJs({
    starSize: 20,
    max: 5,
    rating: 4,
    element: document.querySelector("#product-rater"),
    disableText: "Custom disable text!",
    ratingText: "My custom rating text {rating}",
    showToolTip: !0,
    rateCallback: function (a, e) {
      t.setRating(a), t.disable(), e();
    },
  });
})();
