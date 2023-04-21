import styles from '@/styles/shoppingList.module.css'
import data from '@/examples/ingredients-data.json'

export default function ShoppingList() {
  return (
    <>
      <ul className={styles.list}>
        {data &&
          data.map((el) => {
            return (
              <li className={styles.row}>
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
