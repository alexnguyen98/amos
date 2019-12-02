import React from 'react'
import styles from './styles.scss'

// TODO Add accessibility

export default function Subtext(props) {
  const { 
    children
  } = props
  
  return(
    <p className={styles.subtext}>{children}</p>
  )
}
