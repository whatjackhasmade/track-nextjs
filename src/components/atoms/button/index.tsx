/* eslint-disable react/react-in-jsx-scope */

import StyledButton from './button.styles';

type ButtonProps = {
  className?: string;
  children: any;
  disabled?: boolean;
  href?: string;
  onClick?: any;
  rel?: string;
  target?: string;
  type?: string;
};

const Button = (props: ButtonProps) => {
  const { className, children, disabled, href, onClick, rel, target, type } = props;

  const classList: string = `button ${className} ${type}`;

  if (href) {
    const BtnLink = StyledButton.withComponent(`a`);

    const isNewTab: boolean = target === `_blank`;
    let linkRel: string = rel;
    if (isNewTab) linkRel = `noopener noreferrer`;

    return (
      <BtnLink href={href} className={classList} disabled={disabled} rel={linkRel} target={target} type={type}>
        {children}
      </BtnLink>
    );
  }

  return (
    <StyledButton className={classList} disabled={disabled} onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
};

export { ButtonMixin } from './button.mixin';
export { ButtonReset } from './button.reset';
export { Button };
export default Button;
