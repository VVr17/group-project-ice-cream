(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-location-open]"),
    closeModalBtn: document.querySelector("[data-location-close]"),
    modal: document.querySelector("[data-location-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open")
    refs.modal.classList.toggle("is-hidden");
  }
})();