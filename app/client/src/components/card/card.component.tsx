import * as React from 'react';

import { cardContainerClass } from './card.styles';
import { CardInfo } from '../typedef';

type CardProps = Readonly<CardInfo>;

export const Card = (props: CardProps) => {
  const { title, description } = props;
  return (
    <li>
      <div className={cardContainerClass}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
};