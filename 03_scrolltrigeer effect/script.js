gsap.from("#page-1 .box1",{
    scale:0,
    opacity:0,
    rotate:360,
    duration:1,
})

gsap.from("#page-2 .box2",{
    scale:0,
    opacity:0,
    rotate:360,
    duration:1,

    // 👇aese bhi likh sakte h
    // scrollTrigger:"#page-2 .box2",


    scrollTrigger:{
        trigger:"#page-2 .box2",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:true,
    }
    
    

})

gsap.from("#page-3 .box3",{
    scale:0,
    opacity:0,
    rotate:360,
    duration:1,
    // scrollTrigger:"#page-3 .box3",
    

    scrollTrigger:{
        trigger:"#page-3 .box3",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 50%",
        scrub:5,
    }
    

})
