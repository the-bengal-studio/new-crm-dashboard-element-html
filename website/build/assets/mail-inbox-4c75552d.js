(function() {
    let c = document.querySelector(".check-all");
    c.addEventListener("click", l);

    function l() {
        c.checked ?
            document.querySelectorAll(".mail-checkbox input").forEach(function(e) {
                e.closest(".mail-list").classList.add("selected"), (e.checked = !0);
            }) :
            document.querySelectorAll(".mail-checkbox input").forEach(function(e) {
                e.closest(".mail-list").classList.remove("selected"),
                    (e.checked = !1);
            });
    }
    let i = document.querySelector(".ti-modal-max-screen"),
        n = document.querySelector(".ti-modal-min-screen"),
        d = document.querySelector(".ti-modal-close-btn");
    i.addEventListener("click", () => {
            document.querySelector(".ti-modal").classList.toggle("mail-fullscreen"),
                document.querySelector(".ti-modal").classList.remove("mail-minscreen");
        }),
        n.addEventListener("click", () => {
            document.querySelector(".ti-modal").classList.toggle("mail-minscreen"),
                document.querySelector(".ti-modal").classList.remove("mail-fullscreen");
        }),
        d.addEventListener("click", () => {
            document.querySelector(".ti-modal").classList.remove("mail-minscreen"),
                document.querySelector(".ti-modal").classList.remove("mail-fullscreen");
        });
    let m = document.querySelector(".btn-cc"),
        u = document.querySelector(".btn-bcc-cc"),
        L = document.querySelector(".btn-bcc"),
        S = document.querySelector(".btn-cc-bcc"),
        s = document.querySelector(".mail-cc"),
        o = document.querySelector(".mail-bcc"),
        t = document.querySelector("#mail-compose");
    m.addEventListener("click", () => {
            t.classList.add("mail-add-cc"), s.classList.remove("hidden");
        }),
        u.addEventListener("click", () => {
            t.classList.add("mail-add-cc2"), s.classList.remove("hidden");
        }),
        S.addEventListener("click", () => {
            t.classList.add("mail-add-bcc"), o.classList.remove("hidden");
        }),
        L.addEventListener("click", () => {
            t.classList.add("mail-add-bcc2"), o.classList.remove("hidden");
        });
    let r = document.querySelector(".main-inbox"),
        y = document.querySelectorAll(".mail-list"),
        a = document.querySelector(".mail-view"),
        q = document.querySelectorAll(".mail-btn");
    y.forEach((e) => {
            e.addEventListener("click", () => {
                r.classList.add("hidden"), a.classList.remove("hidden");
            });
        }),
        q.forEach((e) => {
            e.addEventListener("click", () => {
                r.classList.remove("hidden"), a.classList.add("hidden");
            });
        });
})();
window.changeTheInfo = (c, l, i, n, d) => {
    (document.querySelector(
        ".mail-img"
    ).src = `https://website/build/assets/img/users/${c}.jpg`),
    (document.querySelector(".mail-name").innerText = l),
    (document.querySelector(".mail-email").innerText = i),
    (document.querySelector(".mail-subject").innerText = n),
    (document.querySelector(".mail-date").innerText = d);
};