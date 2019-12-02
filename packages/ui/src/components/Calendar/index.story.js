import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Calendar from './index'

const 
  date = {date:new Date(),start:null,end:null},
  onChange = e => {
    console.log(e)
    action('clicked')
  }

storiesOf('Calendar', module)
.add('playground', () =>
  <Calendar
    onChange={onChange}
    value={date}
  />
)