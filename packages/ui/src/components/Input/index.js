import React, { useState } from 'react'
import styles from './styles.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Icon from '../Icon'

// TODO Add accessibility

export default function Input(props) {
  const { 
    active,
    borderLess,
    disabled,
    children,
    errorMessage,
    infoMessage,
    icon,
    inline,
    label,
    maxLength,
    minLength,
    name,
    onChange,
    placeholder,
    type = 'text',
    value,
    required
  } = props

  const [focus, setFocus] = useState(false)

  const inputClasses = classNames(
    styles.input, {
    [styles.inline]: inline
  })

  const wrapperClasses = classNames(
    styles.wrapper,{
    [styles.error]: errorMessage,
    [styles.focused]: focus || active,
    [styles.left]: borderLess === 'left',
    [styles.right]: borderLess === 'right'
  })
  
  const iconContent = icon ? (
    <Icon 
      source={icon}
    />
  ) : null

  const infoContent = infoMessage ? (
    <div className={styles.infoText}>
      {infoMessage}
    </div>
  ) : null

  const errorContent = errorMessage ? (
    <div className={styles.errorText}>
      {errorMessage}
    </div>
  ) : null
  
  return(
    <div className={inputClasses}>
      <label>
        {label}
      </label>
      <div className={wrapperClasses}>
        {iconContent}
        <input
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          minLength={minLength}
          maxLength={maxLength}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          value={children}
          disabled={disabled}
          required={required}
          value={value}
        />
      </div>
      {infoContent}
      {errorContent}
    </div>
  )
}

Input.propTypes = {
  active: PropTypes.bool,
  borderLess: PropTypes.oneOf([
    'left',
    'right'
  ]),
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  infoMessage: PropTypes.string,
  icon: PropTypes.func,
  inline: PropTypes.bool,
  maxLength: PropTypes.number,
  name: PropTypes.string,
  minLength: PropTypes.number,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  type: PropTypes.oneOf([
    'text',
    'number',
    'email',
    'password'
  ]),
}