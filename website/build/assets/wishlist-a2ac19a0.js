(function() {
    document.querySelectorAll(".wishlist").forEach((s) => {
        s.onclick = () => {
            s.closest(".wishlist-box").remove(),
                document.querySelectorAll(".wishlist").length ||
                (document
                    .querySelector(".whishlist-empty")
                    .classList.remove("hidden"),
                    document.querySelector(".whishlist-full").classList.add("hidden"));
        };
    });
})();