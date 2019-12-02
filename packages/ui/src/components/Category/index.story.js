import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, boolean, text } from "@storybook/addon-knobs"
import Category from './index'
import { Phone } from '../../icons'

storiesOf('Category', module)
  .add('playground', () => {
    const 
      icon = boolean('With icon', false),
      placeholderIcon = icon ? Phone : null,
      title = text('Title', 'Grooming'),
      active = boolean('Active', false)

    return (
      <Category
        active={active}
        icon={placeholderIcon}
      >{title}</Category>
    )
  })