export const bp = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1440,
  xxl: 1800,
};

export const size = {
  xs: `576px`,
  sm: `768px`,
  md: `992px`,
  lg: `1200px`,
  xl: `1440px`,
  xxl: `1800px`,
};

export const device = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`,
  xxl: `(min-width: ${size.xxl})`,
  MXxs: `(max-width: ${size.xs})`,
  MXsm: `(max-width: ${size.sm})`,
  MXmd: `(max-width: ${size.md})`,
  MXlg: `(max-width: ${size.lg})`,
  MXxl: `(max-width: ${size.xl})`,
  MXxxl: `(max-width: ${size.xxl})`,
};

export default device;
