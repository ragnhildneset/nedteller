const button = document.querySelector('.buttons');
button.addEventListener('click', function(event) {
    const element = event.target
    if (element.nodeName === "BUTTON") {
      const num = +element.textContent;
      document.querySelector('.counter').textContent = num;
    }
});

const startButton = document.querySelector('.startbutton');
startButton.addEventListener('click', function(event) {
  if (startButton.getAttribute("disable") === null) {
    startButton.setAttribute("disable", true)
    const id = setInterval(() => countDown(id), 1000);
  }
});

function countDown(id) {
    const current = +document.querySelector('.counter').textContent;
    if (current === 0) {
      clearInterval(id);
      document.querySelector('.counter').textContent = "Ferdig!";
    } else {
      document.querySelector('.counter').textContent = current - 1;
    }
}
