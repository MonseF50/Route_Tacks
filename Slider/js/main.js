//! global variables
let lightBoxContainer = document.querySelector('.lightBoxContainer');
let ligthBoxConent = document.querySelector('.ligthBoxConent');
let images = Array.from(document.querySelectorAll('.inner img'));
let closeBtn = document.getElementById('close');
let nextBtn = document.getElementById('nextBtn');
let prevBtn = document.getElementById('prevBtn');
let currentIndex;

for(let i = 0 ; i < images.length ; i++){
    images[i].addEventListener('click',function(e){
        let curentSrc = e.target.getAttribute('src');
        lightBoxContainer.classList.replace('d-none','d-flex');
        ligthBoxConent.style.backgroundImage = `url(${curentSrc})`;
        currentIndex = images.indexOf(e.target);
    });
}
//* event to change photo to right
nextBtn.addEventListener('click',function(){
    slider(1);
})
//* event to change photo to left
prevBtn.addEventListener('click',function(){
    slider(-1);
})
function slider(step){
    currentIndex+=step;
    if(currentIndex == images.length){
        currentIndex = 0; 
    }else if(currentIndex == 0){
        currentIndex = images.length-1;
    }
    let curentSrc =images[currentIndex].getAttribute('src');
    ligthBoxConent.style.backgroundImage = `url(${curentSrc})`
}
closeBtn.addEventListener('click',closeSlide);
function closeSlide(){
    lightBoxContainer.classList.replace('d-flex','d-none');
}
document.addEventListener('keydown',function(e){
    if(e.key =='ArrowRight'){
        slider(1);
    }else if(e.key == 'ArrowLeft'){
        slider(-1);
    }else if(e.key == 'Escape'){
        closeSlide();
    }
});
lightBoxContainer.addEventListener('click',closeSlide);
ligthBoxConent.addEventListener('click',function(e){
    e.stopPropagation();
})
