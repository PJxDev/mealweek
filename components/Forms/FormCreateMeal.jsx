import { useState } from 'react'
import styles from '@/styles/createModal.module.css'
import axios from 'axios'

export default function FormCreateMeal({ setModalshow }) {
  const [dataForm, setDataForm] = useState({
    author: '3',
    name: '',
    icon: '',
    description: '',
    composition: '',
    ingredients: ''
  })

  // Formato de ingredientes: [[sal, 2, gr],[Aceite de Oliva, 20, ml]] => "sal 2 gr, Aceite de Oliva 20 ml"
  // Formato de composition: [carne, pescado, lactosa] => "carne, pescado, lactosa"

  const [result, setResult] = useState()

  const handleChange = (e) => {
    // TODO: CONTROL INPUTS

    if (e.target.name === 'composition') {
      e.target.value = e.target.value.toLowerCase()
    }
    const newValue = { ...dataForm, [e.target.name]: e.target.value }
    setDataForm(newValue)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const result = await axios.post('/api/meals', dataForm)
      setResult(result)
    } catch (e) {
      console.error(e)
      setResult({ data: 'Hubo un error enviando la petición al servidor' })
    }
  }
  const handleCancel = (e) => {
    setModalshow(false)
  }

  return (
    <form className={styles.container} method='POST' onSubmit={handleSubmit}>
      <input
        type='text'
        name='name'
        placeholder='name'
        value={dataForm.name}
        onChange={handleChange}
        required
      />
      <div className={styles.divRadio}>
        <div className={styles.radioButton}>
          <label>
            &nbsp;🍴
            <input
              type='radio'
              name='icon'
              value='🍴'
              onChange={handleChange}
              defaultChecked
            />
          </label>
        </div>
        <div className={styles.radioButton}>
          <label>
            🍖
            <input
              type='radio'
              name='icon'
              value='🍖'
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.radioButton}>
          <label>
            &nbsp;🍕
            <input
              type='radio'
              name='icon'
              value='🍕'
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.radioButton}>
          <label>
            🥚
            <input
              type='radio'
              name='icon'
              value='🥚'
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.radioButton}>
          <label>
            🍞
            <input
              type='radio'
              name='icon'
              value='🍞'
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.radioButton}>
          <label>
            🧀
            <input
              type='radio'
              name='icon'
              value='🧀'
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.radioButton}>
          <label>
            🥗
            <input
              type='radio'
              name='icon'
              value='🥗'
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.radioButton}>
          <label>
            🍜
            <input
              type='radio'
              name='icon'
              value='🍜'
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.radioButton}>
          <label>
            🍙
            <input
              type='radio'
              name='icon'
              value='🍙'
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.radioButton}>
          <label>
            🥘
            <input
              type='radio'
              name='icon'
              value='🥘'
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.radioButton}>
          <label>
            🍲
            <input
              type='radio'
              name='icon'
              value='🍲'
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.radioButton}>
          <label>
            &nbsp;🥛
            <input
              type='radio'
              name='icon'
              value='🥛'
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.radioButton}>
          <label>
            🐟
            <input
              type='radio'
              name='icon'
              value='🐟'
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.radioButton}>
          <label>
            🌭
            <input
              type='radio'
              name='icon'
              value='🌭'
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.radioButton}>
          <label>
            🍔
            <input
              type='radio'
              name='icon'
              value='🍔'
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.radioButton}>
          <label>
            🥪
            <input
              type='radio'
              name='icon'
              value='🥪'
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.radioButton}>
          <label>
            🐓
            <input
              type='radio'
              name='icon'
              value='🐓'
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.radioButton}>
          <label>
            🐄
            <input
              type='radio'
              name='icon'
              value='🐄'
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.radioButton}>
          <label>
            🐖
            <input
              type='radio'
              name='icon'
              value='🐖'
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.radioButton}>
          <label>
            🐑
            <input
              type='radio'
              name='icon'
              value='🐑'
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.radioButton}>
          <label>
            🍟
            <input
              type='radio'
              name='icon'
              value='🍟'
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.radioButton}>
          <label>
            🥓
            <input
              type='radio'
              name='icon'
              value='🥓'
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.radioButton}>
          <label>
            🍗
            <input
              type='radio'
              name='icon'
              value='🍗'
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.radioButton}>
          <label>
            🥩
            <input
              type='radio'
              name='icon'
              value='🥩'
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.radioButton}>
          <label>
            🥟
            <input
              type='radio'
              name='icon'
              value='🥟'
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.radioButton}>
          <label>
            🌯
            <input
              type='radio'
              name='icon'
              value='🌯'
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.radioButton}>
          <label>
            🌮
            <input
              type='radio'
              name='icon'
              value='🌮'
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
      <textarea
        name='description'
        maxLength={200}
        placeholder='description ...'
        value={dataForm.description}
        onChange={handleChange}
      />
      <label for='ingredients'>
        Introduzca la composición separada por comas: carne, lactosa, pescado
        ...
      </label>
      <input
        type='text'
        name='composition'
        placeholder='composition ...'
        value={dataForm.composition}
        onChange={handleChange}
      />
      <label for='ingredients'>
        Introduzca los ingredientes según el ejemplo: Sal 2 gr, Aceite 10 ml,
        ...
      </label>
      <input
        type='text'
        name='ingredients'
        placeholder='ingredients ...'
        value={dataForm.password}
        onChange={handleChange}
        required
      />
      <div className={styles.buttons}>
        {result && <h2>{`${result.data}`}</h2>}
        <button type='submit' className={styles.greenButton}>
          Create
        </button>
        <button className={styles.redButton} onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  )
}
