const modal = document.querySelector<HTMLDialogElement>("#contest-modal");
const form = document.querySelector<HTMLFormElement>("#contest-form");
const openButton = document.querySelector<HTMLButtonElement>("[data-open-modal]");
const closeButton = document.querySelector<HTMLButtonElement>("[data-close-modal]");
const success = document.querySelector<HTMLParagraphElement>(".modal__success");

if (modal && form && openButton && closeButton && success) {
  const fields = form.querySelectorAll(".form__field");

  openButton.addEventListener("click", function () {
    modal.showModal();
  });

  
  closeButton.addEventListener("click", function () {
    modal.close();
  });


  for (let i = 0; i < fields.length; i++) {
    const field = fields[i];

    field.addEventListener("input", function () {
      field.classList.remove("form__field--error");
    });
  }


  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    for (let i = 0; i < fields.length; i++) {
      const field = fields[i];
      const input = field.querySelector("input");

      if (input && input.checkValidity() === false) {
        field.classList.add("form__field--error");
        isValid = false;
      }
    }

    if (isValid) {
      form.hidden = true;
      success.hidden = false;
    }
  });


  modal.addEventListener("close", function () {
    form.reset();

    for (let i = 0; i < fields.length; i++) {
      fields[i].classList.remove("form__field--error");
    }

    form.hidden = false;
    success.hidden = true;
  });
}