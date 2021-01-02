import styled from 'styled-components';
import { device } from 'particles';

const CollectionComponent = styled.section`
  display: flex;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);

  .collection__contents {
    margin: auto;
    width: 100%;
  }

  .collection__items {
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(3, 1fr);
    margin: 0 auto 100px;
    width: 100%;
  }

  .collection__title {
    margin: 100px auto 32px;
  }
`;

export default CollectionComponent;
