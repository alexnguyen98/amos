import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text } from "@storybook/addon-knobs"
import Select from './index'

storiesOf('Select', module)
  .add('playground', () => {
    const
      infoMessage = text('Info message'),
      inline = boolean('Inline', false),
      label = text('Label', 'Stuff'),
      name = text('Name'),
      placeholder= text('Placeholder', 'Select stuff'),
      required = boolean('Required', false)

    return (
      <Select
        infoMessage={infoMessage}
        inline={inline}
        items={['thing 1','thing 2','thing 3']}
        label={label}
        name={name}
        placeholder={placeholder}
        required={required}
      />
    )
  })