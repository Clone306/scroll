// var owl = $('.owl-carousel');
// owl.owlCarousel({
//     loop:true,
//     nav:true,
//     margin:10,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },            
//         1000:
//         {
//             items:5
//         }
//     }
// });
// AOS.init();
               //Variables///
let g1 = document.querySelector(".g1")
let g2 = document.querySelector(".g2")               
let body = document.querySelector("body")
let svg = document.querySelector(".pn")
let h1 = document.querySelector(".h-1")
let img1 = document.querySelector(".img1")
let img2 = document.querySelector(".img2")
let img3 = document.querySelector(".img3")
let img4 = document.querySelector(".img4")
let img5 = document.querySelector(".img5")
let img6 = document.querySelector(".img6")
let img7 = document.querySelector(".img7")
let img8 = document.querySelector(".img8")
let img9 = document.querySelector(".img9")
let img10 = document.querySelector(".img10")
let img11 = document.querySelector(".img11")
let img12 = document.querySelector(".img12")
let img13 = document.querySelector(".img13")
let img14 = document.querySelector(".img14")
let img15 = document.querySelector(".img15")
let screen = document.querySelector(".div-1") 
let info = document.querySelector(".info")
let about = document.querySelector(".about")
let i1 = document.querySelector(".in1")
let a1 = document.querySelector(".a1")
let i2 = document.querySelector(".in2")
let a2 = document.querySelector(".a2")
let i3 = document.querySelector(".in3")
let a3 = document.querySelector(".a3")
let i4 = document.querySelector(".in4")
let a4 = document.querySelector(".a4")
let i5 = document.querySelector(".in5")
let a5 = document.querySelector(".a5")
let i6 = document.querySelector(".in6")
let a6 = document.querySelector(".a6")
let path = document.querySelector(".transrgwht");
let dot = document.querySelectorAll(".dotsst")
window.onscroll = function (event) {
    var scroll = window.pageYOffset;
    if (scroll < 300) {
        // green
        dot[0].style.fill="rgb(0, 146, 255)"
        dot[1].style.fill="white"
        dot[2].style.fill="white"
        dot[3].style.fill="white"
        dot[4].style.fill="white"
        dot[5].style.fill="white"
        dot[6].style.fill="white"

        info.style.opacity="1"
        info.style.translate="0"
        about.style.opacity="1"
        about.style.translate="0"
        i1.style.opacity = "0"
        i1.style.translate="0 -1000px"
        a1.style.opacity="0"
        a1.style.translate="0 -1000px"
        path.style.strokeDasharray="0 ,1000"

        screen.style.background=""
        screen.style.backgroundColor ="white"
        body.style.backgroundColor = '#6F1AB6';
        svg.style.backgroundColor = '#6F1AB6';
        img2.style.translate = "0"
        img1.style.translate = "0"
        img3.style.translate = "0 -1000px"
        img4.style.translate = "0 1000px"
        img5.style.translate = "-1000px 0"
        img6.style.translate = "0 1000px"
        img7.style.translate = "0 1000px"
        img8.style.translate = "0 1000px"
        img9.style.translate = "1000px 0"
        img10.style.translate = "0 -1000px"
        img11.style.translate = "0 -1000px"
        img12.style.translate = "0 1000px"
        img13.style.translate = "0 1000px"
        img14.style.translate = "0 -1000px"
        img15.style.translate = "0 1000px"

        i2.style.opacity = "0"
        i2.style.translate="0 -1000px"
        a2.style.opacity="0"
        a2.style.translate="0 -1000px"

        i3.style.opacity = "0"
        i3.style.translate="0 -1000px"
        a3.style.opacity="0"
        a3.style.translate="0 -1000px"

        i4.style.opacity = "0"
        i4.style.translate="0 -1000px"
        a4.style.opacity="0"
        a4.style.translate="0 -1000px"

        i5.style.opacity = "0"
        i5.style.translate="0 -1000px"
        a5.style.opacity="0"
        a5.style.translate="0 -1000px"
 
        i6.style.opacity = "0"
        i6.style.translate="0 -1000px"
        a6.style.opacity="0"
        a6.style.translate="0 -1000px"
          
    
    } else if (scroll >= 300 && scroll < 1200) {
        // yellow
        dot[0].style.fill="rgb(0, 146, 255)"
        dot[1].style.fill="rgb(0, 146, 255)"
        dot[2].style.fill="white"
        dot[3].style.fill="white"
        dot[4].style.fill="white"
        dot[5].style.fill="white"
        dot[6].style.fill="white"


        h1.style.display = "fixed"
        info.style.opacity="0"
        info.style.translate="0 -1000px"
        about.style.opacity="0"
        about.style.translate="0 -1000px"
        path.style.strokeDasharray="140,1000"

        svg.style.backgroundColor = '#2F58CD';
        screen.style.background=""
        body.style.backgroundColor = '#2F58CD';
         screen.style.backgroundColor ="#0C134F"
        img1.style.translate = "0 -1000px"
        img2.style.translate = "0 1000px"
        img3.style.translate = "0"
        img4.style.translate = "0"
        img5.style.translate = "-1000px 0"
        img6.style.translate = "0 1000px"
        img7.style.translate = "0 1000px"
        img8.style.translate = "0 1000px"
        img9.style.translate = "1000px 0"
        img10.style.translate = "0 -1000px"
        img11.style.translate = "0 -1000px"
        img12.style.translate = "0 1000px"
        img13.style.translate = "0 1000px"
        img14.style.translate = "0 -1000px"
        img15.style.translate = "0 1000px"
        i1.style.opacity = "1"
        i1.style.translate="0"
        a1.style.opacity="1"
        a1.style.translate="0"

        i2.style.opacity = "0"
        i2.style.translate="0 -1000px"
        a2.style.opacity="0"
        a2.style.translate="0 -1000px"

        i3.style.opacity = "0"
        i3.style.translate="0 -1000px"
        a3.style.opacity="0"
        a3.style.translate="0 -1000px"

        i4.style.opacity = "0"
        i4.style.translate="0 -1000px"
        a4.style.opacity="0"
        a4.style.translate="0 -1000px"

        i5.style.opacity = "0"
        i5.style.translate="0 -1000px"
        a5.style.opacity="0"
        a5.style.translate="0 -1000px"


        i6.style.opacity = "0"
        i6.style.translate="0 -1000px"
        a6.style.opacity="0"
        a6.style.translate="0 -1000px"

    } else if (scroll >= 1200 && scroll < 2100) {
        // blue
        dot[0].style.fill="rgb(0, 146, 255)"
        dot[1].style.fill="rgb(0, 146, 255)"
        dot[2].style.fill="rgb(0, 146, 255)"
        dot[3].style.fill="white"
        dot[4].style.fill="white"
        dot[5].style.fill="white"
        dot[6].style.fill="white"

        path.style.strokeDasharray="280,1000"

        h1.style.display = "block"
        info.style.opacity="0"
        info.style.translate="0 -1000px"
        about.style.opacity="0"
        about.style.translate="0 -1000px"
        screen.style.background=""
        svg.style.backgroundColor = '#394867';
        body.style.backgroundColor = '#394867';
        screen.style.backgroundColor ="#181823"
        img1.style.translate = "0 -1000px"
        img2.style.translate = "0 1000px"
        img3.style.translate = "0 -1000px"
        img4.style.translate = "0 1000px"
        img5.style.translate = "0"
        img6.style.translate = "0 "
        img7.style.translate = "0 1000px"
        img8.style.translate = "0 1000px"
        img9.style.translate = "1000px 0"
        img10.style.translate = "0 -1000px"
        img11.style.translate = "0 -1000px"
        img12.style.translate = "0 1000px"
        img13.style.translate = "0 1000px"
        img14.style.translate = "0 -1000px"
        img15.style.translate = "0 1000px"

        i1.style.opacity = "0"
        i1.style.translate="0 -1000px"
        a1.style.opacity="0"
        a1.style.translate="0 -1000px"
        i2.style.opacity = "1"
        i2.style.translate="0"
        a2.style.opacity="1"
        a2.style.translate="0 "

        i3.style.opacity = "0"
        i3.style.translate="0 -1000px"
        a3.style.opacity="0"
        a3.style.translate="0 -1000px"

        i4.style.opacity = "0"
        i4.style.translate="0 -1000px"
        a4.style.opacity="0"
        a4.style.translate="0 -1000px"

        i5.style.opacity = "0"
        i5.style.translate="0 -1000px"
        a5.style.opacity="0"
        a5.style.translate="0 -1000px"

        i6.style.opacity = "0"
        i6.style.translate="0 -1000px"
        a6.style.opacity="0"
        a6.style.translate="0 -1000px"


    } else if (scroll >= 2100 && scroll < 3000) {
        dot[0].style.fill="rgb(0, 146, 255)"
        dot[1].style.fill="rgb(0, 146, 255)"
        dot[2].style.fill="rgb(0, 146, 255)"
        dot[3].style.fill="rgb(0, 146, 255)"
        dot[4].style.fill="white"
        dot[5].style.fill="white"
        dot[6].style.fill="white"

        // orange
        path.style.strokeDasharray="410,1000"

        info.style.opacity="0"
        info.style.translate="0 -1000px"
        about.style.opacity="0"
        about.style.translate="0 -1000px"
        h1.style.display = "none"
        svg.style.backgroundColor = '#2F58CD';
        screen.style.background=""
        body.style.backgroundColor = '#2F58CD';
        screen.style.backgroundColor ="#5CB8E4"
        
        img1.style.translate = "0 -1000px"
        img2.style.translate = "0 1000px"
        img3.style.translate = "0 -1000px"
        img4.style.translate = "0 1000px"
        img5.style.translate = "-1000px 0"
        img6.style.translate = "0 1000px"
        img7.style.translate = "0 "
        img8.style.translate = "0 "
        img9.style.translate = "0"
        img10.style.translate = "0 "
        img11.style.translate = "0 "
        img12.style.translate = "0 1000px"
        img13.style.translate = "0 1000px"
        img14.style.translate = "0 -1000px"
        img15.style.translate = "0 1000px"
        i1.style.opacity = "0"
        i1.style.translate="0 -1000px"
        a1.style.opacity="0"
        a1.style.translate="0 -1000px"

        i2.style.opacity = "0"
        i2.style.translate="0 -1000px"
        a2.style.opacity="0"
        a2.style.translate="0 -1000px"

        i3.style.opacity = "1"
        i3.style.translate="0 "
        a3.style.opacity="1"
        a3.style.translate="0"

        i4.style.opacity = "0"
        i4.style.translate="0 -1000px"
        a4.style.opacity="0"
        a4.style.translate="0 -1000px"

        i5.style.opacity = "0"
        i5.style.translate="0 -1000px"
        a5.style.opacity="0"
        a5.style.translate="0 -1000px"

        i6.style.opacity = "0"
        i6.style.translate="0 -1000px"
        a6.style.opacity="0"
        a6.style.translate="0 -1000px"

    } else if (scroll >= 3000 && scroll < 3900) {
        // red
        dot[0].style.fill="rgb(0, 146, 255)"
        dot[1].style.fill="rgb(0, 146, 255)"
        dot[2].style.fill="rgb(0, 146, 255)"
        dot[3].style.fill="rgb(0, 146, 255)"
        dot[4].style.fill="rgb(0, 146, 255)"
        dot[5].style.fill="white"
        dot[6].style.fill="white"

        path.style.strokeDasharray="540,1000"

        info.style.opacity="0"
        info.style.translate="0 -1000px"
        about.style.opacity="0"
        about.style.translate="0 -1000px"
        svg.style.backgroundColor = '#2F58CD';
        screen.style.background="url(interior.jpg)"
        h1.style.display = "none"
        body.style.backgroundColor = '#2F58CD';
        img1.style.translate = "0 -1000px"
        img2.style.translate = "0 1000px"
        img3.style.translate = "0 -1000px"
        img4.style.translate = "0 1000px"
        img5.style.translate = "-1000px 0"
        img6.style.translate = "0 1000px"
        img7.style.translate = "0 1000px"
        img8.style.translate = "0 1000px"
        img9.style.translate = "1000px 0"
        img10.style.translate = "0 -1000px"
        img11.style.translate = "0 -1000px"
        img12.style.translate = "0"
        img13.style.translate = "0 1000px"
        img14.style.translate = "0 -1000px"
        img15.style.translate = "0 1000px"
        i1.style.opacity = "0"
        i1.style.translate="0 -1000px"
        a1.style.opacity="0"
        a1.style.translate="0 -1000px"
        i2.style.opacity = "0"
        i2.style.translate="0 -1000px"
        a2.style.opacity="0"
        a2.style.translate="0 -1000px"

        i3.style.opacity = "0"
        i3.style.translate="0 -1000px"
        a3.style.opacity="0"
        a3.style.translate="0 -1000px"

        i4.style.opacity = "1"
        i4.style.translate="0 "
        a4.style.opacity="1"
        a4.style.translate="0"

        i5.style.opacity = "0"
        i5.style.translate="0 -1000px "
        a5.style.opacity="0"
        a5.style.translate="0 -1000px"

        i6.style.opacity = "0"
        i6.style.translate="0 -1000px"
        a6.style.opacity="0"
        a6.style.translate="0 -1000px"
}
   else if(scroll >= 3900 && scroll < 4600)
   {
       dot[0].style.fill="rgb(0,146,255)"
       dot[1].style.fill="rgb(0,146,255)"
       dot[2].style.fill="rgb(0,146,255)"
       dot[3].style.fill="rgb(0,146,255)"
       dot[4].style.fill="rgb(0,146,255)"
       dot[5].style.fill="rgb(0, 146, 255)"
     dot[6].style.fill="white"

    path.style.strokeDasharray="680,1000"

    info.style.opacity="0"
    info.style.translate="0 -1000px"
    about.style.opacity="0"
    about.style.translate="0 -1000px"
    h1.style.display = "none"
    svg.style.backgroundColor = '#0C134F';
    screen.style.background=""
    screen.style.backgroundColor="#0B2447"
    body.style.backgroundColor = '#0C134F';
    img1.style.translate = "0 -1000px"
    img2.style.translate = "0 1000px"
    img3.style.translate = "0 -1000px"
    img4.style.translate = "0 1000px"
    img5.style.translate = "-1000px 0"
    img6.style.translate = "0 1000px"
    img7.style.translate = "0 1000px"
    img8.style.translate = "0 1000px"
    img9.style.translate = "1000px 0"
    img10.style.translate = "0 -1000px"
    img11.style.translate = "0 -1000px"
    img12.style.translate = "0 1000px"
    img13.style.translate = "0"
    img14.style.translate = "0"
    img15.style.translate = "0 1000px"
    i1.style.opacity = "0"
    i1.style.translate="0 -1000px"
    a1.style.opacity="0"
    a1.style.translate="0 -1000px"
    i2.style.opacity = "0"
    i2.style.translate="0 -1000px"
    a2.style.opacity="0"
    a2.style.translate="0 -1000px"

    i3.style.opacity = "0"
        i3.style.translate="0 -1000px"
        a3.style.opacity="0"
        a3.style.translate="0 -1000px"

        i4.style.opacity = "0"
        i4.style.translate="0 -1000px"
        a4.style.opacity="0"
        a4.style.translate="0 -1000px"

        i5.style.opacity = "1"
        i5.style.translate="0"
        a5.style.opacity="1"
        a5.style.translate="0"

        i6.style.opacity = "0"
        i6.style.translate="0 -1000px"
        a6.style.opacity="0"
        a6.style.translate="0 -1000px"
    
   }
     else {
         dot[0].style.fill="rgb(0, 146, 255"
         dot[1].style.fill="rgb(0, 146, 255"
         dot[2].style.fill="rgb(0, 146, 255"
         dot[3].style.fill="rgb(0, 146, 255"
         dot[4].style.fill="rgb(0, 146, 255"
         dot[5].style.fill="rgb(0, 146, 255"
         dot[6].style.fill="rgb(0, 146, 255)"

        path.style.strokeDasharray="1000,1000"

        info.style.opacity="0"
        info.style.translate="0 -1000px"
        about.style.opacity="0"
        about.style.translate="0 -1000px"
        
        h1.style.display = "none"
        svg.style.backgroundColor = '#1F8A70';
        screen.style.background=""
        screen.style.backgroundColor="#03C988"
        body.style.backgroundColor = '#1F8A70';
        img1.style.translate = "0 -1000px"
        img2.style.translate = "0 1000px"
        img3.style.translate = "0 -1000px"
        img4.style.translate = "0 1000px"
        img5.style.translate = "-1000px 0"
        img6.style.translate = "0 1000px"
        img7.style.translate = "0 1000px"
        img8.style.translate = "0 1000px"
        img9.style.translate = "1000px 0"
        img10.style.translate = "0 -1000px"
        img11.style.translate = "0 -1000px"
        img12.style.translate = "0 1000px"
        img13.style.translate = "0 1000px"
        img14.style.translate = "0 -1000px"
        img15.style.translate = "0"
        i1.style.opacity = "0"
        i1.style.translate="0 -1000px"
        a1.style.opacity="0"
        a1.style.translate="0 -1000px"
        i2.style.opacity = "0"
        i2.style.translate="0 -1000px"
        a2.style.opacity="0"
        a2.style.translate="0 -1000px"

        i3.style.opacity = "0"
        i3.style.translate="0 -1000px"
        a3.style.opacity="0"
        a3.style.translate="0 -1000px"

        i4.style.opacity = "0"
        i4.style.translate="0 -1000px"
        a4.style.opacity="0"
        a4.style.translate="0 -1000px"

        i5.style.opacity = "0"
        i5.style.translate="0 -1000px"
        a5.style.opacity="0"
        a5.style.translate="0 -1000px"

        i6.style.opacity = "1"
        i6.style.translate="0"
        a6.style.opacity="1"
        a6.style.translate="0"
    }
}
//     $(window).scroll(function(){
//         $(".info").css("opacity", 1 - $(window).scrollTop() / 70);
//       });
//       $(window).scroll(function(){
//         $(".about").css("opacity", 1 - $(window).scrollTop() / 50);
//       });
// }
// window.onscroll = ()=>
// {
//     if(img1.style.translate ==="0")
//     {
//         // info.style.translate = "0 -1000px"
//         info.style.opacity = "1"
//     }
//     else
//     {
//         info.style.opacity = "0"

//     }
// }

// gsap.registerPlugin(ScrollTrigger)   

// $(window).on("scroll touchmove", function() {
//     if ($(document).scrollTop() >= $(".div-1").position().top) {
//             $('body').css('background', $(".div-1").attr("data-color"));

//     };
//     if ($(document).scrollTop() > $(".div-2").position().top) {
//             $('body').css('background', $(".div-2").attr("data-color"))
//     };
//     if ($(document).scrollTop() > $(".div-3").position().top) {

//             $('body').css('background', $(".div-3").attr("data-color"))
//     };
    // if ($(document).scrollTop() > $("#four").position().top) {

    //         $('body').css('background', $("#four").attr("data-color"))
    // };
    // if ($(document).scrollTop() >= $("#five").position().top) {
    //         $('body').css('background', $("#five").attr("data-color"))
    // };
// });
// window.addEventListener("scroll",()=>
// {
//     if()
// })
// gsap.to(".h-1",
// {
//     x:700,
//     duration:3,
//     scrollTrigger:{
//         trigger:".h-1",
//         start:"top 30%",
//         marker:{
//             startColor:"red",
//             endColor:"blue",
//             fontSize:"4rem",
//             indent : 20
//         }

//     }
// }