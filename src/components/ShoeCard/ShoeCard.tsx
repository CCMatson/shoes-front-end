import { Shoe, User } from "../../types/models";
import { Link } from "react-router-dom";
import styles from './ShoeCard.module.css'



interface ShoeCardProps {
  // shoes: Shoe[],
  user: User;
  handleDeleteShoe: (id: number) => void
  shoe: Shoe;
}
// interface shoe extends ShoeCardProps{

// }


const ShoeCard = (props: ShoeCardProps): JSX.Element => {
  const { shoe } = props
  console.log('shoeCard props', props)

  if (!shoe) return <p>Loading...</p>
  return (
    <>
        <>
          <div className={styles.shoeCard} key={shoe.style}>
            <div className={styles.shoeText}>
              <div>Shoe Card:</div>
              <div>Style: {shoe.style}</div>
              <div>Info: {shoe.info}</div>
            </div>



            {shoe.profileId === props.user.id &&
              <div className={styles.buttonContainer}>
                <Link to={`/shoes/${shoe.id}/edit`} state={shoe} ><button className={styles.button}>Edit Shoe</button></Link>
                <button className={styles.button} role="button" onClick={() => props.handleDeleteShoe(shoe.id)}>Delete Shoe</button>
              </div>}
          </div>
        </>
        {/* )} */}
      {/* </main> */}
    </>
  );
}

export default ShoeCard;