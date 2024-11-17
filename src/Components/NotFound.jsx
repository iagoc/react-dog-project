import React from 'react'
import styles from './Login/Login.module.css'

const NotFound = () => {
  return (
    <section className={styles.notFound}>
      <div className='container mainContainer'>
        <h1 className='title'>Erro: 404</h1>
        <p>Página não encontrada</p>
      </div>
    </section>

  )
}

export default NotFound
