import dayjs from "dayjs"
import duration from 'dayjs/plugin/duration'
import { gsap } from "gsap"
import { useState, useEffect } from "react"

const Robust = () => {
    dayjs.extend(duration)

    const [time, setTime] = useState()

    useEffect(() => {
        diff()
    }, [])

    function diff() {
        var a = dayjs('2023-6-8', 'YYYY-M-DD')
        var b = dayjs()
        var duration = dayjs.duration(b.diff(a)).format('MM:DD:HH:mm:ss')
        setTime(duration)
    }

    setInterval(diff, 1000)

    return (
        <div className="w-screen h-screen flex justify-center"> 
            <div className="w-[60vw] flex flex-col justify-center">
                <p>
                    <span className="text-[19.2px] text-[#90E0EF] font-[400]">I've spent my last</span><br />
                    <div className='inline-flex flex-col relative'>
                        <span className="text-[#0000FF] w-full mr-[2rem]">{time}</span>
                        <div className="w-full items-start absolute bottom-[-1.1rem] ">
                            <span className="text-sm text-right relative mr-[3.2rem]">months</span><span className="text-right text-sm relative mr-[4.5rem]">days</span><span className="text-right text-sm relative mr-[3rem]">hours</span><span className="text-right text-sm relative mr-[2.3rem]">minutes</span><span className="text-right text-sm relative">seconds</span>
                        </div>
                    </div>
                    scouring every crevice
                    <span className="text-[#0000FF]"> of computer science...</span>
                </p>
            </div>
        </div>
    )
}

export default Robust