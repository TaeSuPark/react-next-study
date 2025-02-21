import { createGlobalStyle } from "styled-components"

export const theme = {
  colors: {
    home: "#f8f9fa", // 밝은 회색
    about: "#e9ffd9", // 옅은 초록
    skills: "#fff3bf", // 옅은 노랑
    projects: "#d0ebff", // 옅은 파랑
    contact: "#ffe3e3", // 옅은 빨강
  },
}

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* 스크롤바 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }
  
  * {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`
