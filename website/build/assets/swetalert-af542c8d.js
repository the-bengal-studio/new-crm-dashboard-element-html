(function () {
  document.querySelector("#basic").addEventListener("click", function () {
    Swal.fire("Welcome TO Your Admin Page");
  }),
    document
      .querySelector("#sweetalert1")
      .addEventListener("click", function () {
        Swal.fire("The Internet?", "That thing is still around?", "question");
      }),
    document
      .querySelector("#error-sweetalert")
      .addEventListener("click", function () {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      }),
    document
      .querySelector("#image-sweetalert")
      .addEventListener("click", function () {
        Swal.fire({
          imageUrl:
            "https://website/build/assets/img/brand-logos/desktop-logo.png",
          imageAlt: "Template Logo",
        });
      }),
    document
      .querySelector("#sweetalert2")
      .addEventListener("click", function () {
        Swal.fire({
          title: "Do you want to save the changes?",
          showDenyButton: !0,
          showCancelButton: !0,
          confirmButtonText: "Save",
          denyButtonText: "Don't save",
        }).then((e) => {
          e.isConfirmed
            ? Swal.fire("Saved!", "", "success")
            : e.isDenied && Swal.fire("Changes are not saved", "", "info");
        });
      }),
    document
      .querySelector("#sweetalert3")
      .addEventListener("click", function () {
        Swal.fire({
          title: "Custom animation with Animate.css",
          showClass: { popup: "animate__animated animate__fadeInDown" },
          hideClass: { popup: "animate__animated animate__fadeOutUp" },
        });
      }),
    document.querySelector("#top-end").addEventListener("click", function () {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: !1,
        timer: 1500,
      });
    }),
    document.querySelector("#top-start").addEventListener("click", function () {
      Swal.fire({
        position: "top-start",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: !1,
        timer: 1500,
      });
    }),
    document
      .querySelector("#bottom-start")
      .addEventListener("click", function () {
        Swal.fire({
          position: "bottom-start",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: !1,
          timer: 1500,
        });
      }),
    document
      .querySelector("#bottom-end")
      .addEventListener("click", function () {
        Swal.fire({
          position: "bottom-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: !1,
          timer: 1500,
        });
      }),
    document
      .querySelector("#confirm-btn")
      .addEventListener("click", function () {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: !0,
          confirmButtonColor: "#5e76a6",
          cancelButtonColor: "#ef4444",
          confirmButtonText: "Yes, delete it!",
        }).then((e) => {
          e.isConfirmed &&
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
        });
      }),
    document
      .querySelector("#sweetalert4")
      .addEventListener("click", function () {
        const e = Swal.mixin({
          customClass: {
            confirmButton:
              "ti-btn bg-secondary text-white hover:bg-secondary focus:ring-secondary dark:focus:ring-offset-secondary",
            cancelButton:
              "ti-btn bg-danger text-white hover:bg-danger focus:ring-danger dark:focus:ring-offset-danger",
          },
          buttonsStyling: !1,
        });
        e.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: !0,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: !0,
        }).then((t) => {
          t.isConfirmed
            ? e.fire("Deleted!", "Your file has been deleted.", "success")
            : t.dismiss === Swal.DismissReason.cancel &&
              e.fire("Cancelled", "Your imaginary file is safe :)", "error");
        });
      }),
    document
      .querySelector("#customized-btn")
      .addEventListener("click", function () {
        Swal.fire({
          title: "Custom width, padding, color, background.",
          width: 600,
          padding: "3em",
          color: "#5e76a6",
          backdrop: `
        rgba(94,118,166,0.4)
      `,
        });
      }),
    document.querySelector("#timer-btn").addEventListener("click", function () {
      let e;
      Swal.fire({
        title: "Auto close alert!",
        html: "I will close in <b></b> milliseconds.",
        timer: 1500,
        timerProgressBar: !0,
        didOpen: () => {
          Swal.showLoading();
          const t = Swal.getHtmlContainer().querySelector("b");
          e = setInterval(() => {
            t.textContent = Swal.getTimerLeft();
          }, 100);
        },
        willClose: () => {
          clearInterval(e);
        },
      }).then((t) => {
        t.dismiss, Swal.DismissReason.timer;
      });
    }),
    document.querySelector("#ajax-btn").addEventListener("click", function () {
      Swal.fire({
        title: "Submit your username",
        input: "text",
        inputAttributes: { autocapitalize: "off" },
        showCancelButton: !0,
        confirmButtonText: "Look up",
        showLoaderOnConfirm: !0,
        preConfirm: (e) =>
          fetch(`//api.github.com/users/${e}`)
            .then((t) => {
              if (!t.ok) throw new Error(t.statusText);
              return t.json();
            })
            .catch((t) => {
              Swal.showValidationMessage(`Request failed: ${t}`);
            }),
        allowOutsideClick: () => !Swal.isLoading(),
      }).then((e) => {
        e.isConfirmed &&
          Swal.fire({
            title: `${e.value.login}'s avatar`,
            imageUrl: e.value.avatar_url,
          });
      });
    });
})();
