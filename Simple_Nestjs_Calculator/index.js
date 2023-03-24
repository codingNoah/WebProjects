const numbers = document.getElementsByClassName("number");
const inputone = document.getElementById("inputone");
const btns = document.getElementsByClassName("btn");
const equals = document.getElementById("equals");

const add = async (a, b) => {
  const response = await fetch("http://localhost:3000/api/add", {
    method: "POST",
    body: JSON.stringify({
      first: a,
      second: b,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
  const data = await response.json();
  inputone.value = data.sum;
};

const mul = async (a, b) => {
  const response = await fetch("http://localhost:3000/api/multiply", {
    method: "POST",
    body: JSON.stringify({
      first: a,
      second: b,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
  const data = await response.json();
  inputone.value = data.sum;
};

const div = async (a, b) => {
  const response = await fetch("http://localhost:3000/api/divide", {
    method: "POST",
    body: JSON.stringify({
      first: a,
      second: b,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
  const data = await response.json();
  inputone.value = data.sum;
};

const sub = async (a, b) => {
  const response = await fetch("http://localhost:3000/api/subtract", {
    method: "POST",
    body: JSON.stringify({
      first: a,
      second: b,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
  const data = await response.json();
  inputone.value = data.sum;
};

equals.addEventListener("click", (e) => {
  const input = inputone.value;
  if (input.includes("+")) {
    const values = input.split("+");
    add(Number(values[0]), Number(values[1]));
  }

  if (input.includes("*")) {
    const values = input.split("*");
    mul(Number(values[0]), Number(values[1]));
  }

  if (input.includes("/")) {
    const values = input.split("/");
    if (Number(values[1]) === 0) {
      inputone.value = "ERROR";
      return;
    }
    div(Number(values[0]), Number(values[1]));
  }

  if (input.includes("-")) {
    const values = input.split("-");
    sub(Number(values[0]), Number(values[1]));
  }
});

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", () => {
    inputone.value += numbers[i].textContent;
  });
}

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    inputone.value += btns[i].textContent;
  });
}
