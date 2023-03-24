const NavElements = document.querySelectorAll("span");
const lst = ["history", "vision", "goals"];
const contenttitle = document.getElementsByClassName("contenttitle");
const contentparagraph = document.getElementsByClassName("contentparagraph");

const paragraph = {
  History: `History Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Accusantium, officia! Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Accusantium, officia! Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Accusantium, officia! Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Accusantium, officia! Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Accusantium, officia!`,

  Vision: `History Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Accusantium, officia! Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Accusantium, officia! Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Accusantium, officia! Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Accusantium, officia! Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Accusantium, officia!`,

  Goals: `Goals Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Accusantium, officia! Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Accusantium, officia! Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Accusantium, officia! Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Accusantium, officia! Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Accusantium, officia! <br/>
    <br/>
    ItemOne <br/>
    ItemTwo <br/>
    ItemThree`,
};

NavElements.forEach((Navelement) => {
  Navelement.addEventListener("click", () => {
    for (i = 0; i < lst.length; i++) {
      const element = document.getElementsByClassName(lst[i]);
      const specificelement = document.getElementsByClassName(
        Navelement.classList[0]
      );
      specificelement[0].classList.remove("bluebackground");
      specificelement[0].classList.add("whiteelement");

      contenttitle[0].textContent = specificelement[0].classList[0];
      contenttitle[0].style.textTransform = "capitalize";

      while (true) {
        if (specificelement[0].classList.contains("history")) {
          contentparagraph[0].innerHTML = paragraph.History;
        } else if (specificelement[0].classList.contains("vision")) {
          contentparagraph[0].innerHTML = paragraph.Vision;
        } else {
          contentparagraph[0].innerHTML = paragraph.Goals;
        }
        break;
      }

      if (!specificelement[0].classList.contains(element[0].classList[0])) {
        if (element[0].classList.contains("whiteelement")) {
          element[0].classList.remove("whiteelement");
          element[0].classList.add("bluebackground");
        }
      }
    }
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const history = document.getElementsByClassName("history")[0];
  history.classList.remove("bluebackground");
  history.classList.add("whiteelement");

  contentparagraph[0].textContent = paragraph.History;
});
