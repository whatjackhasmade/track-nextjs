import StyledCard from './card.styles';

declare type CardProps = {
  children: any;
  className?: string;
};

export const Card: React.FC<CardProps> = (props: CardProps) => {
  const { children, className } = props;

  let classList: string = `card`;
  if (className) classList += ` ${className}`;

  return <StyledCard className={classList}>{children}</StyledCard>;
};

export default Card;
