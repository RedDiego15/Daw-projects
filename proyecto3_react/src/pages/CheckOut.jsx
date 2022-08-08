import React from 'react'
import styled from 'styled-components';
import {Button} from '../components/Button';
import { HeaderBack } from '../components/HeaderBack';
import { AppContext } from "../context/AppContext";
import {CheckOutItem} from '../components/CheckOutItem';
const Title = styled.h2`
  font-size:2.2rem;
  text-align:center;
`
const ItemContainer = styled.div`
  display:flex;
  flex-direction:column;
  gap:1rem;
`
const StyledLine = styled.div`
  border-top:1px solid ${p=>p.theme.priceColor};
  width:90%;
  margin: auto;
`
const StyledTitle = styled.h2`
  font-size:1rem;
  color:white;
`
const StyledInfo = styled.p`
    font-size:1rem;
    color : ${p => p.theme.priceColor}
    
`
const WrapInfo = styled.div`
    margin-left:1.5rem;
    display:flex;
`
const Container = styled.div`
  width: 100%;
  display:flex;
  justify-content:center;
`
const CheckOut = () => {
  const { appState} = React.useContext(AppContext);
  return (
    <>
      <HeaderBack></HeaderBack>
      <Title>My Order</Title>
      <ItemContainer>
        <CheckOutItem></CheckOutItem>
        <CheckOutItem></CheckOutItem>
        <CheckOutItem></CheckOutItem>
      </ItemContainer>
      <StyledLine></StyledLine>
      <WrapInfo>
        <StyledTitle>Total: </StyledTitle>
        <StyledInfo> $250</StyledInfo>
      </WrapInfo>
      <Container>
        <Button title = "Finish Purchase"></Button>
      </Container>

    </>
  )
}

export {CheckOut}