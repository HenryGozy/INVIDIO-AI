const buttons = document.querySelectorAll(".btnScroll")
const scrollContaianer = document.getElementById('comment2')
buttons.forEach((btn)=>{
btn.addEventListener('click',()=>{
    const scrollWidth  = scrollContaianer.clientWidth;
    let scrollamout = 0
    scrollamout = (btn.id === 'left') ? -1 : 1
    console.log(scrollamout)
    let scrollDirection = scrollamout * scrollWidth 
    scrollContaianer.scrollBy({left:scrollDirection , behavior:"smooth"})
})
})

scrollContaianer.addEventListener('scroll',check)

function check(){
    buttons[0].style.display = (scrollContaianer.scrollLeft == 0) ? "none" : "block"
}

check() 


const buttonsPon = document.querySelectorAll(".btnSponCont button")

const scrollContaianerSpon = document.getElementsByClassName('images')[0]
buttonsPon.forEach((btn)=>{
btn.addEventListener('click',()=>{
    const scrollWidth  = scrollContaianer.clientWidth;
    let scrollamout = 0
    scrollamout = (btn.id === 'sponleft') ? -1 : 1
    let scrollDirection = scrollamout * scrollWidth
    scrollContaianerSpon.scrollBy({left:scrollDirection , behavior:"smooth"})
})
})

scrollContaianer.addEventListener('scroll',check)

function check2(){
    buttonsPon[0].style.display = (scrollContaianer.scrollLeft == 0) ? "none" : "block"
}


const hambuger = document.getElementById("hambuger")
const cancel = document.getElementById("cancel")
hambuger.addEventListener("click" , ()=>{
    document.getElementById("header2").style.display="flex"
    document.body.style.overflow="hidden"
})

cancel.addEventListener("click" , ()=>{
    document.getElementById("header2").style.display="none"
    document.body.style.overflow="scroll"

})

check() 

