import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from "@storybook/addon-knobs"
import Icon from './index'
import { Phone } from '../../icons'

storiesOf('Icon', module)
  .add('playground', () => {
    const
      color = select('Color', ['white','black','grey'], 'grey'),
      size = select('Size', ['small','medium'], 'medium'),
      source = Phone

    return (
      <Icon
        color={color}
        size={size}
        source={source}
      />
    )
  })