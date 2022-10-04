import React, { useRef, useEffect } from 'react'
// import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import FeatureCard from '../components/FeatureCard'
import gsap from "gsap/dist/gsap"
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)



export default function Home() {
  // const imgRef = useRef()
  const cardRef = useRef()
  const q = gsap.utils.selector(cardRef)
  const handleStart = () => {
    console.log(cardRef);
  }
  const selector = () => {
    const arr = [1,2,3,4,5,6,7,8,9,10]
    arr.map((itm) => {
      return `fromTo('.dssd', {y: 200, opacity: 0, duration: 5}, {y:0, opacity:1, duration: 2})`
    })
  }
  useEffect(() => {
    // gsap.fromTo('.gsapleft', {y:300, duration: 8}, {y:0})
    const tl = gsap.timeline(
      {onStart: handleStart,
      scrollTrigger:{
        trigger: '.gsapleft',
        start: "top 12%",
        end : "bottom bottom",
        pin: true,
        pinSpacing: false,
        markers: true,
        toggleActions: "play none none reverse",
        scrub:3,
      },
      // autoRemoveChildren: true,
    })
    // tl.fromTo('.dssd', {y: 200, opacity: 0, duration: 5}, {y:0, opacity:1, duration: 2})
    // tl.add(selector())
    
      tl.fromTo('.dssd', {y: 200, opacity: 0, duration: 5}, {y:0, opacity:1, duration: 2})
        .fromTo('.dssd', {y: 200, opacity: 0, duration: 5}, {y:0, opacity:1, duration: 2})
        .fromTo('.dssd', {y: 200, opacity: 0, duration: 5}, {y:0, opacity:1, duration: 2})
        .fromTo('.dssd', {y: 200, opacity: 0, duration: 5}, {y:0, opacity:1, duration: 2})
 
    // tl.to(".dssd", {scale: 3, onComplete: handleStart})
    
  }, [])
  return (
    <div>
      <div className='div1'>
        <h1>Div 1</h1>
      </div>
      <div className="gsapwrp">
        <div className="gsapitmwrp">
          <div className="gsapleft">
            <Image className='gsapleftimg' src='/featureimg.png' width={410} height={510} priority={true} quality={100}/>
          </div>
          <div className="gsapright">
            {[1,2,3,4,5,6,7,8,9,10].map((item, index) => (
<div className='dssd' ref={cardRef}>
<FeatureCard key={index} itemnum={index+1} />
</div>
))}
          </div>
        </div>
      </div>
      <div className="div2">
        <h1>Div2</h1>
      </div>
    </div>
  )
}
