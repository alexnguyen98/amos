import React from 'react'
import styles from './styles.scss'

// TODO Add accessibility

export default function Subheading(props) {
  const { 
    children
  } = props
  
  return(
    <h3 className={styles.subheading}>{children}</h3>
  )
}
