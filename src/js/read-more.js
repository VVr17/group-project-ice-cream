const refs = {
  content: document.querySelector('#content'),
  button: document.querySelector('#read-more'),
};

refs.button.addEventListener('click', onBtnClick);

function onBtnClick(event) {
  if (content.className === 'open') {
    //shrink the box
    content.className = '';
    refs.button.childNodes[0].textContent = 'Read more';
  } else {
    //expand the box
    content.className = 'open';
    refs.button.childNodes[0].textContent = 'Read less';
  }
}
