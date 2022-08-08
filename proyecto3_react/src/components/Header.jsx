import React from 'react'
import styled from 'styled-components';
import {AiOutlineMenu} from 'react-icons/ai'
import {HiShoppingCart} from 'react-icons/hi'
import {HiSearch} from 'react-icons/hi'

const HeaderContainer = styled.header`
    display:flex;
    justify-content:space-between;
    padding:10px;
`
const IconsContainer = styled.div`
    display:flex;
    gap:0.5rem;
`
const Header = () => {
  return (
    <HeaderContainer>
        <AiOutlineMenu className="header-icon"></AiOutlineMenu>
        <IconsContainer>
            <HiSearch className="header-icon"></HiSearch>
            <HiShoppingCart className="header-icon"></HiShoppingCart>
        </IconsContainer>

    </HeaderContainer>
  )
}

export {Header}