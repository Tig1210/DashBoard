import React from 'react'

import * as styles from './Content.module.scss'
import Pages from '../../pages/Pages'

const Content = () => {
  return (
    <section className={styles.content}>
      <div className={styles.page}>
        <Pages />
      </div>
    </section>
  )
}

export default Content
