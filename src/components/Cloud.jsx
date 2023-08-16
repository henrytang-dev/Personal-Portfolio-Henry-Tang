import React, { useEffect, useRef } from 'react'
import Cloud1 from '../photos/Cloud1.png'
import Cloud2 from '../photos/Cloud2.png'
import Cloud3 from '../photos/Cloud3.png'
import Cloud4 from '../photos/Cloud4.png'
import Cloud5 from '../photos/Cloud5.png'
import Cloud10 from '../photos/Cloud10.png'
import { ScrollTrigger, gsap } from 'gsap/all'

const Cloud = () => { 
    gsap.registerPlugin(ScrollTrigger)
    
    const boxRef = useRef(null)

    useEffect(() => {
        const element = boxRef.current

        gsap.timeline({scrollTrigger: {
            trigger: element,
            start: "bottom bottom",
            end: "bottom top",
            scrub: 1,
            // markers: true
        }}).fromTo(element.querySelectorAll(".left"), {
            opacity: 0}, {opacity: 0.8, duration: .05}).fromTo(element.querySelectorAll(".left"), {
            x: -500, y: 500
        }, {
            x: 20, y: 300}, "<")

    }, [])

    useEffect(() => {
        const element = boxRef.current

        gsap.timeline({scrollTrigger: {
            trigger: element,
            start: "bottom bottom",
            end: "bottom top",
            scrub: 1
        }}).fromTo(element.querySelectorAll(".right"), {
            opacity: 0}, {opacity: 0.8, duration: .05}).fromTo(element.querySelectorAll(".right"), {
            x: 500, y: 500
        }, {
            x: -20, y: 300}, "<")
    }, [])

    return (
        <>
            <div ref={boxRef} className="absolute w-screen h-screen top-0 z-20">
                <img src={Cloud2} className="left absolute bottom-0 overflow-visible"/>
                <img src={Cloud1} className="left absolute bottom-0 overflow-visible" />
                <img src={Cloud10} className="left absolute bottom-0 overflow-visible" />
                <img src={Cloud3} className="left absolute bottom-0 overflow-visible" />
                <img src={Cloud4} className="right absolute bottom-0 overflow-visible" />
                <img src={Cloud5} className="right absolute bottom-0 overflow-visible"/>
                <img src={Cloud2} className="right absolute bottom-0 overflow-visible"/>
                <img src={Cloud1} className="right absolute bottom-0 overflow-visible" />
                <img src={Cloud10} className="right absolute bottom-0 overflow-visible" />
            </div>
        </>
    )
}

export default Cloud