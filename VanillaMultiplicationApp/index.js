let firstnumber = document.getElementById("firstnumber");
let secondnumber = document.getElementById("secondnumber");
let answer = document.getElementById("answer");
let button = document.getElementsByTagName("button")[0];
let scorevalue = document.getElementById("scorevalue");

function generate() {
  let generatednumber = Math.floor(Math.random() * 20);
  return generatednumber;
}

function check() {
  if (
    Number(firstnumber.textContent) * Number(secondnumber.textContent) ===
    Number(answer.value)
  ) {
    scorevalue.innerText = Number(scorevalue.innerText) + 1;
    firstnumber.innerText = generate();
    secondnumber.innerText = generate();
    answer.value = "";
  } else if (
    Number(firstnumber.textContent) * Number(secondnumber.textContent) !=
    Number(answer.value)
  ) {
    if (answer.value.length === 0) {
    } else {
      scorevalue.innerText = Number(scorevalue.innerText) - 1;
      firstnumber.innerText = generate();
      secondnumber.innerText = generate();
      answer.value = "";
    }
  }
}

window.addEventListener("load", () => {
  firstnumber.innerText = generate();
  secondnumber.innerText = generate();
});

answer.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    check();
  }
});

button.addEventListener("click", () => {
  check();
});
