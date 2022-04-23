import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle<{ theme: any }>`
html {
  width: 100%;
  height: 100%;

}


* {
  font-family: "Jakarta Sans";
  color: #f7f8fa;
    box-sizing: border-box;
      padding: 0;
      margin: 0;
      transition: all 360ms cubic-bezier(0.075, 0.82, 0.165, 1);
      text-overflow: ellipsis;

      &::selection {
  background: #fc037f80;
}

&::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #2e1a6980;
    border-radius: 5rem;
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #5c33cf80;
  }

}

h1, h2, h3, h4, h5, h6, td, th, ul, li, small, strong, span {
color: ${({ theme }) => theme.text};

  &::selection {
  background: ${({ theme }) => theme.primaryTransparent};
}
}

p, li, span {
color: ${({ theme }) => theme.textSec};
}

button, img {
  user-select: none;
}

button, input, img, div {
  transition: all 560ms cubic-bezier(0.075, 0.82, 0.165, 1);
}

small {
  font-size: 12px;
}

p, li, td, th, label, input, button {
font-size: 13px;
}


button {
font-size: 14px;
color: ${({ theme }) => theme.text}
}

  body {
    background-color: black;
background: ${({ theme }) => theme.bg};
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }


  svg {
  overflow: visible !important;
}




`;

export default GlobalStyle;
