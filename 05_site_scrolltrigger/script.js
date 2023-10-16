// code loader ko upar lekar jayega.

var t1 = gsap.timeline()

function time(){
    var a = 0
    setInterval(()=>{
        a += Math.floor(Math.random()*10);
        if (a<100){
            document.querySelector("#loader h1").innerHTML = a+"%";
        }else{
            document.querySelector("#loader h1").innerHTML = 100+"%";
        }
    },110);
}



t1.to("#loader h1",{
    fontSize:"10vw",
    delay:.9,
    duration:1,
    onStart:time(),
})


t1.to("#loader",{
    // right:"100vw",
    top:"-100vh",
    delay:2,
    duration:2,
})



t1.to("#page1 h1",{
    transform:"translateX(-100%)",
    fontWeight:"250",
    scrollTrigger:{
        // trigger:"#page1 h1", kyo nahi likha.
        // trigger:"#page1", isiliye likh rahe kyoki hamko pin property ka use karna h.
        // and pin property parent ka use karti h to #page1 parent h.

        trigger:"#page1",
        scroller:"body",
        // markers:true,
        start:"top 0%",
        end:"top -200%",
        scrub:3,
        pin:true,
    }
})


// t1.to("#page3",{
//     top:"-200vh",
//     delay:2,
//     duration:2,
//     // delay:2,
//     // duration:1,
//     // scrollTrigger:{
//     //     // trigger:"#page1 h1", kyo nahi likha.
//     //     // trigger:"#page1", isiliye likh rahe kyoki hamko pin property ka use karna h.
//     //     // and pin property parent ka use karti h to #page1 parent h.

//     //     trigger:"#page3",
//     //     scroller:"body",
//     //     markers:true,
//     //     start:"top 80%",
//     //     end:"top 20%",
//     //     scrub:5,
//     //     // pin:true,
//     // }
// })





