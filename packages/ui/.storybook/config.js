import { configure, addDecorator, addParameters } from '@storybook/react'
import  { withKnobs } from '@storybook/addon-knobs'
import  { withInfo } from '@storybook/addon-info'
import '../src/styles/global.scss'
import '../src/styles/calendar.scss'

addDecorator(withInfo({
  inline: true,
  styles: {
    infoStory: {
      padding: '0 40px',
      display: 'flex',
      fontFamily: 'system-ui'
    }
  }
}))

addParameters({
  options: {
    panelPosition: 'bottom',
    showPanel: true,
  }
})

addDecorator(withKnobs)

function loadStories(){
  const req = require.context("../src/components", true, /(\.story\.js$)|(\.story\.jsx$)/)
  req.keys().forEach(req)
}

configure(loadStories, module)