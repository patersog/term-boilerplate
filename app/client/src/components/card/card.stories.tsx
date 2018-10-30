import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Card } from './card.component';

const cardProps = {
  title: 'Title!',
  description: 'This is a simple test description'
};

storiesOf('Card', module)
  .add('default', () => (
    <Card {...cardProps} />
  ));