// types
import { Shoe, User } from '../../types/models';
import ShoeCard from "../ShoeCard/ShoeCard";

interface ShoeProps {
  shoes: Shoe[];
  user: User | null;
  handleDeleteShoe: (id: number) => Promise<void>
}

const ShoesList = (props: ShoeProps) => {
  const { shoes, user } = props
  console.log('shoesList props', props)
  // console.log('shoes', shoes)

  return (
    <>
      <section>
        <h1> Welcome to the Shoe List:</h1>
        <h2>Browse the collection, add new shoes, or edit or delete items you have added.</h2>
        <div>
          {shoes.map((shoe: Shoe) => {
            return (
              <ShoeCard shoe={shoe} user={user} handleDeleteShoe={props.handleDeleteShoe} key={shoe.style} />
            )
          }
          )}
        </div>

      </section>
    </>
  )
}

export default ShoesList;