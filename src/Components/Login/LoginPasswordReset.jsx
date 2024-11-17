import React from 'react'
import Input from '../Forms/Input'
import useForm from '../../Hooks/useForm'
import Button from '../Forms/Button'
import { func } from 'prop-types'
import useFetch from '../../Hooks/useFetch'
import { PASSWORD_RESET } from '../../api'
import { useNavigate } from 'react-router-dom'

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState('')
  const [key, setkey] = React.useState('')
  const password = useForm()
  const { loading, error, request } = useFetch()
  const navigate = useNavigate()

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login = params.get('login')
    if (key) setkey(key)
    if (login) setLogin(login)
  }, [])

  async function handleSubmit(event) {
    event.preventDefault()
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value
      })
      const { response } = await request(url, options)
      if (response.ok) navigate('/login')
    }
  }

  return (
    <section className='animeLeft'>
      <h1 className='title'>Reset a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input label='Nova Senha' type='password' name='password' {...password} />
        {loading ? <Button disabled>Resetando...</Button> : <Button>Resetar</Button>}
      </form>
    </section>
  )
}

export default LoginPasswordReset
