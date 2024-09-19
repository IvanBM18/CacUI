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



const Users = () => {
  return (
    <>
      <div>
        <h1>Usuarios</h1>
      </div>
        <CRow>
          <CCarousel controls indicators>
          <CCarouselItem>
            <CImage className="d-block w-100" src={ReactImg} alt="slide 1" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src={VueImg} alt="slide 2" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src={AngularImg} alt="slide 3" />
          </CCarouselItem>
          </CCarousel>
        </CRow>
    </>
  )
}

export default Users;