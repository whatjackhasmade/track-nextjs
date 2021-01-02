import { css } from 'styled-components';

const exportedCSS = css`
  form {
    button[type='submit'] {
      margin-top: 24px;
    }
  }

  fieldset {
    border: none;
    padding: 0;
  }

  label {
    display: flex;
    margin-bottom: 4px;
    margin-top: 16px;

    font-weight: var(--weightBold);
  }
`;

export default exportedCSS;
