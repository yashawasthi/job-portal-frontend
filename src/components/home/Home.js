import React from 'react'
import Footer from '../footer/Footer'

import NavOne from '../navone/NavOne'
import Newsletter from '../newsletter/Newsletter'
import Slider from '../slider/Slider'

const Home = () => {
  return (
    <div>
        <NavOne />
        <Slider />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Home