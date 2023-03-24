const menubar = document.getElementsByClassName("menubar")
const container = document.getElementsByClassName("container")
const firstbutton = document.getElementsByClassName("firstbutton")
const links = document.getElementsByClassName("links")

menubar[0].addEventListener("click", () =>{
    if(container[0].classList.contains("notactive")){

        container[0].classList.remove("notactive")
        container[0].classList.add("active")
        if(links[0].classList.contains("remove")){
            links[0].classList.remove("remove")
            firstbutton[0].classList.remove("border")
        }
    }
    else{
        container[0].classList.remove("active")
        container[0].classList.add("notactive")
    }
    
})

firstbutton[0].addEventListener("click", () =>{
    links[0].classList.toggle("remove")
    firstbutton[0].classList.toggle("border")
    

})