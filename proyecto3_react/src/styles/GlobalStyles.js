import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{
    background: ${(p) => p.theme.background_color}

}


a {
    text-decoration: none;
    color:black;
  }
h1 {
    font-size: 30px;
    color: ${(p) => p.theme.title_color};
}
.header-icon{
    width:28px;
    height:28px;
}
.landing-icon{
    width:22px;
    height:22px;
}
.carousel:hover .carousel-item:not(:hover){
    transform: translate3d(3rem,0,0);
    opacity:0.3;
}
`;