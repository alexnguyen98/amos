import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, boolean, text } from "@storybook/addon-knobs"
import Link from './index'
import { Phone } from '../../icons'

storiesOf('Link', module)
  .add('playground', () => {
    const
      icon = boolean('With Icon', false),
      type = select('Type', ['default','primary','secondary'], 'default'),
      Text = text('Text', 'Link text'),
      url = text('URL redirect', '')

    const placeholderIcon = icon ? Phone : null

    return (
      <Link
        icon={placeholderIcon}
        type={type}
        url={url}
      >{Text}</Link>
    )
  })