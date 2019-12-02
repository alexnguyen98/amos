import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text, number } from "@storybook/addon-knobs"
import Textarea from './index'

storiesOf('Textarea', module)
  .add('playground', () => {
    const
      infoMessage = text('Info message'),
      inline = boolean('Inline', false),
      label = text('Label', 'Username'),
      maxLength = number('Max length'),
      minLength = number('Min length'),
      placeholder = text('Placeholder', 'Username'),
      rows = number('Rows', 3),
      Text = text('Text')

    return (
      <Textarea
        infoMessage={infoMessage}
        inline={inline}
        label={label}
        maxLength={maxLength}
        minLength={minLength}
        placeholder={placeholder}
        rows={rows}
      >{Text}</Textarea>
    )
  })