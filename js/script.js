//nav hover dot
const dot = document.querySelector('.nav-dot');
const dotSpan = document.querySelector('.nav-dot span')
const ul = document.querySelector('.nav-ul');
const list = document.querySelectorAll('.nav-ul>li')
let leftArr = ['70rem','230rem','390rem','550rem','695rem']

leftArr.forEach((number, index)  => {
    list[index].addEventListener('mouseenter',function(){
        dot.style.left = number
        dotSpan.style.width='100%';
        dotSpan.style.height='100%';
    })
    list[index].addEventListener('mouseleave',function(){
        dotSpan.style.width='0';
        dotSpan.style.height='0';
    })
});

//small menu display block
let smallMenu = document.querySelector('.header-inner-small-bg');
let smallMenuBtn = document.querySelectorAll('.header-inner-small-menu');

smallMenuBtn[0].addEventListener('click',function(){
    smallMenu.style.display='block'
})
smallMenuBtn[1].addEventListener('click',function(){
    smallMenu.style.display='none'
})

//header scroll
let newScr = $(window).scrollTop();
let oldScr = newScr;
let result = "";
$(window).scroll(function(){
    $('#header').css('borderBottom','1px solid #000')
    newScr=$(window).scrollTop();
    result = (newScr-oldScr) >= 0 ? 'DOWN' : 'UP' ;
    if(result == "DOWN"){
        $('#header').removeClass('headerParallaxDown144')
        $('#header').removeClass('headerParallaxDown100')
        $('#header').addClass('headerParallaxUp')
    }
    if(result == "UP"){
        $('#header').removeClass('headerParallaxUp')
        $('#header').removeClass('headerParallaxDown144')
        $('#header').addClass('headerParallaxDown100')
        if($(window).scrollTop()==0){
            $('#header').removeClass('headerParallaxDown100')
            $('#header').addClass('headerParallaxDown144')
            $('#header').css('border','none')
        }
    }
    oldScr=newScr;
});

// click img event
let wrap = document.getElementById('wrap');
wrap.addEventListener('click',(e) => {
    let x = e.clientX + 50;
    let y = e.clientY + 20;
    let imgSrc = [
        'img/layer-flower.png',
        'img/layer-grass.png',
        'img/layer-heart.png',
        'img/layer-meat.png',
        'img/layer-rainbow.png',
        'img/layer-toy.png',
        'img/layer-watermelon.png'
    ]
    let imgIndex = Math.floor(Math.random()*7);
    let img = document.createElement('img');
    let attr = imgSrc[imgIndex]
    img.setAttribute('src',attr)
    img.style.cssText=`position:absolute; top:${y}rem; left:${x}rem; opacity:1; transition:.3s; height:100rem;`
    wrap.appendChild(img);
    setTimeout(() => {
        img.style.transform='rotate(-20deg)'
    },100)
    setTimeout(() => {
        img.style.opacity='0'
    },500)
    setTimeout(() => {
        img.remove();
    },600)
})
//swiper
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".fa-arrow-right",
      prevEl: ".fa-arrow-left",
    },
    loop : true,
    slidesPerView : 3,
    spaceBetween : 40
});