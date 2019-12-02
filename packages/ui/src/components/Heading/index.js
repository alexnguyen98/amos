import React from 'react'
import styles from './styles.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'

// TODO Add accessibility

export default function Heading(props) {
  const { 
    children,
    size = 'extraLarge',
  } = props

  const classes = classNames(
    styles.heading,
    styles[size]
  )
  
  switch (size) {
    case 'extraLarge':
      return(
        <h1 className={classes}>{children}</h1>
      )
    case 'large':
      return(
        <h2 className={classes}>{children}</h2>
      )
    case 'medium':
      return(
        <h3 className={classes}>{children}</h3>
      )
    case 'small':
      return(
        <h4 className={classes}>{children}</h4>
      )
    default:
      return
  }
}

Heading.propTypes = {
  size: PropTypes.oneOf([
    'extraLarge',
    'large',
    'medium',
    'small'
  ]),
}