import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, boolean, text } from "@storybook/addon-knobs"
import Banner from './index'

storiesOf('Banner', module)
  .add('playground', () => {
    const 
      Text = text('Text', 'Sent on 21 March'),
      title = text('Title', 'Order was sent'),
      type = select('Type', ['default','info','success','warning','block'], 'default')

    return (
      <Banner
        type={type}
        title={title}
      >{Text}</Banner>
    )
  })