import React from 'react'
import styles from './styles.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'

// TODO Add accessibility

export default function Textarea(props) {
  const { 
    children,
    infoMessage,
    inline,
    label,
    maxLength,
    minLength,
    onChange,
    rows,
    placeholder,
  } = props

  const classes = classNames(
    styles.textarea, {
    [styles.inline]: inline
  })
  
  return(
    <div className={classes}>
      <label>
        {label}
      </label>
      <div>
        <textarea
          rows={rows}
          minLength={minLength}
          maxLength={maxLength}
          onChange={onChange}
          placeholder={placeholder}
          value={children}
        />
        <p>{infoMessage}</p>
      </div>
    </div>
  )
}

Textarea.propTypes = {
  infoMessage: PropTypes.string,
  inline: PropTypes.bool,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  placeholder: PropTypes.string,
  rows: PropTypes.number
}