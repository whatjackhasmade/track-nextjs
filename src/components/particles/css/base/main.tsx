import { css } from 'styled-components';

import { device } from 'particles';

const exportedCSS = css`
  main {
    flex: 1;
  }

  main,
  .grid {
    margin: 0 auto;
    max-width: 1506px;
    padding: 0 15px;
    width: 100%;

    @media ${device?.xs} {
      padding: 0 30px;
    }
  }
`;

export default exportedCSS;
