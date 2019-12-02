import React from 'react'
import styles from './styles.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Icon from '../Icon'

// TODO Add accessibility

export default function Link(props) {
  const { 
    children,
    icon,
    onClick,
    type = 'default',
    url,
  } = props

  const classes = classNames(
    styles.link,
    styles[type]
  )
  
  const iconContent = icon ? (
    <Icon 
      source={icon}
    />
  ) : null
  
  if (url) {
    return(
      <a 
        className={classes}
        href={`/${url}`}
      >
        {iconContent}
        {children}
      </a>
    )
  } else {
    return(
      <button
        className={classes}
        onClick={onClick}
      >
        {iconContent}
        {children}
      </button>
    )
  }
}

Link.propTypes = {
  icon: PropTypes.func,
  onClick: PropTypes.func,
  type: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
  ]),
  url: PropTypes.string
}