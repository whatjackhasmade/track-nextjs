import { css } from 'styled-components';

const exportedCSS = css`
  code,
  pre {
    background: none;
    color: var(--white);
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: 1em;
    hyphens: none;
    line-height: 1.5;
    tab-size: 4;
    text-align: left;
    text-shadow: 0 -0.1em 0.2em var(--black);
    white-space: pre;
    word-break: normal;
    word-spacing: normal;
    word-wrap: normal;

    ::-webkit-scrollbar {
      background-color: var(--grey300);
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--grey600);
      border: 2px solid var(--grey600);
    }

    a {
      color: inherit;
    }
  }

  @media print {
    code,
    pre {
      text-shadow: none;
    }
  }

  pre,
  :not(pre) > code {
    background: var(--black);
  }

  /* Code blocks */
  pre {
    padding: 1em;
    margin: 32px 0;
    overflow: auto;
    border: 0.3em solid var(--black);
    border-radius: 0.5em;
    box-shadow: 1px 1px 0.5em black inset;
  }

  /* Inline code */
  :not(pre) > code {
    padding: 0.15em 0.2em 0.05em;
    border-radius: 0.3em;
    border: 0.13em solid hsl(0, 0%, 11%);
    box-shadow: none;
    white-space: normal;
  }
`;

export default exportedCSS;
