import { Shoe, User } from "../../types/models";
import { Link } from "react-router-dom";
import styles from './ShoeCard.module.css'



interface ShoeCardProps {
  user: User | null;
  handleDeleteShoe: (id: number) => void
  shoe: Shoe;
}


const ShoeCard = (props: ShoeCardProps): JSX.Element => {
  const { shoe, user } = props

  if (!shoe) return <p>Loading...</p>
  return (
    <>
      <>
        <div className={styles.shoeCard} key={shoe.style}>
          <div className={styles.shoeText}>
            <h1>Favorite Shoes</h1>
            <div>Shoe Style : {shoe.style}.</div>
            <div>Info : {shoe.info}</div>
          </div>
          {shoe.profileId === user?.id &&
            <div className={styles.buttonContainer}>
              <img src="https://i.imgur.com/wJJs04D.png" alt="" />
              <div>{user.name}, you can edit or delete this shoe</div>
              <Link to={`/shoes/${shoe.id}/edit`} state={shoe} ><button className={styles.button}>Edit Shoe</button></Link>
              <button className={styles.button} role="button" onClick={() => props.handleDeleteShoe(shoe.id)}>Delete Shoe</button>
            </div>}
        </div>
      </>
    </>
  );
}

export default ShoeCard;