(() => {
  const refs = {
    rotateRightBtn: document.querySelector("[rotate-right]"),
    rotateBackBtn: document.querySelector("[rotate-back]"),
    rotateBox: document.querySelector("[flip-card]"),
  };

  refs.rotateRightBtn.addEventListener("click", toggleRotate);
  refs.rotateBackBtn.addEventListener("click", toggleRotate);

  function toggleRotate() {
    if (refs.rotateBox.classList.contains("flip")) {
      refs.rotateBox.classList.remove("flip");
    } else {
      refs.rotateBox.classList.add("flip");
    }
  }
})();



(() => {
  const refs = {
    rotateRightBtn: document.querySelector("[rotate-right-2]"),
    rotateBackBtn: document.querySelector("[rotate-back-2]"),
    rotateBox: document.querySelector("[flip-card-2]"),
  };

  refs.rotateRightBtn.addEventListener("click", toggleRotate);
  refs.rotateBackBtn.addEventListener("click", toggleRotate);

  function toggleRotate() {
    if (refs.rotateBox.classList.contains("flip")) {
      refs.rotateBox.classList.remove("flip");
    } else {
      refs.rotateBox.classList.add("flip");
    }
  }
})();

(() => {
  const refs = {
    rotateRightBtn: document.querySelector("[rotate-right-3]"),
    rotateBackBtn: document.querySelector("[rotate-back-3]"),
    rotateBox: document.querySelector("[flip-card-3]"),
  };

  refs.rotateRightBtn.addEventListener("click", toggleRotate);
  refs.rotateBackBtn.addEventListener("click", toggleRotate);

  function toggleRotate() {
    if (refs.rotateBox.classList.contains("flip")) {
      refs.rotateBox.classList.remove("flip");
    } else {
      refs.rotateBox.classList.add("flip");
    }
  }
})();