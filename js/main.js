const hamburger = document.querySelector(".icon");

const navigation = document.querySelector(".navigation")
const logo = document.querySelector(".logo")
const myLinks = document.querySelector(".myLinks")
const bttns = document.querySelector(".bttns")
hamburger.addEventListener("click", ()=>{
    if(myLinks.style.display=="flex") {
        myLinks.style.display = "none"
        navigation.style.backgroundColor = "#fbf8f3"
    } else{
        myLinks.style.display= "flex"
        navigation.style.backgroundColor = "#FFF"
    }
})