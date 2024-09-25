import React from 'react'
import {
  CCarousel,
  CCarouselItem,
  CImage,
  CRow,
} from '@coreui/react'


import AngularImg from 'src/assets/images/angular.jpg'
import ReactImg from 'src/assets/images/react.jpg'
import VueImg from 'src/assets/images/vue.jpg'

import ShowData from './table'



const Settings = () => {
  return (
    <>
      <div>
        <h1>Ajustes</h1>
      </div>
        <ShowData/>
    </>
  )
}

export default Settings;