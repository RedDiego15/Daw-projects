import {ThemeProvider} from 'styled-components'
import {GlobalStyles} from './GlobalStyles'
import React from 'react';

const themes = {
    ligth:{
        background: 'linear-gradient(0deg, rgba(2,73,93,1) 0%, rgba(247,244,229,1) 100%)',
        CheckOutItem__element_border_bottom_color:'#80808042',
        priceColor:'#82821C',
        containerColor:'#F7F4E5',
        colorCheckOutItem: 'rgba(2, 163, 187, 0.19)'
    },
    dark: {

    }
};

export const Theme = (props) =>(
    <ThemeProvider theme = {themes[props.theme]}>
        <GlobalStyles/>
        {props.children}
    </ThemeProvider>
)