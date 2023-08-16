import React, { useEffect, useRef} from 'react'
import { gsap, ScrollTrigger } from 'gsap/all'

const Jewelry = () => {
    gsap.registerPlugin(ScrollTrigger)

    const divRef = useRef(null)


    useEffect(() => {
        const element = divRef.current

        let ctx = gsap.context(() => {

            let animation = gsap.timeline({scrollTrigger: {
                trigger: element.querySelector(".inner"),
                start: "center center",
                end: "+=300",
                scrub: 1,
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
                onEnter: () => animation.play(),
                onLeave: () => animation.reverse().resume(),
                onEnterBack: () => animation.play(),
                onLEaveBack: () => animation.reverse().reset(),
            })
        }, element)

        return () => ctx.revert()

    }, [])
    
    return (
        <>
            <div ref={divRef}>
                <div className="w-screen h-[50vh] flex justify-center"> 
                    <div className=" inner w-[60vw] flex flex-col justify-center">
                        <p className="text-[19.2px] text-[#90E0EF] font-[400]">&lt;A little side project ;) /&gt;</p>
                        <h1>HTDesigns(<span className="text-[#0000FF]">2022-present</span>)</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Jewelry