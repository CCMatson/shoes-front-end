import { Shoe , User } from "../../types/models";
import { Link } from "react-router-dom";
import styles from './ShoeCard.module.css'



interface ShoeCardProps{
  shoes: Shoe[],
  user: User | null | number;
  handleDeleteShoe: (id: number) => void 
  // id: number
}


const ShoeCard = (props : ShoeCardProps): JSX.Element => {
  const {shoes} = props
  console.log('shoeCard props' , props)
  // console.log('shoe photo', shoes.photo)

  if(!shoes.length) return <p>Loading...</p>
  return (
    <>
    <main className={styles.container}>
    {shoes.map((shoe) => 
    <>
    <div className={styles.shoeCard} key={shoe.profileId}>
    <div className={styles.shoeText}>
    <div>Shoe Card:</div>
    <div>Style: {shoe.style}</div>
    <div>Info: {shoe.info}</div>
    {/* <img src={shoe.photo} alt="user photo" /> */}
      </div>

      {/* {shoe.profileId &&  */}
      {shoe.profileId === props.user.id && 
    <div className={styles.buttonContainer}>
      <Link to={`/shoes/${shoe.id}/edit`} state={shoe} ><button className={styles.button}>Edit Shoe</button></Link>
      {/* <button onClick={() => props.handleDeleteShoe(shoe.id)}>Delete Shoe</button> */}
      <button className={styles.button} role="button" onClick={() => props. handleDeleteShoe(shoe.id)}>Delete Shoe</button>
    </div> }
    </div>
    </>
    )}
    </main>
    </>
  );
}

export default ShoeCard;