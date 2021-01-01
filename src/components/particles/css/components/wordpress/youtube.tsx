import { css } from 'styled-components';

const exportedCSS = css`
  .wp-block-embed-youtube {
    .wp-block-embed__wrapper {
      height: 0;
      padding-top: 56.25%;
      position: relative;

      iframe {
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
      }
    }
  }
`;

export default exportedCSS;
