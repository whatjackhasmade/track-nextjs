import { css } from 'styled-components';

import { device } from 'particles';

const exportedCSS = css`
  html {
    box-sizing: border-box;
    overflow-y: scroll;

    font-family: 'Helvetica Neue', -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
      Arial, sans-serif;
    font-size: 62.5%;
    /* BETTER FONT SMOOTHING - https://gist.github.com/hsleonis/55712b0eafc9b25f1944 */
    font-variant-ligatures: none;
    -webkit-font-variant-ligatures: none;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;

    @media ${device?.MXsm} {
      &.scroll--fixed {
        overflow: hidden;
      }
    }
  }
`;

export default exportedCSS;
