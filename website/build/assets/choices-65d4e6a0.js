(function () {
  new Choices("#choices-multiple-default", { allowSearch: !1 }).setValue([
    "Choice 2",
    "Choie 3",
  ]),
    new Choices("#choices-multiple-remove-button", {
      allowHTML: !0,
      removeItemButton: !0,
    }),
    new Choices(document.getElementById("choices-multiple-groups"), {
      allowHTML: !0,
    }),
    document.addEventListener("DOMContentLoaded", function () {
      var e = document.querySelectorAll("[data-trigger]");
      for (let l = 0; l < e.length; ++l) {
        var t = e[l];
        new Choices(t, {
          allowHTML: !0,
          placeholderValue: "This is a placeholder set in the config",
          searchPlaceholderValue: "Search Crypto Currency",
        });
      }
    }),
    new Choices("#choices-text-preset-values", {
      allowHTML: !0,
      items: [
        "one",
        {
          value: "two",
          label: "two",
          customProperties: { description: "Numbers are infinite" },
        },
      ],
    }),
    new Choices("#choices-text-email-filter", {
      allowHTML: !0,
      editItems: !0,
      addItemFilter: function (e) {
        if (!e) return !1;
        const t =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return new RegExp(t.source, "i").test(e);
      },
    }).setValue(["abc@hotmail.com"]),
    new Choices("#choices-single-no-search", {
      allowHTML: !0,
      searchEnabled: !1,
      removeItemButton: !0,
      choices: [
        { value: "One", label: "Label One" },
        { value: "Two", label: "Label Two" },
        { value: "Three", label: "Label Three" },
      ],
    }).setChoices(
      [
        { value: "Four", label: "Label Four" },
        { value: "Five", label: "Label Five" },
        { value: "Six", label: "Label Six", selected: !0 },
      ],
      "value",
      "label",
      !1
    ),
    new Choices("#choices-text-unique-values", {
      allowHTML: !0,
      paste: !1,
      duplicateItemsAllowed: !1,
      editItems: !0,
    });
})();
