import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, select } from "@storybook/addon-knobs"
import { action } from '@storybook/addon-actions'
import Button from './index'
import { Phone } from '../../icons'

storiesOf('Button', module)
  .add('playground', () => {
    const
      align = select('Align', ['left','center','right'], 'left'),
      disabled = boolean('Disabled', false),
      fullWidth = boolean('Full width', false),
      icon = boolean('With Icon', false),
      loading = boolean('Loading', false),
      size = select('Size', ['slim','medium','large'], 'medium'),
      Text = text('Text', 'Hello Button'),
      type = select('Type', ['default','primary','secondary','destructive'], 'default')

    const placeholderIcon = icon ? Phone : null

    return (
      <Button 
        align={align}
        disabled={disabled}
        fullWidth={fullWidth}
        icon={placeholderIcon}
        loading={loading}
        onClick={()=>action('clicked')} 
        size={size}
        type={type}
      >{Text}</Button>
    )
  })
