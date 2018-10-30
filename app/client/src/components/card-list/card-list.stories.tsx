import * as React from 'react';
//import { storiesOf } from '@storybook/react';
const sbr = require('@storybook/react');
//import { action } from '@storybook/addon-actions';
const addon = require('@storybook/addon-actions');

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

sbr.storiesOf('CardList', module)
  .add('default', () => (
    <CardList {...cardListProps} />
  ));