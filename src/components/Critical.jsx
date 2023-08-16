import React, { useEffect, useRef} from 'react'
import { gsap, ScrollTrigger } from 'gsap/all'

const Critical = () => {
    gsap.registerPlugin(ScrollTrigger)

    const divRef = useRef(null)

    useEffect(() => {
        const element = divRef.current

        let ctx = gsap.context(() => {
            let animation = gsap.timeline({scrollTrigger: {
                trigger: element.querySelector(".inner"),
                start: "center center",
                end: "+=200",
                scrub: 1,
                // markers: true
            }}).fromTo(element.querySelector("h1"), {
                    y: -100, opacity: 0, scaleY: 0
                }, {
                    y: 0, opacity: 1, scaleY: 1
                }).fromTo(element.querySelector("p"), {
                    x: -20, opacity: 0
                }, {
                    x: 0, opacity: 1
                })

            ScrollTrigger.create({
                trigger: element.querySelector(".inner"),
                start: "center center",
                end: "+=600",
                pin: element,
                scrub: 1,
                // markers: true,
                onEnter: () => animation.play(),
                onLeave: () => animation.reverse().resume(),
                onEnterBack: () => animation.play(),
                onLeaveBack: () => animation.reverse().reset()
            })
        }, element)

        return () => ctx.revert()
        
    }, [])

    return (
        <>
            <div ref={divRef}>
                <div className="w-screen h-[75vh] flex justify-center"> 
                    <div className="inner w-[60vw] flex flex-col justify-center">
                        <p className="text-[19.2px] text-[#90E0EF] font-[400]">&lt;Problem-solving outside of the box /&gt;</p>
                        <h1>A <span className="text-[#0000FF]">fullstack developer</span> with an emphasis on <span className="text-[#0000FF]">creative thinking</span></h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Critical