import React from 'react'
import LeftPart from '../components/LeftPart'
import RightPart from '../components/RightPart'
import styles from '../css/SignUp.module.css'

export default function Signup() {
  return (
    <div className={styles.container}>
      <LeftPart/>         
      <RightPart/>
    </div>
  )
}
