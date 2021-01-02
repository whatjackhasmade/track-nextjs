import styled from 'styled-components';
import { device } from 'particles';

const StyledCard = styled.div`
  --box-ring-inset: var(--box-empty);
  --box-ring-offset-width: 0px;
  --box-ring-offset-color: #fff;
  --box-ring-color: rgba(59, 130, 246, 0.5);
  --box-ring-offset-shadow: 0 0 transparent;
  --box-ring-shadow: 0 0 transparent;

  --box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 32px 24px;

  background-color: var(--white);
  box-shadow: var(--box-ring-offset-shadow, 0 0 #0000), var(--box-ring-shadow, 0 0 #0000), var(--box-shadow);
  color: var(--black);

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

  a:last-of-type {
    display: flex;
    margin-top: auto;
  }

  h3 {
    margin: 0;
    margin-bottom: 12px;
  }

  time {
    display: block;
    margin-bottom: 8px;
  }

  time:last-of-type {
    margin-bottom: 16px;
  }
`;

export default StyledCard;
