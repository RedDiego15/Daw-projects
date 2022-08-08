import React from 'react'
import styled from 'styled-components';
import {HeaderBack} from '../components/HeaderBack';
import { AppContext } from "../context/AppContext";
import {Product} from "../components/Product";
import { Link } from 'react-router-dom';

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap:1.5rem;
  align-items:center;
`
const Title = styled.h2`
  font-size:2.2rem;

`
const InputSort = styled.input`
  width:5rem;
  height:1rem;
  background:#F7F4E5;
  outline:none;
  border:none;
  

`
const Products = styled.div`
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:1rem;
  grid-auto-flow:row;
  padding:10px;
`

const Items = () => {
  const { appState} = React.useContext(AppContext);
  return (
   <>
    <HeaderBack></HeaderBack>
    <TitleContainer>
      <Title>{appState.pageTitle}</Title>
      <InputSort list = "order" placeholder = "Order by"></InputSort>
      <datalist id = "order">
        <option value="Price"></option>
      </datalist>
    </TitleContainer>
    <Products>
      <Link to="/item-detail">
        <Product></Product>
      </Link>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>

    </Products>

   </>
  )
}

export {Items}