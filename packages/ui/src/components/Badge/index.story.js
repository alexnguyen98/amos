import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, boolean, text } from "@storybook/addon-knobs"
import Badge from './index'
import { Phone } from '../../icons'

storiesOf('Badge', module)
  .add('playground', () => {
    const 
      icon = boolean('With icon', false),
      placeholderIcon = icon ? Phone : null,
      title = text('Title', 'Badge'),
      type = select('Type', ['default','info','success','block'], 'default')

    return (
      <Badge
        type={type}
        icon={placeholderIcon}
      >{title}</Badge>
    )
  })