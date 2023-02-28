import { Shoe, User } from "../../types/models";
import { Link } from "react-router-dom";
import styles from './ShoeCard.module.css'



interface ShoeCardProps {
  // shoes: Shoe[],
  user: User | null;
  handleDeleteShoe: (id: number) => void
  shoe: Shoe;
}
// interface shoe extends ShoeCardProps{

// }


const ShoeCard = (props: ShoeCardProps): JSX.Element => {
  const { shoe, user } = props
  // console.log('shoeCard props', props)

  if (!shoe) return <p>Loading...</p>
  return (
    <>
        <>
          <div className={styles.shoeCard} key={shoe.style}>
            <div className={styles.shoeText}>
              <h1>These are my favorite shoes:</h1>
              <div>The style is {shoe.style}</div>
              <div>Shoe info: {shoe.info}</div>
            </div>
            {shoe.profileId === user?.id &&
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