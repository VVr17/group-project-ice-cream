const refs = {
  productList: document.querySelector('#products-list'),
};

refs.productList.addEventListener('click', toggleRotate);

function toggleRotate(event) {
  const isBtn =
    event.target.classList.contains('js-rotateBtn') ||
    event.target.closest('.js-rotateBtn');

  if (!isBtn) return;

  const cardToRotate = event.target.closest('#flip-card');
  cardToRotate.classList.toggle('flip');
}
