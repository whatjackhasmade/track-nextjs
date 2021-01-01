import { css } from 'styled-components';

const exportedCSS = css`
  /* Common base styles for the site */
  img,
  svg,
  video {
    display: block;
    max-width: 100%;
  }

  figure {
    margin: 32px 0;
  }

  figcaption {
    margin-top: 8px;

    font-size: 1.8rem;
  }

  .wp-block-image {
    margin-left: auto;
    margin-right: auto;
  }
`;

export default exportedCSS;
