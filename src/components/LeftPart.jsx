import React from 'react'
import styles from '../css/LeftPart.module.css'
import '../css/Leftpart.css'
import appleLogo from '../assets/appleLogo.png'
import googleLogo from '../assets/googleIcon.webp'

export default function LeftPart() {
  return (
   <div className= 'container'>
     <div className= 'container2'>
      <h1 className='title'>Get Started Now</h1>
      <form class = {`${styles.flex}`}>
        <label for = "name">Name</label>
        <input className={`${styles.inputBox}` } type='text' id='name'></input>

        <label  for = "email">Email address</label>
        <input className={styles.inputBox}
        
        
        type='text' id='email'></input>

        <label for = "password">Password</label>
        <input className={styles.inputBox} type='text' id='password'></input>

        <div className={styles.checkBox}>
        <input className={styles.inputBox} type='checkbox' id='checkbox'></input>
        <label for = "checkbox">I agree to the <u>terms & policy</u></label>
        </div>

        <button className={styles.signUpBtn}>Signup</button>

      </form>

      <div className='horizontalLine'>
        <div className='leftLine'></div>
        <div>Or</div>
        <div className='rightLine'></div>
      </div>

      <div className='signUp-Options'>
        <div className='buttons'>
            <button className='signInButton'>
                <img src={googleLogo} alt="google-icon" className='setGoogleLogo' />
                <div className='gContent'>sign in with Google</div>
            </button>

            <button className='signInButton'>
                <img src={appleLogo} alt="apple-icon" className='setAppleLogo' />
                <div className='aContent'>sign in with Apple </div>
            </button>
        </div>
        <div className='alreadyHaveAcnt'>Have an account? <span className='Sign In'>Sign In</span></div>
      </div>
    </div>
   </div>
  )
}
