let t1= gsap.timeline()

t1.from("#nav1 h3",{
    y:-50,
    duration:0.6,
    opacity:0,
    delay:0.4,
    stagger:0.2

})

t1.from("#second h3",{
    x:-500,
    duration:0.4,
    opacity:0,
    stagger:0.4
   
})

t1.from("img",{
    x:100,
    opacity:0,
    duration:0.5,
    rotate:60,
    stagger:0.5


})

gsap.from("#page2 #circle",{
    scale:0,
    duration:1.5,
    rotate:720,
    backgroundColor:"red",
    delay:1,
    scrollTrigger:{
        trigger:"#page2 #circle",
        scroller:"body",
        markers:true,
        start:"top 90%",
        end:"top 20%",
        scrub:5
    }
})

gsap.from("#page3 h1",{
    transform: "translateX(-120%)",
     scrollTrigger:{
        trigger:"#page3 ",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:3,
        pin:true
    }
})



