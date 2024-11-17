import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { UserContext } from '../UserContext';

const UserHeader = () => {
  const { data, userLogout } = React.useContext(UserContext)

  if (data === null) return null
  return (
    <>
      {data ? (
        <Link className={styles.login} to='/conta'>
          {data.nome}
          <button onClick={userLogout}>Sair</button>
        </Link>
      ) :
        <Link className={styles.login} to='/login'>Login / Criar</Link>}
    </>
  )
}

export default UserHeader
