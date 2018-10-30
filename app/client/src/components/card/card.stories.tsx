import * as React from 'react';
// import { storiesOf } from '@storybook/react';
const sbr = require('@storybook/react');

import { Card } from './card.component';

const cardProps = {
  title: 'Title!',
  description: 'This is a simple test description'
};

sbr.storiesOf('Card', module)
  .add('default', () => (
    <Card {...cardProps} />
  ));