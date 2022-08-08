import React from 'react'
import styled from 'styled-components';

const Item = styled.div`
    will-change: opacity;
    position: relative;
    min-width: 33.33%; 
    transition: 450ms all;
    box-shadow: 5px 5px 10px rgba(0,0,0, .3);
    transform-origin: center left; 
    cursor: pointer;
    &:hover{
        transform: scale(1.2);
        opacity: 1;
    }
 
`
const ItemFigure = styled.figure`
    background:gray;

    width: 100%;
    height: 100%;
    
`
const ItemImg = styled.img`
    width: 100%;
    height: 100%;
`
const CarouselItem = () => {
  return (
    <Item className="carousel-item">
        <ItemFigure>
            <ItemImg></ItemImg>
        </ItemFigure>
    </Item>
  )
}

export {CarouselItem}