gsap.to("#page1 h1",{
    transform:"translateX(-100%)",
    fontWeight:"250",
    scrollTrigger:{
        // trigger:"#page1 h1", kyo nahi likha.
        // trigger:"#page1", isiliye likh rahe kyoki hamko pin property ka use karna h.
        // and pin property parent ka use karti h to #page1 parent h.

        trigger:"#page1",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -200%",
        scrub:3,
        pin:true,
    }
})