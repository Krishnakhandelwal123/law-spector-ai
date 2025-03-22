import React from 'react'
import Marketing from './Marketing'
import Eyes from './Eyes'
import Footer from './Footer'
import LocomotiveScroll from 'locomotive-scroll'
const Market = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div>
      <Marketing />
      <Eyes />
      <Footer />
    </div>
  )
}

export default Market
