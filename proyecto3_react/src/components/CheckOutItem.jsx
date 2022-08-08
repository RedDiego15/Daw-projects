import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height:6.8rem;
    padding:10px;
    width:100%;
    background:${p=>p.theme.colorCheckOutItem};
    display:flex;
    gap:1rem;

`
const Figure = styled.figure`
    width:7rem;
    height:5rem;
    background:grey;
`
const Image = styled.img`
    width: 100%;
    height: 100%;

`
const InfoContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap:0.8rem;
    width:54%;
`
const Title = styled.h2`
  font-size:1.4rem;
  align-self:center;

`
const StyledTitle = styled.h2`
  font-size:1rem;
  color:white;
`
const StyledInfo = styled.p`
    font-size:1rem;
    
`
const WrapInfo = styled.div`
    display:flex;
`
const CheckOutItem = () => {
  return (
    <Container>
        <Figure>
            <Image></Image>
        </Figure>
        <InfoContainer>
            <Title>Jordan 1 retro</Title>
            <WrapInfo>
                <StyledTitle>Cant:</StyledTitle>
                <StyledInfo>1</StyledInfo>
            </WrapInfo>
            <WrapInfo>
                <StyledTitle>Total:</StyledTitle>
                <StyledInfo>$120</StyledInfo>
            </WrapInfo>
        </InfoContainer>


    </Container>
  )
}

export {CheckOutItem}