import { camelToKebab } from 'track';

export const createCSSVars = (objValue: ObjectLiteral) => {
  const cssVars = {};
  for (const [key, value] of Object.entries(objValue)) {
    cssVars[`--${camelToKebab(key)}`] = value;
  }
  return cssVars;
};

export default createCSSVars;
