import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from "@storybook/addon-knobs"
import Subtext from './index'

storiesOf('Subtext', module)
  .add('playground', () => {
    const Text = text('Text', 'Welcome Mr. Bruce')

    return (
      <Subtext>{Text}</Subtext>
    )
  })