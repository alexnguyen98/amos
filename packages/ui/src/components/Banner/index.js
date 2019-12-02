import React from 'react'
import styles from './styles.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import { InfoCircle, Warning, CheckCircle, Sound, Stop } from '../../icons'

// TODO Add accessibility

export default function Banner(props) {
  const {
    children,
    title,
    type = 'default'
  } = props

  const classes = classNames(
    styles.banner,
    styles[type]
  )

  const icon = () => {
    switch (type) {
      case 'info':
        return InfoCircle
      case ('success'):
        return CheckCircle
      case ('warning'):
        return Warning
      case ('block'):
        return Stop
      case ('default'):
        return Sound
    }
  }
  
  return(
    <div className={classes}>
      <div className={styles.icon}>
        <Icon 
          source={icon()}
        />
      </div>
      <div className={styles.content}>
        <h4>{title}</h4>
        <p>{children}</p>
      </div>
    </div>
  )
}

Banner.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf([
    'default',
    'info',
    'success',
    'warning',
    'block'
  ]),
}
