
let t1=gsap.timeline()


t1.to("#box",{
    x:1000,
    duration:3,
    delay:1,
    backgroundColor:"green",
    rotate:180,
    scale:0.5
})
// gsap.from("#box1",{
//     x:1000,
//     duration:3,
//     delay:1,
//     backgroundColor:"green",
//     rotate:180,
//     scale:0.5
// })

t1.to("#box1",{
    x:1000,
    duration:3,
    delay:1,
    backgroundColor:"pink",
    rotate:360,
    scale:0.5
})
t1.to("#box2",{
    x:1000,
    duration:3,
    delay:1,
    backgroundColor:"blue",
    rotate:180,
    scale:0.5
})





