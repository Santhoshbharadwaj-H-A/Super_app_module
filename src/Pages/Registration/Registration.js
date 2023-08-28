import React from 'react';
import LeftBanner from '../../Component/Banner/Banner';
import RegisterForm from '../../Component/Register/Register';
import styles from './Registration.module.css'

function Registration() {
  return (
    <div className={styles.container}>
        <LeftBanner />
        <RegisterForm />
    </div>
  )
}

export default Registration