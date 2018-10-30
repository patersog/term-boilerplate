import * as React from 'react';
// import * as storybook__react from '@storybook/react';
const sbr = require('@storybook/react');

import { Main } from './main.component';

sbr.storiesOf('Main', module)
  .add('default', () => (
    <Main />
  ));