/* eslint-disable react/react-in-jsx-scope */
import StyledBadge from './badge.styles';

type BadgeProps = {
  className?: string;
  children: any;
  href?: string;
  rel?: string;
  target?: string;
};

const Badge = (props: BadgeProps) => {
  const { className, children, href, rel, target } = props;
  const classList: string = `badge ${className}`;

  if (href) {
    const LinkBadge = StyledBadge.withComponent(`a`);

    const isNewTab: boolean = target === `_blank`;

    let linkRel: string = rel;
    if (isNewTab) linkRel = `noopener noreferrer`;

    return (
      <LinkBadge className={classList} href={href} rel={linkRel} target={target}>
        {children}
      </LinkBadge>
    );
  }

  return <StyledBadge className={classList}>{children}</StyledBadge>;
};

export { Badge };
export default Badge;
