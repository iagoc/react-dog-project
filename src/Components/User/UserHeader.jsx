import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import UserHeaderNav from './UserHeaderNav';
import styles from './UserHeader.module.css'
import react from 'eslint-plugin-import/config/react';

const UserHeader = () => {
  const [title, setTitle] = React.useState('')
  // const location = useLocation()

  // React.useEffect(() => {

  // })

  return (
    <header className={styles.header}>
      <h1 className='title'>{title}</h1>
      <UserHeaderNav />
    </header>
  )
}

export default UserHeader
