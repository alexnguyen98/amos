import React from 'react'
import styles from './styles.scss'
import colors from '../../styles/colors.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'

// TODO Add accessibility

export default function Icon(props) {
  const {
    color = 'grey',
    source,
    size = 'medium',
    spin
  } = props

  const classes = classNames(
    styles.icon,
    colors[color],
    styles[size], {
    [styles.spin]: spin
  })

  if(typeof source === 'function') {
    const IconComponent = source
    return(
      <i className={classes}>
        <IconComponent/>
      </i>
    )
  }
}

Icon.propTypes = {
  color: PropTypes.oneOf([
    'black',
    'white',
    'grey'
  ]),
  source: PropTypes.func,
  spin: PropTypes.bool,
  size: PropTypes.oneOf([
    'small',
    'medium',
  ])
}
