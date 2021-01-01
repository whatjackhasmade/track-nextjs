import { css } from 'styled-components';

const exportedCSS = css`
  a {
    color: var(--primary);
    text-decoration: none;

    &:active,
    &:focus,
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default exportedCSS;
