//Call back são funções que são chamadas por meio de argumento, ou ele entra na função como argumento

// setInterval(function scrol(){
//     window.scrollY()
// },1000)

let divlist = document.querySelectorAll(".bldd")
let wind = document.querySelector(".layer_foto")
let windimg = document.querySelector("#imgsel")

divlist.forEach(e => {
    e.addEventListener('click', () => {
        let link = e.children[0].getAttribute("src")
        wind.classList.toggle("ative")
        windimg.setAttribute("src", link)
       
       
    })
});

wind.addEventListener('click', ()=> wind.classList.toggle("ative"))

// const arr = ["vava","fjdjdj","bsajddsjsn","sndsdsnds","amdnskjdns"]

// const arf = arr.filter((it) => it.includes("a"))

// console.log(arf)