import React from 'react';
import { default as NextLink } from 'next/link';
import { useRouter } from 'next/router';

declare type LinkProps = {
  as?: string;
  children?: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  target?: string;
  to?: string;
};

const Link = (props: LinkProps) => {
  const { as, children, className, href, onClick, target, to } = props;
  const goto = href ? href : to ? to : `#`;
  const url = goto;

  const { asPath } = useRouter();

  let isActive = null;
  const isNext = props.as && goto;

  if (isNext) {
    const comparison = asPath + `/`;
    const toggleActive = comparison.includes(url);

    if (toggleActive) isActive = `page`;

    return (
      <NextLink href={url}>
        <a aria-current={isActive} className={className} onClick={onClick}>
          {children}
        </a>
      </NextLink>
    );
  }

  return (
    <a className={className} href={as ? as : url} target={target}>
      {children}
    </a>
  );
};

export { Link };
export default Link;
