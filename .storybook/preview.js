import React from 'react'
import { addDecorator } from '@storybook/react'
import { Baseline, ThemeProvider } from '../src'

addDecorator(storyFn => (
  <React.Fragment>
    <Baseline />
    <ThemeProvider>{storyFn()}</ThemeProvider>
  </React.Fragment>
))
