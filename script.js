const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerPoint = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerPoint) {
      box.classList.add("box-show");
    } else {
      box.classList.remove("box-show");
    }
  });
}
