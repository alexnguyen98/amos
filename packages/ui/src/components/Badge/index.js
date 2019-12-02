import React from 'react'
import styles from './styles.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Icon from '../Icon'

// TODO Add accessibility

export default function Badge(props) {
  const {
    children,
    icon,
    type = 'default'
  } = props

  const classes = classNames(
    styles.badge,
    styles[type]
  )

  const iconContent = icon ? (
    <Icon 
      size={'small'}
      source={icon}
    />
  ) : null

  return(
    <span className={classes}>
      {iconContent}
      {children}
    </span>
  )
}

Badge.propTypes = {
  icon: PropTypes.func,
  type: PropTypes.oneOf([
    'default',
    'info',
    'status',
    'success',
    'block'
  ]),
}
