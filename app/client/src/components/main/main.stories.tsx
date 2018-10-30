import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Main } from './main.component';

storiesOf('Main', module)
  .add('default', () => (
    <Main />
  ));