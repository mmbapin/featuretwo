import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const FeatureCard = (props) => {
  const {itemnum} = props
  const itemNum = () => {
    if(itemnum < 10){
      return `0${itemnum}`
    }else{
      return itemnum
    }
  }
  return (
    <div className='featurecard'>
      <div className="featurecardleft">
        <div className='featurecard__title'><span>{itemNum()}</span> Card Type</div>
        <Link href="/">
        <div className="learbtnwrp">
          <Image src="/arrowicon.svg" width={26} height={26} quality={100}/>
          <span>Learn More</span>
        </div>
        </Link>
      </div>
      <div className="featurecardright">
        <ul>
          <li>Card Medium</li>
          <li>Card Form</li>
          <li>Card Design</li>
        </ul>
      </div>
    </div>
  )
}

export default FeatureCard