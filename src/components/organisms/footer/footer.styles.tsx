import styled from 'styled-components';
import { device } from 'particles';

const FooterComponent = styled.footer`
  bottom: 0;
  padding: 24px 0;
  position: fixed;
  left: 0;
  width: 100%;

  background-color: transparent;
  color: var(--white);
  text-align: right;

  a {
    color: inherit;
    text-decoration: none;

    &:active,
    &:focus,
    &:focus-within,
    &:hover {
      text-decoration: none;
    }
  }
`;

export default FooterComponent;
