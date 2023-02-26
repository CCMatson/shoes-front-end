import { Shoe , User } from "../../types/models";
import { Link } from "react-router-dom";
import styles from './ShoeCard.module.css'



interface ShoeCardProps{
  shoes: Shoe[],
  user: User | null | number;
  handleDeleteShoe: (id: number) => void
}


const ShoeCard = (props : ShoeCardProps): JSX.Element => {
  const {shoes} = props
  if(!shoes.length) return <p>Loading...</p>
  return (
    <>
    <main className={styles.container}>
    {shoes.map((shoe) => 
    <>
    <div className={styles.shoeCard} key={shoe.profileId}>
      <div className={styles.shoeText}>
    <h4>Shoe Card:</h4>
    <h4>Style: {shoe.style}</h4>
    <h4>Info: {shoe.info}</h4>
    <img src={shoe.photo} alt="user photo" />
      </div>

    {shoe.profileId === props.user.id && 
    <div className={styles.buttonContainer}>
      <Link to={`/shoes/${shoe.id}/edit`} state={shoe} ><button>Edit Shoe</button></Link>
      <button onClick={() => props.handleDeleteShoe(shoe.id)}>Delete Shoe</button>
    </div> }
    </div>
    </>
    )}
    </main>
    </>
  );
}

export default ShoeCard;