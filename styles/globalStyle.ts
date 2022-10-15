import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    @font-face {
    font-family: 'GmarketSans';
    font-weight: 300;
    src: url('/fonts/GmarketSansBold.woff') format('woff');
    }
    @font-face {
      font-family: 'GmarketSans';
      font-weight: 500;
      src: url('/fonts/GmarketSansBold.woff') format('woff');
    }
    @font-face {
      font-family: 'GmarketSans';
      font-weight: 700;
      src: url('/fonts/GmarketSansBold.woff') format('woff');
    }
    :focus {
        outline: none;
        border: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    html {
        font-size: 10px;
        -webkit-text-size-adjust: none;
        font-family: 'GmarketSans', -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
        /* font-display: fallback; */
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
`;
