import React from 'react'
import Marquee from "react-fast-marquee";

const Slidetext = () => {
  return (
    <div
      style={{ fontSize: '12rem', fontWeight: 'bold', marginTop: '5rem' }}
    >
      <Marquee
        style={{ opacity: '.2' }}
      >Creative Design <span style={{ color: 'red' }}>&</span>Development Agency<span style={{ marginRight: '6rem', color: 'red' }}>.</span>   </Marquee>
    </div>
  )
}

export default Slidetext