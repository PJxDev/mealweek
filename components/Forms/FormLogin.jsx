import { useState } from 'react'
import styles from '@/styles/form.module.css'
import axios from 'axios'
import Link from 'next/link'

// TODO: CONTROLAR INPUTS

export default function FormLogin() {
  const [dataForm, setDataForm] = useState({
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
      setResult(await axios.post('/api/login', dataForm))
    } catch {
      setResult({ data: 'Usuario Incorrecto' })
    }
  }

  return (
    <form className={styles.container} method='POST' onSubmit={handleSubmit}>
      <input
        type='text'
        name='username'
        placeholder='usuario'
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
      <button>Log in</button>
      {result && <h2>{`${result.data}`}</h2>}
      <Link className={styles.link} href='/register '>
        or register here!
      </Link>
    </form>
  )
}
