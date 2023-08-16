import React, {useEffect, useRef} from 'react'
import { gsap, ScrollTrigger, Power4 } from 'gsap/all'


const Today = () => {
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
            }}).fromTo(element.querySelector(".first-h1"), {
                y: -200, opacity: 0, scaleY: 0
            }, {
                y: 0, opacity: 1, scaleY: 1
            }).fromTo(element.querySelector(".first-p"), {
                y: 100, opacity: 0, scaleY: 0
            }, {
                y: 0, opacity: 1, scaleY: 1
            }, "<")
            
            ScrollTrigger.create({
                trigger: element.querySelector(".inner"),
                start: "center center",
                end: "+=600",
                scrub: 1,
                pin: element,
                id: "first",
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
                <div className="w-screen flex justify-center" >
                    <div className="w-[60vw] h-screen flex-col justify-center"> 
                        <div className="inner h-screen flex flex-col justify-center absolute">
                            <h1 className="first-h1">Today(<span className="text-[#0000FF]">2023</span>)</h1>
                            <p className="first-p text-[19.2px] text-[#90E0EF]">
                                &lt;myCV&gt;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Today