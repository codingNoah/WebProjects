const button = document.querySelectorAll(".button");
const img = document.getElementsByTagName("img");
const names = document.getElementsByClassName("name");
const divs = document.getElementsByClassName("div");
const dollar = document.getElementsByClassName("dollar");
const content = document.getElementsByClassName("content");
const otherdivs = document.querySelectorAll(".div");
const order = document.getElementById("order");
const finishbutton = document.getElementById("finish");
const breakfastlst = [
  {
    name: "Avocado",
    src: "https://images.pexels.com/photos/1656666/pexels-photo-1656666.jpeg?auto=compress&cs=tinysrgb&w=1600",
    dollar: "$15.99",
  },
  {
    name: "Pancakes",
    src: "https://images.pexels.com/photos/3323680/pexels-photo-3323680.jpeg?auto=compress&cs=tinysrgb&w=1600",
    dollar: "$21",
  },
  {
    name: "Lettuce",
    src: "https://images.pexels.com/photos/1352199/pexels-photo-1352199.jpeg?auto=compress&cs=tinysrgb&w=1600",
    dollar: "$35.99",
  },
  {
    name: "Milk",
    src: "https://images.pexels.com/photos/2198626/pexels-photo-2198626.jpeg?auto=compress&cs=tinysrgb&w=1600",
    dollar: "$16",
  },
  {
    name: "Salad",
    src: "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1600",
    dollar: "$15.99",
  },
  {
    name: "Eggs",
    src: "https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=1600",
    dollar: "$10.99",
  },
];

const lunchlst = [
  {
    name: "Ham Burger",
    src: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dollar: "$25.99",
  },
  {
    name: "Pizza",
    src: "https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dollar: "$19.4",
  },
  {
    name: "Pasta",
    src: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1600",
    dollar: "$45",
  },
];

const shakeslst = [
  {
    name: "Chocolate Cupcake",
    src: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=1600",
    dollar: "$50",
  },
  {
    name: "Eggs",
    src: "https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=1600",
    dollar: "$10.99",
  },
  {
    name: "Coffee",
    src: "https://images.pexels.com/photos/3020919/pexels-photo-3020919.jpeg?auto=compress&cs=tinysrgb&w=1600",
    dollar: "$13.99",
  },
];

const alllst = [
  {
    name: "Avocado",
    src: "https://images.pexels.com/photos/1656666/pexels-photo-1656666.jpeg?auto=compress&cs=tinysrgb&w=1600",
    dollar: "$15.99",
  },
  {
    name: "Ham Burger",
    src: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dollar: "$25.99",
  },
  {
    name: "Pancakes",
    src: "https://images.pexels.com/photos/3323680/pexels-photo-3323680.jpeg?auto=compress&cs=tinysrgb&w=1600",
    dollar: "$21",
  },
  {
    name: "Pizza",
    src: "https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dollar: "$19.4",
  },
  {
    name: "Lettuce",
    src: "https://images.pexels.com/photos/1352199/pexels-photo-1352199.jpeg?auto=compress&cs=tinysrgb&w=1600",
    dollar: "$35.99",
  },
  {
    name: "Salad",
    src: "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1600",
    dollar: "$15.99",
  },
  {
    name: "Orange Juice",
    src: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=1600",
    dollar: "$31.99",
  },
  {
    name: "Pasta",
    src: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1600",
    dollar: "$45",
  },
  {
    name: "Chocolate Cupcake",
    src: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=1600",
    dollar: "$50",
  },
  {
    name: "Fruit",
    src: "https://images.pexels.com/photos/3025236/pexels-photo-3025236.jpeg?auto=compress&cs=tinysrgb&w=1600",
    dollar: "$29",
  },
  {
    name: "Coffee",
    src: "https://images.pexels.com/photos/3020919/pexels-photo-3020919.jpeg?auto=compress&cs=tinysrgb&w=1600",
    dollar: "$13.99",
  },
  {
    name: "Eggs",
    src: "https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=1600",
    dollar: "$10.99",
  },
];

function general(btn) {
  if (btn.classList[1] == "breakfast") {
    for (i = 0; i < alllst.length; i++) {
      if (0 <= i && i < breakfastlst.length) {
        if (divs[i].classList.contains("deactive")) {
          divs[i].classList.remove("deactive");
          img[i].src = breakfastlst[i].src;
          names[i].textContent = breakfastlst[i].name;
          dollar[i].textContent = breakfastlst[i].dollar;
          content[
            i
          ].textContent = `${breakfastlst[i].name} ipsum dolor sit amet consectetur adipisicing elit. Impedit
          modi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Accusamus, aperiam.`;
        } else {
          img[i].src = breakfastlst[i].src;
          names[i].textContent = breakfastlst[i].name;
          dollar[i].textContent = breakfastlst[i].dollar;
          content[
            i
          ].textContent = `${alllst[i].name} ipsum dolor sit amet consectetur adipisicing elit. Impedit
          modi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Accusamus, aperiam.`;
        }
      } else {
        if (divs[i].classList.contains("deactive") != true) {
          divs[i].classList.add("deactive");
        }
      }
    }
  } else if (btn.classList[1] == "shakes") {
    for (i = 0; i < alllst.length; i++) {
      if (0 <= i && i < shakeslst.length) {
        if (divs[i].classList.contains("deactive")) {
          divs[i].classList.remove("deactive");
          img[i].src = shakeslst[i].src;
          names[i].textContent = shakeslst[i].name;
          dollar[i].textContent = shakeslst[i].dollar;
          content[
            i
          ].textContent = `${shakeslst[i].name} ipsum dolor sit amet consectetur adipisicing elit. Impedit
          modi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Accusamus, aperiam.`;
        } else {
          img[i].src = shakeslst[i].src;
          names[i].textContent = shakeslst[i].name;
          dollar[i].textContent = shakeslst[i].dollar;
          content[
            i
          ].textContent = `${shakeslst[i].name} ipsum dolor sit amet consectetur adipisicing elit. Impedit
          modi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Accusamus, aperiam.`;
        }
      } else {
        if (!divs[i].classList.contains("deactive")) {
          divs[i].classList.add("deactive");
        }
      }
    }
  } else if (btn.classList[1] == "all") {
    for (i = 0; i < alllst.length; i++) {
      if (0 <= i && i < alllst.length) {
        if (divs[i].classList.contains("deactive")) {
          divs[i].classList.remove("deactive");
          img[i].src = alllst[i].src;
          names[i].textContent = alllst[i].name;
          dollar[i].textContent = alllst[i].dollar;
          content[
            i
          ].textContent = `${alllst[i].name} ipsum dolor sit amet consectetur adipisicing elit. Impedit
          modi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Accusamus, aperiam.`;
        } else {
          img[i].src = alllst[i].src;
          names[i].textContent = alllst[i].name;
          dollar[i].textContent = alllst[i].dollar;
          content[
            i
          ].textContent = `${alllst[i].name} ipsum dolor sit amet consectetur adipisicing elit. Impedit
          modi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Accusamus, aperiam.`;
        }
      } else {
        if (!divs[i].classList.contains("deactive")) {
          divs[i].classList.add("deactive");
        }
      }
    }
  } else if (btn.classList[1] == "lunch") {
    for (i = 0; i < alllst.length; i++) {
      if (0 <= i && i < lunchlst.length) {
        if (divs[i].classList.contains("deactive")) {
          divs[i].classList.remove("deactive");
          img[i].src = lunchlst[i].src;
          names[i].textContent = lunchlst[i].name;
          dollar[i].textContent = lunchlst[i].dollar;
          content[
            i
          ].textContent = `${lunchlst[i].name} ipsum dolor sit amet consectetur adipisicing elit. Impedit
          modi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Accusamus, aperiam.`;
        } else {
          img[i].src = lunchlst[i].src;
          names[i].textContent = lunchlst[i].name;
          dollar[i].textContent = lunchlst[i].dollar;
          content[
            i
          ].textContent = `${lunchlst[i].name} ipsum dolor sit amet consectetur adipisicing elit. Impedit
          modi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Accusamus, aperiam.`;
        }
      } else {
        if (!divs[i].classList.contains("deactive")) {
          divs[i].classList.add("deactive");
        }
      }
    }
  }
}

finishbutton.addEventListener("click", () => {
  order.classList.remove("show");
  order.textContent = "";
  finishbutton.setAttribute("id", "finish");
});
otherdivs.forEach((div) => {
  div.addEventListener("click", () => {
    let answer = window.prompt(
      `Would you like to order ${div.childNodes[3].childNodes[1].childNodes[1].textContent}? (yes/no)`
    );
    if (answer == "yes") {
      order.innerHTML += `Your ${div.childNodes[3].childNodes[1].childNodes[1].textContent} is ordered. Thank You for using our Restaurant<br>`;
      order.classList.add("show");
      finishbutton.setAttribute("id", "visiblebutton");
    }
  });
});

button.forEach((btn) => {
  btn.addEventListener("click", () => {
    general(btn);
  });
});

window.addEventListener("DOmcontentloaded", () => {
  for (i = 0; i < alllst.length; i++) {
    names[i].textContent = alllst[i].name;
    dollar[i].textContent = alllst[i].dollar;
    img[i].src = alllst[i].src;
    content[
      i
    ].textContent = `${alllst[i].name} ipsum dolor sit amet consectetur adipisicing elit. Impedit
    modi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    Accusamus, aperiam.`;
  }
});
