let $headImage = document.querySelector('.fixed-header > .bg');
let $headTitle = document.querySelector('.fixed-header > .content > .title');

let $frameBlock = document.querySelector('.frame-content');
let $frameBlockInner = document.querySelector('.frame-wrapper');

let headImageInitScale = 2;
let headImageScaleDelta = headImageInitScale - 1;
let headImageCurentScale = headImageInitScale;
let titleCurentOpacity = 1;


let headFrameInitScale = 1;
let headFrameScaleDelta = headFrameInitScale;
let headFrameCurentScale = headFrameInitScale;

let windowHeight = window.innerHeight;



function setViewFrame(offset) {
    if (offset < (windowHeight * 3)) {  
        headFrameCurentScale = headFrameInitScale - (headFrameScaleDelta / (3 * windowHeight) * offset) * 0.8;
    } else {
        headFrameCurentScale = 1;
    }

    $frameBlockInner.style.cssText = 'transform: scale(' + headFrameCurentScale + ')';
}




function setView(offset) {
    if (offset < (windowHeight * 2)) {  
        headImageCurentScale = headImageInitScale - (headImageScaleDelta / (2 * windowHeight) * offset);
        titleCurentOpacity = 1 - (1 / (2 * windowHeight) * offset);
    } else {
        headImageCurentScale = 1;
        titleCurentOpacity = 0
    }

    $headImage.style.cssText = 'transform: scale(' + headImageCurentScale + ')';
    $headTitle.style.cssText = 'opacity: ' + titleCurentOpacity;
    // console.log(titleCurentOpacity);
}

window.addEventListener('scroll', function () {
    console.log()
    if(window.pageYOffset <= windowHeight/1.1){
        setView(window.pageYOffset); 

    } else {
        setView(windowHeight/1.1); 
    }


    if($frameBlock.getBoundingClientRect().top <= 0){
        $frameBlockInner.classList.add('active');
        setViewFrame(window.pageYOffset - windowHeight*2);

    } else {
        setViewFrame(1);
        $frameBlockInner.classList.remove('active');

    }

});