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

  // Formato de ingredientes: [sal 2 gr,Aceite de Oliva 20 ml] => "sal 2 gr, Aceite de Oliva 20 ml"
  // Formato de composition: [carne, pescado, lactosa] => "carne, pescado, lactosa"

  const [result, setResult] = useState()
  const [composition, setComposition] = useState([])
  const [finalIngredients, setFinalIngredients] = useState([])
  const [ingredientValue, setIngredientValue] = useState({
    ingredient: '',
    quantity: '',
    type: ''
  })
  const [listIngredients, setListIngredients] = useState(ingredients)
  const [dataChanged, setDataChanged] = useState(true)

  const typeArray = ['c/u', 'kg', 'g', 'l', 'ml']
  const compArray = [
    '',
    'meat',
    'fish',
    'eggs',
    'dairy',
    'gluten',
    'crustaceans',
    'peanuts',
    'soya',
    'nuts',
    'celery',
    'mustard',
    'sesame',
    'sulphites',
    'lupins',
    'molluscs'
  ]

  // Funciones para el dialog de ingredientes

  const handleChangeIngredients = (e) => {
    if (e.target.name === 'quantity') {
      if (e.target.value < 0) {
        e.target.value = 0
      }
    }
    const value = { ...ingredientValue, [e.target.name]: e.target.value }
    setIngredientValue(value)
  }

  const handleSubmitIngredients = async (e) => {
    e.preventDefault()
    dialog.current.close()
    const value = [...finalIngredients]
    value.push(
      `${ingredientValue.ingredient} ${ingredientValue.quantity} ${ingredientValue.type}`
    )
    setFinalIngredients(value)
    const newValue = { ...dataForm, ingredients: value }
    setDataForm(newValue)
  }

  const handleDeleteIngredient = () => {
    const value = [...finalIngredients]
    value.pop()
    setFinalIngredients(value)
    const newValue = { ...dataForm, ingredients: value }
    setDataForm(newValue)
  }

  const openModalIngredients = () => dialog.current.showModal()
  const closeModalIngredients = () => dialog.current.close()

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get('/api/ingredients')
      setListIngredients(data.data)
    }

    fetchData()
    setDataChanged(false)
  }, [dataChanged])

  const handleCreateIngredient = async () => {
    const value = [...listIngredients]

    try {
      const newValue = window.prompt('Introduzca el nombre del ingrediente:')
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
  }

  // Funciones para el composition

  const handleDeleteComposition = (e) => {
    const value = [...composition]
    value.pop()
    setComposition(value)
    const newValue = { ...dataForm, composition: value.join(', ') }
    setDataForm(newValue)
  }
  const handleChangeComposition = (e) => {
    const value = [...composition]
    const compElement = e.target.value
    if (
      value.filter((el) => el === compElement).length > 0 ||
      compElement !== ''
    ) {
      value.push(compElement)
      setComposition(value)
      const newValue = { ...dataForm, composition: value.join(', ') }
      setDataForm(newValue)
    }
  }

  // Funciones para el resto del form
  const handleChange = (e) => {
    const newValue = { ...dataForm, [e.target.name]: e.target.value }
    setDataForm(newValue)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(dataForm)
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
      <label htmlFor='composition' className={styles.composition}>
        {composition.length !== 0 ? null : 'Composition and/or Allergens'}
        <select onChange={handleChangeComposition}>
          {compArray &&
            compArray.map((el) => {
              return <option>{el}</option>
            })}
        </select>
      </label>
      {composition.length !== 0 ? (
        <output className={styles.outputComposition}>
          {composition.join(', ')}
          <button type='button' onClick={handleDeleteComposition}>
            &#215;
          </button>
        </output>
      ) : null}
      <label htmlFor='ingredient' className={styles.labelIngredient}>
        Ingredients
        <div className={styles.dialogContainer}>
          <dialog ref={dialog} className={styles.dialog}>
            <div className={styles.dialogInputs}>
              <label htmlFor='ingredient'>
                <select name='ingredient' onChange={handleChangeIngredients}>
                  <option value='default'>ingredients...</option>
                  {listIngredients &&
                    listIngredients.map((el) => {
                      return <option>{el.name}</option>
                    })}
                </select>
              </label>
              <input
                name='quantity'
                type='number'
                min={0}
                placeholder='quantity'
                onChange={handleChangeIngredients}
              />
              <label htmlFor='type'>
                <select name='type' onChange={handleChangeIngredients}>
                  <option value='default'>choose...</option>
                  {typeArray &&
                    typeArray.map((el) => {
                      return <option>{el}</option>
                    })}
                </select>
              </label>
            </div>
            <div className={styles.dialogButtons}>
              <button value={ingredientValue} onClick={handleSubmitIngredients}>
                Add to Form
              </button>
              <button type='button' onClick={handleCreateIngredient}>
                Create Ingredient
              </button>
              <button type='button' onClick={closeModalIngredients}>
                Cancel
              </button>
            </div>
          </dialog>
        </div>
        <output className={styles.outputIngredients}>
          <ul>
            {finalIngredients.map((el) => {
              return <li>{el}</li>
            })}
          </ul>
        </output>
        <div className={styles.ingredientButtons}>
          <button type='button' onClick={openModalIngredients}>
            &#43;
          </button>
          {finalIngredients.length !== 0 ? (
            <button type='button' onClick={handleDeleteIngredient}>
              &#215;
            </button>
          ) : null}
        </div>
      </label>
      {result && <h5>{`${result.data}`}</h5>}
      <div className={styles.buttons}>
        <button type='submit' className={styles.greenButton}>
          Create
        </button>
        <button
          type='button'
          className={styles.redButton}
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
