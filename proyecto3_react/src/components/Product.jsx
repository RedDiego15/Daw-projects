import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    gap:1.5rem;
    align-items:center;
`
const ItemFigure = styled.figure`
    background:gray;
    width: 100%;
    height: 7rem;
    
`
const ItemImg = styled.img`
    width: 100%;
    height: 100%;
`
const Title = styled.p`
    text-align: center;
    font-size:1.4rem;
    color:white;
`
const Price = styled.p`
    font-size:1.1rem;
    color: ${p=>p.theme.priceColor}
`
const Product = () => {
  return (
    <Container>
        <ItemFigure>
            <ItemImg></ItemImg>
        </ItemFigure>
        <Title>Jordan 1 retro</Title>
        <Price>$120</Price>

    </Container>
  )
}

export {Product}