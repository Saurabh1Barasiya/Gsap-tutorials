var t1 = gsap.timeline();


t1.from("nav",{
    duration:1,
    delay:0.5,
    opacity:0,
    scale:0,
})

t1.from("#page1 .first, #page1 .middle h3,#page1 .last",{
    y:-100,
    duration:1,
    stagger:1,
})





t1.from(".heroleft h1",{
    x:-300,
    duration:1,
    stagger:1,
    opacity:0,
})
t1.from(".heroleft hr",{
    x:100,
    duration:1,
    opacity:0,
})
t1.from(".heroleft h6",{
    y:100,
    duration:1,
    opacity:0,
})
t1.from(".heroright img",{
    duration:2,
    scale:0,
    opacity:0,
})

t1.from("#page2 .box",{
    scale:0,
    opacity:0,
    duration:1.5,
    y:-100,
    stagger:1,
    
    scrollTrigger:{
        trigger:"#page2 .box",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 50%",
        scrub:5,
    }
})