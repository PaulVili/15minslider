const btnLeft = document.querySelector(".btnLeft");
const btnRight = document.querySelector(".btnRight");
const slider = document.querySelector(".slider");
let move = 0;

btnRight.addEventListener("click", ()=> {
    if(move > 4){
        move = -1;
    }
    move++
    slider.style.transform = `translateX(${-800*move}px)`;
});
btnLeft.addEventListener("click", ()=> {
    if(move == 0){
        move = 7;
    }
    move--
    slider.style.transform = `translateX(${-800*move}px)`;
});

function slideShow () {
    if(move > 4){
        move = -1;
    }
    move++
    slider.style.transform = `translateX(${-800*move}px)`;
}

setInterval(() => {
    slideShow ()
}, 5000);