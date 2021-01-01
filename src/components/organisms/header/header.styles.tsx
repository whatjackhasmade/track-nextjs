import styled from 'styled-components';
import { device } from 'particles';

const HeaderComponent = styled.header`
  min-height: 100px;
  padding: 32px 0 16px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;

  background-color: transparent;
  color: var(--white);

  a {
    color: var(--white);
  }

  button {
    display: none;
  }

  nav {
    margin-left: auto;

    a {
      font-size: 20px;
      font-weight: var(--weightBold);
      letter-spacing: -1px;
      line-height: 1;

      &:active,
      &:focus,
      &:focus-within,
      &:hover {
        text-decoration: none;
      }
    }

    a + a {
      margin-left: 24px;
    }
  }

  .header__contents {
    align-items: center;
    display: flex;
  }

  .header__logo {
    font-size: 40px;
    font-weight: var(--weightBold);
    letter-spacing: -1px;
    line-height: 1;
    transform: rotate(0deg);
    transition: 0.2s transform ease;

    &:active,
    &:focus,
    &:focus-within,
    &:hover {
      text-decoration: none;
      transform: rotate(-1.5deg);
    }
  }
`;

export default HeaderComponent;
