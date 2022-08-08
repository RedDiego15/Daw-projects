import React from 'react'
import styled from 'styled-components'

const OptionContainer = styled.div`
    display:grid;
    grid-template-columns: 30% 1fr;
    background:#F7F4E5;
    height:4rem;
    align-items:center;
    justify-items:center;
    box-shadow: 5px 9px 7px -3px #000000;
`
const Title = styled.p`
    font-size:1.6rem;
`
const LandingOption = ({children,title}) => {
  return (
    <OptionContainer>
        {children}
        <Title>{title}</Title>
    </OptionContainer>
  )
}

export {LandingOption}