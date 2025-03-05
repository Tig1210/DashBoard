import React, { useCallback, useEffect, useState } from 'react'

import * as styles from './App.module.scss'
import { useQuery } from '@tanstack/react-query'
import Header from './components/Header/Header'
import Content from './components/Content/Content'

const App = () => {
  return (
    <div className={styles.main}>
      <Header />
      <Content />
    </div>
  )
}

export default App
