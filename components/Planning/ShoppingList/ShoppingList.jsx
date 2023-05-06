import styles from '@/styles/shoppingList.module.css'
import data from '@/examples/meals-data.json'
import { PlanningContext } from '@/context/PlanningContext'
import { useContext } from 'react'

export default function ShoppingList() {
  const { planningData } = useContext(PlanningContext)

  const ingredients = planningData
    .flatMap((d) => {
      return [d.lunch.ingredients, d.dinner.ingredients]
    })
    .flat()

  const listIngredients = Object.values(
    ingredients.reduce((a, el) => {
      if (!a[el?.name]) {
        a[el?.name] = { name: el?.name, quantity: 0, type: el?.type }
      }
      a[el?.name].quantity += parseInt(el?.quantity, 10)
      return a
    }, {})
  )

  return (
    <>
      <ul className={styles.list}>
        {listIngredients &&
          listIngredients.map((el) => {
            if (el.name === undefined) return ''
            return (
              <li key={el.nameIngredient} className={styles.row}>
                <span>&bull; {el.name}</span>
                <span> ........ </span>
                <span>{el.quantity}</span>
                <span>{el.type}</span>
              </li>
            )
          })}
      </ul>
    </>
  )
}
