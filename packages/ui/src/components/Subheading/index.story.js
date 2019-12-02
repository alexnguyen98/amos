import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from "@storybook/addon-knobs"
import Subheading from './index'

storiesOf('Subheading', module)
  .add('playground', () => {
    const Text = text('Text', 'Welcome Mr. Bruce')

    return (
      <Subheading>{Text}</Subheading>
    )
  })