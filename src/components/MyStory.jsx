import React, {useEffect, useRef} from 'react'
import { gsap, ScrollTrigger } from 'gsap/all'

const MyStory = () => {
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
            }}).fromTo(element.querySelector("h1"), {
                y: -100, opacity: 0, scaleY: 0
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
                onEnter: () => animation.play(),
                onLeave: () => animation.reverse().resume(),
                onEnterBack: () => animation.play(),
                onLeaveBack: () => animation.reverse().reset()
            })
        }, element)

        return () => ctx.revert()
        
    }, [])
    
    return (
        <div ref={divRef}>
            <div className="w-screen h-screen flex justify-center"> 
                <div className=" inner w-[60vw] flex flex-col justify-center">
                    <h1>myJourney(<span className="text-[#0000FF]">2023</span>)</h1>
                    <p className="first-p text-[19.2px] text-[#90E0EF] foont-[400]">
                                &lt;From arrays to trees /&gt;
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MyStory