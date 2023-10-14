
var t1 = gsap.timeline();

t1.from("nav img, nav h3,nav button",{
    y:-100,
    duration:1,
    stagger:1,

})
t1.from("#main h1",{
    x:-200,
    duration:1,
    stagger:1,
    opacity:0,
    stagger:0.5,
})
t1.from("#one,#two,#three,#four",{
    y:100,
    delay:1,
    duration:1.5,
    opacity:0,
    scale:0,
    stagger:1,
    repeat:-1,
    yoyo:true,
})
t1.from("h5",{
    opacity:0,
    scale:0,
    
})
t1.to("h5",{
    y:40,
    repeat:-1,
    yoyo:true,
})

