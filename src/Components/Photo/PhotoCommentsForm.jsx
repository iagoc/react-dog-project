import React from 'react'
import Enviar from '../../Assets/enviar.svg?react';
import useFetch from '../../Hooks/useFetch'
import styles from './PhotoCommentsForm.module.css'
import { COMMENT_POST } from '../../api';


const PhotoCommentsForm = ({ id, setComments, single }) => {
  const { request, error } = useFetch()
  const [comment, setComment] = React.useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    const { url, options } = COMMENT_POST(id, { comment })
    const { response, json } = await request(url, options)
    if (response.ok) {
      setComment('')
      setComments((comments) => [...comments, json])
    }
  }

  return (
    <form className={`${styles.form} ${single ? styles.single : ''}`} onSubmit={handleSubmit}>
      <textarea
        className={styles.textarea}
        id='comment'
        name='comment'
        placeholder='Comente'
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={styles.button}>
        <Enviar />
      </button>
    </form>
  )
}

export default PhotoCommentsForm
