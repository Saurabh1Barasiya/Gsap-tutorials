// to() means 1 side se durse side jana

gsap.to(".box", {
    x: 500,
    scale: 1,
    delay: 2,
    duration: 3,
    yoyo: true,
    repeat: -1,
    backgroundColor: "red",
    ease: 1,

    // yoyo and repeat shat me hona chahiye tabhi effectrun hoga.
})
gsap.from(".box1", {
    x: 500,
    scale: 0,
    opacity: 0,
    delay: 2,
    duration: 3,
    backgroundColor: "blue",
    yoyo: true,
    repeat: -1,
    ease: 1,

    // yoyo and repeat shat me hona chahiye tabhi effectrun hoga.
})

gsap.from("h1", {
    y: -100,
    delay: 0.2,
    duration: 5,
    opacity: 0,
    repeat: -1,
    yoyo: true,
    color: "red"
})


gsap.to("h2", {
    x: 500,
    delay: 0.2,
    duration: 5,
    opacity: 0,
    repeat: -1,
    yoyo: true,
    color: "red",
    stagger: .2,
})
gsap.from(".food h3", {
    y: 50,
    delay: 0.2,
    duration: 5,
    // opacity:0,
    repeat: -1,
    yoyo: true,
    stagger: 1,
})



let tl = gsap.timeline(); //create the timeline
tl.to(".class1", {
    x: 100, delay: 0.2,
    duration: 5,
}) //start sequencing
    .to(".class2", {
        x: 100, ease: "elastic", delay: 0.2,
        duration: 5,
    })
    .to(".class3", {
        x: 100, rotation: 180, delay: 0.2,
        duration: 5,
    });