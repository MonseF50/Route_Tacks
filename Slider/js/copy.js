let lightBoxContainer = document.querySelector('.lightBoxContainer');
let ligthBoxConent = document.querySelector('.ligthBoxConent');
let images = Array.from(document.querySelectorAll('.inner img'));
let closeBtn = document.getElementById('close');
let nextBtn = document.getElementById('nextBtn');
let prevBtn = document.getElementById('prevBtn');
let currentIndex;
//! for loop to the array list 
for(let i =0 ; i<images.length ; i++){
    images[i].addEventListener('click', function(e){
        let curentSrc = e.target.getAttribute('src');
        lightBoxContainer.classList.replace('d-none','d-flex'); 
        ligthBoxConent.style.backgroundImage = `url(${curentSrc})`;
        currentIndex = i;
    })
}
//todo event to close the ligthhouse 
closeBtn.addEventListener('click',close)
function close(){
    lightBoxContainer.classList.replace('d-flex','d-none');
}
nextBtn.addEventListener('click', function(){
    slider(1);
});
prevBtn.addEventListener('click',function(){
    slider(-1);
});
function slider(step){
    currentIndex+= step;
    if(currentIndex == images.length){
        currentIndex = 0;
    }
    if(currentIndex == -1){
        currentIndex = images.length;
    }
    let curentSrc = images[currentIndex].getAttribute('src');
    ligthBoxConent.style.backgroundImage = `url(${curentSrc})`; 
}
document.addEventListener('keydown',function(e){
    console.log(e.key);
    if(e.key == 'ArrowRight'){
        slider(1);
    }else if(e.key == 'ArrowLeft'){
        slider(-1)
    }else if(e.key == 'Escape'){
        close();
    }
})
lightBoxContainer.addEventListener('click',close);
ligthBoxConent.addEventListener('click',function(e){
    e.stopPropagation();
})