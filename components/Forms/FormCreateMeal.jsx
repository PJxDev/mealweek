import { useEffect, useRef, useState } from 'react'
import styles from '@/styles/createModal.module.css'
import axios from 'axios'

export default function FormCreateMeal({ setModalshow, ingredients }) {
  const [dataForm, setDataForm] = useState({
    author: '3',
    name: '',
    icon: '',
    description: '',
    composition: '',
    ingredients: ''
  })
  const dialog = useRef()

  // Formato de ingredientes: [[sal, 2, gr],[Aceite de Oliva, 20, ml]] => "sal 2 gr, Aceite de Oliva 20 ml"
  // Formato de composition: [carne, pescado, lactosa] => "carne, pescado, lactosa"

  const [result, setResult] = useState()
  const [finalIngredients, setFinalIngredients] = useState([])
  const [ingredientValue, setIngredientValue] = useState({
    ingredient: '',
    quantity: '',
    type: ''
  })
  const [listIngredients, setListIngredients] = useState(ingredients)
  const [dataChanged, setDataChanged] = useState(true)

  const typeArray = ['c/u', 'kg', 'g', 'l', 'ml']

  // Funciones para el dialog de ingredientes
  const handleResultIngredients = (e) => {
    const value = [
      ...finalIngredients,
      `${ingredientValue.ingredient} ${ingredientValue.quantity} ${ingredientValue.type}`
    ]
    setFinalIngredients(value)
  }

  const handleChangeIngredients = (e) => {
    const value = { ...ingredientValue, [e.target.name]: e.target.value }
    setIngredientValue(value)
  }

  const handleSubmitIngredients = (e) => {
    e.preventDefault()
    dialog.current.close()
    handleResultIngredients()
  }

  const handleDeleteIngredient = () => {
    const value = [...finalIngredients]
    value.pop()
    setFinalIngredients(value)
  }

  const openModalIngredients = () => dialog.current.showModal()
  const closeModalIngredients = () => dialog.current.close()

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get('/api/ingredients')
      setListIngredients(data.data)
      console.log(data.data)
    }

    fetchData()
    setDataChanged(false)
  }, [dataChanged])

  // Funciones para el resto del form
  const handleChange = (e) => {
    if (e.target.name === 'composition') {
      e.target.value = e.target.value.toLowerCase()
    }
    const newValue = { ...dataForm, [e.target.name]: e.target.value }
    setDataForm(newValue)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newValue = { ...dataForm, ingredients: finalIngredients }
    setDataForm(newValue)
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
      <label htmlFor='ingredients'>
        Introduzca la composición separada por comas: carne, lactosa, pescado
        ...
        <input
          type='text'
          name='composition'
          placeholder='composition ...'
          value={dataForm.composition}
          onChange={handleChange}
        />
      </label>
      <label htmlFor='ingredients'>
        Ingredientes
        {/* <input
        type='text'
        name='ingredients'
        placeholder='ingredients ...'
        value={dataForm.password}
        onChange={handleChange}
        required
      /> */}
        <dialog ref={dialog}>
          <form>
            <div>
              <label>
                Ingredients:
                <select name='ingredient' onChange={handleChangeIngredients}>
                  <option value='default'>Choose…</option>
                  {listIngredients &&
                    listIngredients.map((el) => {
                      return <option>{el.name}</option>
                    })}
                </select>
                <input
                  name='quantity'
                  type='number'
                  min={0}
                  placeholder='0'
                  onChange={handleChangeIngredients}
                />
                <select name='type' onChange={handleChangeIngredients}>
                  <option value='default'>Choose…</option>
                  {typeArray &&
                    typeArray.map((el) => {
                      return <option>{el}</option>
                    })}
                </select>
              </label>
            </div>
            <div>
              <button
                formMethod='dialog'
                value={ingredientValue}
                onClick={handleSubmitIngredients}
              >
                Add
              </button>
            </div>
          </form>
          <button
            onClick={async () => {
              const value = [...listIngredients]

              try {
                const newValue = window.prompt(
                  'Introduzca el nombre del ingrediente:'
                )
                console.log(newValue)
                if (!newValue) {
                  throw new Error('Se canceló la creación del ingrediente')
                }
                await axios.post('/api/ingredients', { name: newValue })
                value.push(newValue)
                setListIngredients([...value])
                setDataChanged(true)
              } catch (error) {
                console.log(error)
                window.alert(
                  'Ha ocurrido un error o se ha cancelado la creación del ingrediente.'
                )
              }
            }}
          >
            Create Ingredient
          </button>
          <button onClick={closeModalIngredients}>Cancelar</button>
        </dialog>
        <button onClick={openModalIngredients}>Añadir Ingrediente</button>
        <button onClick={handleDeleteIngredient}>Eliminar Último</button>
        <output>{finalIngredients.join(', ')}</output>
      </label>
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
