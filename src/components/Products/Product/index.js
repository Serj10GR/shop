import React from 'react'

import {
  ProductWrapper,
  ProductHeader,
  ImgWrapper,
  Price,
  Title,
  Description,
  AddBtn
  } from './styled'

const Product = ({name, price, description}) => {
  return (
    <ProductWrapper>
      <ProductHeader>
        <ImgWrapper>
          <img src="https://lh3.googleusercontent.com/proxy/VsNIXA3I0osmvFdbLoHkjD56k4uq_tPOWdH0Ux4Drm-MtMlmpEN-dUVu-fGR0Py6mnLuGiOzr6cZinMrewLfbnG2R5lpNDx-ymr3eWTZ_aDj1pDiE-yVAK6E8u0" alt=""/>
        </ImgWrapper>
        <Price>{price} <span>MDL</span></Price>
      </ProductHeader>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <AddBtn>Add to Cart</AddBtn>

      
    </ProductWrapper>
  )
}

export default Product
