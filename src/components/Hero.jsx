import React, { useState, useEffect } from 'react'
import large from '../assets/large.mp4'
import small from '../assets/small.mp4'
import medium from '../assets/medium.mp4'

const Hero = () => {

    const [ isMedium, setIsMedium ] = useState(false)
    const [ isLarge, setIsLarge ] = useState(false)

    useEffect(() => {
        const mediaMQuery = window.matchMedia('(min-aspect-ratio: 1237/1024)')
        const mediaLQuery = window.matchMedia ('(min-aspect-ratio: 1264/767)')

        setIsMedium(mediaMQuery.matches)
        setIsLarge(mediaLQuery.matches)

        const handleMediaQueryChangeM = (event) => {
            setIsMedium(event.matches)
        }
        
        const handleMediaQueryChangeL = (event) => {
            setIsLarge(event.matches)
        }

        mediaLQuery.addEventListener('change', handleMediaQueryChangeL)
        mediaMQuery.addEventListener('change', handleMediaQueryChangeM)

        return () => {
            mediaLQuery.removeEventListener('change', handleMediaQueryChangeL)
            mediaMQuery.removeEventListener('change', handleMediaQueryChangeM)
        }
    }, [])

    return (
        <video src={isLarge ? large : isMedium ? medium : small} autoPlay loop muted className='relative object-cover min-w-screen min-h-screen z-[-1]' />
    )
}

export default Hero