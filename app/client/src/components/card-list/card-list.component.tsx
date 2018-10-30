import * as React from 'react';

import { Card } from '../card';
import { CardInfo } from '../typedef';

type CardListProps = Readonly<{
  content: CardInfo[]
}>;

export const CardList = (props: CardListProps) => {
  const { content } = props;

  const cards: JSX.Element[] = content.map((cardInfo, index) => <Card key={index} {...cardInfo} />);

  return <ul>{cards}</ul>;
};