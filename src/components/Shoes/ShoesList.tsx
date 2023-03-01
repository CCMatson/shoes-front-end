// types
import { Shoe, User } from '../../types/models';
import ShoeCard from "../ShoeCard/ShoeCard";
import styles from './ShoeList.module.css'


interface ShoeProps {
  shoes: Shoe[];
  user: User | null;
  handleDeleteShoe: (id: number) => Promise<void>
}

const ShoesList = (props: ShoeProps) => {
  const { shoes, user } = props

  if (!shoes) return <p>Loading...</p>
  return (
      <section className={styles.container}>
        <h1> Welcome to the Shoe Gallery:</h1>
        <h2>Browse the collection, add new shoes, or edit or delete items you have added.</h2>
        <div className={styles.cards}>
        {shoes.map((shoe: Shoe) => {
            return (
              <ShoeCard shoe={shoe} user={user} handleDeleteShoe={props.handleDeleteShoe} key={shoe.style} />
            )
          }
          )}

        </div>
      </section>
  )
}

export default ShoesList;