const ButtonMixin = () => /* CSS */ `
 	display: inline-flex;
  padding: 16px 24px;

  background-color: var(--primary);
  border: none;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  color: var(--white);
  cursor: pointer;
  font-weight: var(--weightBold);
  line-height: 1;
  outline: none;
  text-decoration: none;
  transition: all 0.15s ease;
  white-space: nowrap;

  &:hover {
    transform: translateY(-1px);
  }

  &:focus,
  &:hover {
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    text-decoration: none;
  }

  &.active {
    background: var(--primary);
    color: white;
  }

  &.secondary {
    border: 1px solid var(--secondary);
    color: var(--secondary);

    &:active,
    &:hover,
    &:focus {
      background: var(--secondary);
      color: white;
    }

    &.active {
      background: var(--secondary);
      color: white;
    }
  }
`;

export { ButtonMixin };
export default ButtonMixin;
