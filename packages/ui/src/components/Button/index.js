import React from 'react'
import styles from './styles.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Spinner } from '../../icons'
import Icon from '../Icon'

// TODO Add accessibility

export default function Button(props) {
  const { 
    align,
    children,
    disabled,
    fullWidth,
    icon,
    loading,
    onClick,
    size = 'medium', 
    type = 'default',
  } = props

  const classes = classNames(
    styles.btn,
    styles[align],
    styles[size],
    styles[type], {
    [styles.disabled]: disabled,
    [styles.fullWidth]: fullWidth,
  })
  
  const iconSize = size !== 'slim' ? 'medium' : 'small'
  const iconContent = icon ? (
    <Icon 
      size={iconSize}
      source={icon}
    />
  ) : null

  const content = loading ? (
    <span>
      <Icon
        size={iconSize}
        spin={true}
        source={Spinner}
      />
      <span className={styles.none}>{children}</span>
    </span>
  ) : (
    <span className={styles.icon}>
      {iconContent}
      {children}
    </span>
  )
  
  return(
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
    >{content}</button>
  )
}

Button.propTypes = {
  align: PropTypes.oneOf([
    'left',
    'center',
    'right'
  ]),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  icon: PropTypes.func,
  onClick: PropTypes.func,
  size: PropTypes.oneOf([
    'slim',
    'medium',
    'large'
  ]),
  type: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
  ]),
}