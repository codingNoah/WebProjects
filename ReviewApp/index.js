
const person = [
    {
        id:1,
        name: "MOTI DANIEL",
        job: "WEB DEVELOPER",
        img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur totam autem nulla eveniet provident, ut quasi modi placeat hic. 1",
    },
    {
        id:2,
        name:"FANUAL ASSFAW",
        job: "FOOTBALLER",
        img: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur totam autem nulla eveniet provident, ut quasi modi placeat hic. 2",
    },
    {
        id:3,
        name:"ABERA MOLA",
        job: "DELALA",
        img:"https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur totam autem nulla eveniet provident, ut quasi modi placeat hic. 3",

    },
    {
        id:4,
        name: "OBSEN DERLO",
        job: "WRITER",
        img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur totam autem nulla eveniet provident, ut quasi modi placeat hic. 4",

    }

]


const btnleft = document.getElementById("btnleft")
const img = document.getElementById("image")
const btnright = document.getElementById("btnright")
const btnlast = document.getElementById("btnlast")
const job = document.getElementById("job")
const Name = document.getElementById("name")
const review2 = document.getElementById("review2")


function change(count,person){
    img.src = person[count].img
    img.alt = person[count].name
    job.textContent = person[count].job
    Name.textContent = person[count].name
    review2.textContent = person[count].text
}
let count = person.length - 1

btnleft.addEventListener("click", function(){
    if(count != 0){

        count --;
        change(count,person)

    }
    else{

        count = person.length - 1
        change(count,person)   
    }
})

btnright.addEventListener("click", function(){
    if(count != person.length - 1){

        count ++
        change(count,person)

    }
    else{

        count = 0
        change(count,person)

    }
})

btnlast.addEventListener("click", function(){

    count = Math.floor(Math.random() * 3)
    change(count,person)

})

window.addEventListener("DOMContentLoaded", function(){

    img.src = "./images/person1.jpg"
    img.alt = "YENOH TESSEMA"
    job.textContent = "MUSICIAN"
    review2.textContent = "yea its me"
    Name.textContent = "YENOH TESSEMA"
    
})

