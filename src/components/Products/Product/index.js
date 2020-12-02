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

const Product = ({name, price, description, img}) => {
  return (
    <ProductWrapper>
      <ProductHeader>
        <ImgWrapper>
          <img src={img} alt={name}/>
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
