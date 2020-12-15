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

type ProductProps = {
  id: number,
  name: string,
  price: number,
  description: string,
  img: string,
  addToCart: any
}

const Product = ({
  id,
  name, 
  price, 
  description, 
  img,
  addToCart}: ProductProps) => {
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
      <AddBtn 
        onClick={() => addToCart(id, 1)}
      >
        Add to Cart
      </AddBtn>

      
    </ProductWrapper>
  )
}

export default Product
