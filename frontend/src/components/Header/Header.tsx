import React from 'react'

import * as styles from './Header.module.scss'
import { Link } from 'react-router'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h4>DashTask</h4>
        <div className={styles.navigation}>
          <Link to="/login">Войти</Link>
          <Link to="/registration">Регистрация</Link>
          <Link to="/dashboard">Доска</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
