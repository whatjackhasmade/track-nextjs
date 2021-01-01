import { css } from 'styled-components';

import { device } from 'particles';

const exportedCSS = css`
  p {
    font-size: var(--sizeDefault);
    line-height: 1.3;
  }

  .main--home {
    p {
      @media ${device?.lg} {
        font-size: var(--sizeLarge);
        line-height: 1.2;
      }
    }
  }
`;

export default exportedCSS;
