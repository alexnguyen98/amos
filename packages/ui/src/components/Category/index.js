import React from 'react'
import styles from './styles.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Icon from '../Icon'

// TODO Add accessibility

export default function Category(props) {
  const {
    children,
    icon,
    active,
    onClick
  } = props

  const classes = classNames(
    styles.category, {
    [styles.active]: active
  })

  const iconContent = icon ? (
    <Icon 
      size={'small'}
      source={icon}
    />
  ) : null

  return(
    <div 
      className={classes}
      onClick={onClick}
    >
      {iconContent}
      {children}
    </div>
  )
}

Category.propTypes = {
  active: PropTypes.bool,
  icon: PropTypes.func,
}
