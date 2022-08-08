import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:2.5rem;
    height:2.5rem;

    background-color:${p => p.theme.containerColor};
`
const StyledSize = styled.p`
    color : ${p => p.theme.priceColor};
    font-size:1.1rem;

`
const Size = () => {
  return (
    
    <Container>
        <StyledSize>8</StyledSize>

    </Container>
  )
}

export {Size}