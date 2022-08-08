import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
    margin:1rem 0;
    width:14rem;
    height:3rem;
    border-radius:25px;
    background:${p => p.theme.containerColor};
    color: ${p => p.theme.priceColor};
    font-size:1.3rem;
    align-self:center;
    outline:none;
    border:none;

`

const Button = ({title}) => {
  return (
    <StyledButton>{title}</StyledButton>
  )
}

export {Button}