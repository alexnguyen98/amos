import React, { useState } from 'react'
import styles from './styles.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Icon from '../Icon'
import { Down } from '../../icons'

// TODO Add accessibility

export default function Select(props) {
  const { 
    infoMessage,
    inline,
    items,
    label,
    name,
    onChange,
    placeholder,
    required
  } = props

  const [focus, setFocus] = useState(false)

  const inputClasses = classNames(
    styles.input, {
    [styles.inline]: inline
  })

  const wrapperClasses = classNames(
    styles.wrapper,{
    [styles.focused]: focus
  })
  
  return(
    <div className={inputClasses}>
      <label>
        {label}
      </label>
      <div className={wrapperClasses}>
        <select
          defaultValue={'DEFAULT'}
          name={name}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={onChange}
          required={required}
          type="select"
        >
          <option 
            disabled 
            value="DEFAULT" 
          >{placeholder}</option>
          {items.map((value,i) =>
            <option key={i}>{value}</option>
          )}
        </select>
        <Icon 
          source={Down}
          size={'small'}
        />
      </div>
      <p>{infoMessage}</p>
    </div>
  )
}

Select.propTypes = {
  infoMessage: PropTypes.string,
  inline: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool
}