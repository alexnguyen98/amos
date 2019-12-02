import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text } from "@storybook/addon-knobs"
import Checkbox from './index'

storiesOf('Checkbox', module)
  .add('playground', () => {
    const 
      checked = boolean('Checked', false),
      infoMessage = text('Info message'),
      Text = text('Text', 'Women')

    return (
      <Checkbox
        checked={checked}
        infoMessage={infoMessage}
      >{Text}</Checkbox>
    )
  })