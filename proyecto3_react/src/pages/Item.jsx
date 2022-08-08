import React from 'react'
import styled  from 'styled-components';
import {Size} from '../components/Size';
import {HeaderBack} from '../components/HeaderBack';
import {Button} from '../components/Button';

const Figure = styled.figure`
  width: 100%;
  height:18rem;
  background:gray;

`
const Image = styled.img`
  width: 100%;
  height:100%;

`
const Title = styled.p`
    text-align: center;
    font-size:1.6rem;
    color:white;
`
const AvailableSize = styled.p`
    text-align: left;
    font-size:1.1rem;
    color:white;
`
const SizeContainer = styled.div`
  padding:1rem 2rem;
  display: flex;
  flex-direction: column;
  gap:1rem;
`
const SizeNumbersContainer = styled.div`
  display:flex;
  flex-wrap:wrap;
  gap:1rem;
`
const Details = styled.p`
  color:white;
  font-size:1rem;

`

const Item = () => {
  return (
    <>
    <HeaderBack></HeaderBack>
      <Figure >
        <Image></Image>
      </Figure>
      <Title>Jordan 1 Retro</Title>
      <SizeContainer>
        <AvailableSize>Available Size:</AvailableSize>
        <SizeNumbersContainer>
          <Size></Size>
          <Size></Size>
          <Size></Size>
          <Size></Size>
        </SizeNumbersContainer>
        <Button title="Add to Cart"></Button>
        <Details>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque animi, aliquam quod consequuntur nostrum 
        </Details>


      </SizeContainer>


    </>
  )
}

export {Item}