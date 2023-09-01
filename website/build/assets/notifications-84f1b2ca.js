(function () {
  var n = {},
    e = new AWN(n);
  document.querySelector("#basic").addEventListener("click", function () {
    e.tip("This is an example of tip");
  }),
    document
      .querySelector("#async-error")
      .addEventListener("click", function () {
        e.async(Promise.reject("some error"));
      }),
    document
      .querySelector("#async-success")
      .addEventListener("click", function () {
        e.async(Promise.resolve("some message"));
      }),
    document.querySelector("#info").addEventListener("click", function () {
      e.info("This Is An Example Of Info");
    }),
    document.querySelector("#success").addEventListener("click", function () {
      e.success("This Is An Example Of Success");
    }),
    document.querySelector("#warning").addEventListener("click", function () {
      e.warning("This Is An Example Of Warning");
    }),
    document.querySelector("#error").addEventListener("click", function () {
      e.alert("This Is An Example Of Error");
    }),
    document.querySelector("#confirm").addEventListener("click", function () {
      e.confirm("Are you sure you want to reset the password");
    }),
    document.querySelector("#popup").addEventListener("click", function () {
      e.modal(
        '<h3 class="font-semibold mb-1 text-xl">Welcome To Tailwind Admin Template </h3><small class="text-gray-500 dark:text-white/70 text-sm">Click outside the modal window to close it.</small>',
        "demo"
      );
    }),
    document.querySelector("#async").addEventListener("click", function () {
      new AWN().asyncBlock(Promise.reject("some error"));
    }),
    document
      .querySelector("#async-block")
      .addEventListener("click", function () {
        new AWN().asyncBlock(Promise.resolve("some message"));
      });
})();
