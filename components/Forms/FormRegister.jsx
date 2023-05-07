import { useState } from 'react'
import styles from '@/styles/form.module.css'
import axios from 'axios'
import Router from 'next/router'

export default function FormLogin() {
  const [dataForm, setDataForm] = useState({
    email: '',
    username: '',
    password: ''
  })
  const [result, setResult] = useState()

  const handleChange = (e) => {
    const newValue = { ...dataForm, [e.target.name]: e.target.value }

    setDataForm(newValue)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/auth/register', dataForm)
      setResult(res)
      Router.push('/login')
    } catch (e) {
      console.error(e)
      setResult({ data: e.response.data })
    }
  }

  return (
    <form className={styles.container} method='POST' onSubmit={handleSubmit}>
      <input
        type='email'
        name='email'
        placeholder='email'
        value={dataForm.email}
        onChange={handleChange}
      />
      <input
        type='text'
        name='username'
        placeholder='username'
        value={dataForm.username}
        onChange={handleChange}
      />
      <input
        type='password'
        name='password'
        placeholder='password'
        value={dataForm.password}
        onChange={handleChange}
      />
      <button>Register</button>
      {result && (
        <h2 style={{ color: 'var(--color-black)' }}>{`${result.data}`}</h2>
      )}
    </form>
  )
}
