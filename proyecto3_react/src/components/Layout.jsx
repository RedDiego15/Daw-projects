import React from 'react'
import styled from 'styled-components'
import { Theme } from '../styles/Theme'
const Main = styled.div`
  background: ${p=> p.theme.background };
  display: grid;
  grid-template-columns: minmax(auto, 768px);
  justify-content: center;
  gap: 1rem;
`;

const Layout = ({children}) => {
  return (
     <Theme theme={"ligth"}>
      <Main>
        {children}
      </Main>
     </Theme>
  );
}

export {Layout}