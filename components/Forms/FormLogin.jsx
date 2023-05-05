import { useCallback, useContext, useState } from 'react'
import styles from '@/styles/form.module.css'
import axios from 'axios'
import Link from 'next/link'
import Router from 'next/router'
import { PlanningContext } from '@/context/PlanningContext'

// TODO: CONTROLAR INPUTS

export default function FormLogin() {
  const {
    planningData,
    setPlanningData,
    adding,
    setAdding,
    isLogged,
    setIsLogged
  } = useContext(PlanningContext)
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
      const value = await axios.post('/api/auth/login', dataForm)
      setResult(value)
      Router.push('/')
      setIsLogged(true)
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
