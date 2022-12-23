import React from 'react'
import styles from './Screen.module.css'

const Screen = (props) => {
  return (
    <div className={styles.screen}>
        <h1 className={styles.display}>{props.displayText}</h1>
    </div>
  )
}

export default Screen