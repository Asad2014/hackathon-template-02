import React from 'react'
import Hero from './components/Hero'
import Brand from './components/Brand'
import Newproducts from './components/Newproducts'
import { TbDeviceIpadHorizontalExclamation } from 'react-icons/tb'
import Popularproducts from './components/Popularproducts'
import Information from './components/Information'
import Getintouch from './components/Getintouch'
import Productlisting from './Productlisting/page'
import About from './About/page'


const page = () => {
  return (
    <div>
      <Hero />
      <Brand />
      <Newproducts />
      <Popularproducts />
      <Information />
      <Getintouch />
      <Productlisting />
      <About />  
    </div>
  )
}

export default page