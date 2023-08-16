import React, { useRef, useEffect } from 'react'
import { gsap, Power4 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Who = () => {
    gsap.registerPlugin(ScrollTrigger)
    
    const divRef = useRef(null)

    useEffect(() => {
        const element = divRef.current
        let ctx = gsap.context(() => {
            

            ScrollTrigger.create({
                trigger: element.querySelector(".inner"),
                start: "center center",
                end: "+=800px",
                scrub: 1,
                pin: element,
                id: "title",
                onEnter: () => animation.play(),
                onLeave: () => animation.reverse().resume(),
                onEnterBack: () => animation.play(),
                onLeaveBack: () => animation.reverse().reset()
                
            })


            let animation = gsap.timeline({scrollTrigger: {
                trigger: element.querySelector(".inner"),
                start: "center center",
                end: "+=400px",
                scrub: 1,
                id: "iam",
            }}).fromTo(element.querySelector("h1"), {
                opacity: 0, y: -300, scaleY: 0
            }, {opacity: 1, y: 0, scaleY: 1
            }).fromTo(element.querySelector(".ref"), {
                        x: -20,
                        opacity: 0,
            }, {x: 0, opacity: 1, duration: .3})

        }, element)

        return () => ctx.revert()
    }, [])

    return (
        <div ref={divRef}>
            <section className="flex flex-col relative">
                <div className="w-screen h-screen flex justify-center"> 
                    <div className="inner w-[60vw] flex flex-col justify-center">
                        <h1>I<span className="text-[#0000FF]">.am()</span></h1>
                        <div className="ref">
                            <p className="text-[19.2px] mb-[16px] text-[#0000FF]">Henry Tang</p>
                            <p className="text-[19.2px] text-[#90E0EF] font-[400]">A fullstack developer</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Who