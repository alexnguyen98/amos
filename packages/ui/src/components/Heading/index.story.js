import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text } from "@storybook/addon-knobs"
import Heading from './index'

storiesOf('Heading', module)
  .add('playground', () => {
    const
      size = select('Size', ['extraLarge','large','medium','small'], 'extraLarge'),
      Text = text('Text', 'Welcome Mr. Bruce')

    return (
      <Heading
        size={size}
      >{Text}</Heading>
    )
  })