import styled from 'styled-components';
import { device } from 'particles';

const CollectionComponent = styled.section`
  display: flex;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  min-height: 100vh;

  background-color: var(--primary);
  color: var(--white);

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

  time {
    display: block;
    margin-top: 4px;

    font-size: 1.3rem;
  }

  .collection__contents {
    margin: auto;
    width: 100%;
  }

  .collection__items {
    margin: 0 auto 100px;
  }

  .collection__item {
  }

  .collection__item + .collection__item {
    margin-top: 24px;
  }

  .collection__title {
    margin: 100px auto 32px;
  }
`;

export default CollectionComponent;
