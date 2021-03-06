import { css } from 'styled-components';

const exportedCSS = css`
  .hide,
  .hidden,
  .sr-only {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }
`;

export default exportedCSS;
