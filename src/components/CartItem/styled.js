import styled from 'styled-components'

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const CartItemWrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: #fff;
  display: flex;
  padding: 10px 20px;
  margin-bottom: 10px;

  img {
    height: 72px;
    width: 72px;
    margin-right: 17px;
  }
`

export const ItemTitle = styled.h3`
  
`
export const Text = styled.div`
 flex: 2;
`

export const QuantWrapper = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
`
export const ArrowDown = styled(IoIosArrowDown)`
 font-size: 1.5rem;
 color: #dce1f9;
`
export const ArrowUp = styled(IoIosArrowUp)`
  font-size: 1.5rem;
  color: #dce1f9;
`
export const NumberSpan = styled.span`
 margin: 0 5px;
`