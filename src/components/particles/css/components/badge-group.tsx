import { css } from 'styled-components';

const exportedCSS = css`
  .badge-group {
    display: inline-flex;
    flex-wrap: wrap;
    margin: -4px 0 0 -4px;
    width: calc(100% + 4px);

    > * {
      margin: 4px 0 0 4px;
    }
  }
`;

export default exportedCSS;
