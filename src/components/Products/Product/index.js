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
          <img src="https://lh3.googleusercontent.com/proxy/grsxlUJ-id8cPrD52aiYqJYTHqDIu-uq98Qi1qqLZ5FjiZI_KtSECFz0DLHzrlMzJgbVD3jg9IEN-GvU58xKRtR1Gbwgul8KoZh84tGvuU9wZevY_x_FEfm1j80lABI" alt=""/>
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
