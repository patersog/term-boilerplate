import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { CardList } from './card-list.component';

const cardListProps = {
  content: [
    {
      title: 'Title!',
      description: 'This is a simple test description'
    },
    {
      title: 'Title!',
      description: 'This is a simple test description'
    },
  ]
};

storiesOf('CardList', module)
  .add('default', () => (
    <CardList {...cardListProps} />
  ));