import { useState } from 'react'
import styles from '@/styles/formLogin.module.css'
import axios from 'axios'

export default function FormLogin() {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [result, setResult] = useState()

  const handleChange = (e) => {
    console.log(user, pass)
    const newValue = e.target.value
    switch (e.target.name) {
      case 'username':
        setUser(newValue)
        break
      case 'password':
        setPass(newValue)
        break
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setResult(
        await axios.post('/api/login', {
          username: user,
          password: pass
        })
      )
    } catch {
      // TODO
      setResult({ data: 'Usuario Incorrecto' })
    }
  }

  return (
    <form className={styles.container} method='POST' onSubmit={handleSubmit}>
      <input
        type='text'
        name='username'
        placeholder='usuario'
        value={user}
        onChange={handleChange}
      />
      <input
        type='password'
        name='password'
        placeholder='password'
        value={pass}
        onChange={handleChange}
      />
      <button>send</button>
      {result && <h2>{`${result.data}`}</h2>}
    </form>
  )
}
