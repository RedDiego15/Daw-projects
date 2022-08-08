import React from 'react'
import styled from 'styled-components';


const CarouselContainer = styled.div`
    position: relative;
    padding:1rem;
    height: 10rem;
    width:100%;

`

const CarouselContainerCarousel = styled.div`
    display:flex; 
    width: 100%;
    height:80%;
    overflow: scroll;
    scroll-behavior: smooth;
    align-items:center;
    gap:0.5rem;
`



const Carousel = ({children}) => {
  return (
   <CarouselContainer>
    <CarouselContainerCarousel className="carousel">
        {children}
    </CarouselContainerCarousel>

   </CarouselContainer>
  )
}

export {Carousel}