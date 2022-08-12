(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    openModalBtn1: document.querySelector("[data-modal-open1]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    productList: document.querySelector('#products-list'),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.openModalBtn1.addEventListener("click", toggleModal);
  refs.productList.addEventListener('click', toggleModalFromProducts);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open")
    refs.modal.classList.toggle("is-hidden");
  }

  function toggleModalFromProducts(event) {

    const isBtn = event.target.classList.contains('js-open-modal-btn') ||
      event.target.closest('.js-open-modal-btn');

    if (!isBtn) {return}
    document.body.classList.toggle("modal-open")
    refs.modal.classList.toggle("is-hidden");
  }
})();
