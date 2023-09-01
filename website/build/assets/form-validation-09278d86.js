(function () {
  flatpickr(".flatpickr-input", {});
  const y = document.getElementsByClassName("ti-custom-validate-btn"),
    z = document.querySelector(".ti-custom-validation"),
    s = document.querySelector(".firstName "),
    r = document.querySelector(".lastName"),
    t = document.querySelector(".phonenumber"),
    o = document.querySelector(".email-address"),
    a = document.querySelector(".password"),
    i = document.querySelector(".confirmPassword"),
    d = document.querySelector(".birthdate"),
    l = document.querySelector(".postalAddress"),
    n = document.querySelector(".cityName"),
    c = document.querySelector(".stateName"),
    m = document.querySelector(".pincode"),
    f = document.querySelector(".validationCheckbox"),
    p = document.getElementsByClassName("firstNameError ")[0],
    E = document.getElementsByClassName("lastNameError")[0],
    L = document.getElementsByClassName("phoneError")[0],
    N = document.getElementsByClassName("emailError")[0],
    v = document.getElementsByClassName("passwordError")[0],
    h = document.getElementsByClassName("confirmPasswordError")[0],
    q = document.getElementsByClassName("dobError")[0],
    k = document.getElementsByClassName("addressError")[0],
    w = document.getElementsByClassName("cityError")[0],
    g = document.getElementsByClassName("stateError")[0],
    S = document.getElementsByClassName("pincodeError")[0],
    x = document.getElementsByClassName("checkboxError")[0];
  let e = {};
  z.addEventListener("submit", function (u) {
    u.preventDefault(), D();
  });

  function D() {
    for (let $ in e) delete e[$];
    (p.style.display = "none"),
      (E.style.display = "none"),
      (N.style.display = "none"),
      (L.style.display = "none"),
      (v.style.display = "none"),
      (h.style.display = "none"),
      (q.style.display = "none"),
      (k.style.display = "none"),
      (w.style.display = "none"),
      (g.style.display = "none"),
      (S.style.display = "none"),
      (x.style.display = "none"),
      s == null || s.classList.remove("border-red-500"),
      r == null || r.classList.remove("border-red-500"),
      t == null || t.classList.remove("border-red-500"),
      o == null || o.classList.remove("border-red-500"),
      a == null || a.classList.remove("border-red-500"),
      i == null || i.classList.remove("border-red-500"),
      d == null || d.classList.remove("border-red-500"),
      l == null || l.classList.remove("border-red-500"),
      n == null || n.classList.remove("border-red-500"),
      c == null || c.classList.remove("border-red-500"),
      m == null || m.classList.remove("border-red-500"),
      f == null || f.classList.remove("border-red-500");
    const u = s.value.trim(),
      C = r.value.trim(),
      A = t.value.trim(),
      B = o.value.trim(),
      b = a.value.trim(),
      Z = i.value.trim(),
      T = d.value.trim(),
      V = l.value.trim(),
      H = n.value.trim(),
      M = c.value.trim(),
      P = m.value.trim(),
      O = f.value.trim();
    u === "" && (e.firstName = "First Name is required"),
      C === "" && (e.lastName = "Last Name is required"),
      A === "" && (e.phone = "Phone Number is required"),
      B === "" && (e.email = "Email is required"),
      b === "" && (e.password = "password  is required"),
      Z === "" && (e.confirmPassword = "password shoud confirm here"),
      T === "" && (e.date = "Date is requried"),
      V === "" && (e.address = "Address is requried"),
      H === "" && (e.city = "City is requried"),
      M === "" && (e.state = "State is requried"),
      P === "" && (e.pincode = "Pincode is requried"),
      O === "" && (e.checkbox = "You must agree before submitting"),
      u !== "" &&
        (u.match(/^[a-zA-Z0-9]+$/) ||
          (e.firstName = "First Name must be letters only")),
      C !== "" &&
        (C.match(/^[a-zA-Z0-9]+$/) ||
          (e.lastName = "Last Name must be letters only")),
      A !== "" &&
        (A.match(/^[0-9]+$/) ||
          (e.phone = "phone number must be numbers only")),
      B !== "" &&
        (B.match(/^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/) ||
          (e.email = "Email must be a valid email")),
      b !== "" &&
        (b.match(/^[a-zA-Z0-9]+$/) || (e.password = "password  is required")),
      Z !== b && (e.confirmPassword = "password Should need to be same"),
      T !== "" &&
        (T.match(/^[0-9]+$/) || (e.date = "Date must be numbers only")),
      V !== "" &&
        (V.match(/^[a-zA-Z0-9]+$/) ||
          (e.address = "address should be letters only")),
      H !== "" &&
        (H.match(/^[a-zA-Z0-9]+$/) || (e.city = "city should be letters only")),
      M !== "" &&
        (M.match(/^[a-zA-Z0-9]+$/) ||
          (e.state = "state should be letters only")),
      P === "" &&
        (P.match(/^[0-9]+$/) || (e.pincode = "Pincode must be numbers only")),
      Object.keys(e).length > 0
        ? F()
        : ((y.value = "Submitting..."),
          y.setAttribute("disabled", "disabled"),
          new Promise(function ($, Y) {
            setTimeout(function () {
              $(j());
            }, 2e3);
          }));
  }

  function F() {
    e.firstName &&
      (s.classList.add("border-red-500"),
      (p.style.display = "block"),
      (p.innerHTML = e.firstName)),
      e.lastName &&
        (r.classList.add("border-red-500"),
        (E.style.display = "block"),
        (E.innerHTML = e.lastName)),
      e.email &&
        (o.classList.add("border-red-500"),
        (N.style.display = "block"),
        (N.innerHTML = e.email)),
      e.phone &&
        (t.classList.add("border-red-500"),
        (L.style.display = "block"),
        (L.innerHTML = e.phone)),
      e.password &&
        (a.classList.add("border-red-500"),
        (v.style.display = "block"),
        (v.innerHTML = e.password)),
      e.confirmPassword &&
        (i.classList.add("border-red-500"),
        (h.style.display = "block"),
        (h.innerHTML = e.confirmPassword)),
      e.date &&
        (d.classList.add("border-red-500"),
        (q.style.display = "block"),
        (q.innerHTML = e.date)),
      e.address &&
        (l.classList.add("border-red-500"),
        (k.style.display = "block"),
        (k.innerHTML = e.address)),
      e.city &&
        (n.classList.add("border-red-500"),
        (w.style.display = "block"),
        (w.innerHTML = e.city)),
      e.state &&
        (c.classList.add("border-red-500"),
        (g.style.display = "block"),
        (g.innerHTML = e.state)),
      e.pincode &&
        (m.classList.add("border-red-500"),
        (S.style.display = "block"),
        (S.innerHTML = e.pincode));
  }

  function j() {
    (y.value = "Login Now"), y.removeAttribute("disabled"), z.reset();
  }
})();
