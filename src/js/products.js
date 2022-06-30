(() => {
  const refs = {
    rotateRightBtn: document.getElementById("rotate-right"),
    rotateBackBtn: document.getElementById("rotate-back"),
    rotateBox: document.getElementById("flip-card")

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
    rotateRightBtn: document.getElementById("rotate-right-2"),
    rotateBackBtn: document.getElementById("rotate-back-2"),
    rotateBox: document.getElementById("flip-card-2")
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
    rotateRightBtn: document.getElementById("rotate-right-3"),
    rotateBackBtn: document.getElementById("rotate-back-3"),
    rotateBox: document.getElementById("flip-card-3"),
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