import React, { useEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger } from 'gsap/all'
import dayjs from "dayjs"
import duration from 'dayjs/plugin/duration'

const Technologies = () => {

    const divRef = useRef(null)

    dayjs.extend(duration)

    const [time, setTime] = useState()

    useEffect(() => {
        diff()
    }, [])

    function diff() {
        var a = dayjs('2023-6-8', 'YYYY-M-DD')
        var b = dayjs()
        var duration = dayjs.duration(b.diff(a)).asDays()
        setTime(duration)
    }

    useEffect(() => {
        const element = divRef.current
        
        let ctx = gsap.context(() => {
            
            let animation = gsap.timeline({scrollTrigger: {
                trigger: element.querySelector('.inner'),
                start: "center center",
                end: "+=300",
                scrub: 1
                }}).fromTo(element.querySelector(".p1"), {
                    y: -100, opacity: 0, scaleY: 0
                }, {
                    y: 0, opacity: 1, scaleY: 1
                }).fromTo(element.querySelector(".p2"), {
                    y: -100, opacity: 0, scaleY: 0
                }, {
                    y: 0, opacity: 1, scaleY: 1
                }).fromTo(element.querySelector(".p3"), {
                    y: -100, opacity: 0, scaleY: 0
                }, {
                    y: 0, opacity: 1, scaleY: 1
                }).fromTo(element.querySelector(".p4"), {
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
                onLeaveBack: () => animation.reverse().reset()
             })

        }, element)

        return () => ctx.revert()

    }, [])

    return (
        <>
            <div ref={divRef}>
                <div className="w-screen h-screen flex justify-center"> 
                    <div className="inner w-[60vw] flex flex-col justify-center">
                        <p className="p1"><span className="text-[#0000FF]">f'&#123;</span>Debugging & Deploying<span className="text-[#0000FF]">&#125;</span></p>
                        <p className="p2"><span className="text-[#0000FF]">f'&#123;</span>Training & Preprocessing<span className="text-[#0000FF]">&#125;</span></p>
                        <p className="p3"><span className="text-[#0000FF]">f'&#123;</span>Querying & Destructuring<span className="text-[#0000FF]">&#125;</span></p>
                        <p className="p4 text-[19.2px] text-[#90E0EF] font-[400]">&lt;All in the span of {time} days /&gt;</p>
                    </div>
                </div>  
            </div>
        </>
    )
}

export default Technologies