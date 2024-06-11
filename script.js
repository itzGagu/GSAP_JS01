gsap.from("#page1 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
    repeat:1,
})
/*
gsap.from("#page2 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
    repeat:1,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        markers:true,
        start:"top 60%",

}})

gsap.from("#page3 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
    repeat:1,
    scrollTrigger:{
        trigger:"#page3 #box",
        scroller:"body",
        markers:true,
        start:"top 60%",

}})*/
gsap.from("#page2 h1",{
    opacity:0,
    duration:2,
    x:500,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        markrs:true,
        start:"top 50%",
    }
})

gsap.from("#page2 h2",{
    opacity:0,
    duration:1,
    x:500,
    scrollTrigger:{
        trigger:"#page2 h2",
        scroller:"body",
        markrs:true,
        start:"top 50%",
    }
})
gsap.from("#page4 #box",{
    scale:0,
    opacity:0,
    duration:1,
    rotate:720,
    scrollTrigger:{
        trigger:"#page4 #box",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top 30%",
        scrub:2,
        pin:true,
}
})
gsap.to("#page3 h1",{
    transform:"translateX(-150%)",
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -120%",
        scrub:2,
        pin:true,
    }
})