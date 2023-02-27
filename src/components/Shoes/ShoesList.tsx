// types
import { Shoe, User } from '../../types/models';
import ShoeCard from "../ShoeCard/ShoeCard";

interface ShoeProps {
  shoes: Shoe[];
  user: User ;
  handleDeleteShoe: (id: number) => Promise<void>

}


const ShoesList = (props: ShoeProps) => {
  const { shoes } = props
  console.log('shoesList props', props)
  // console.log('shoes', shoes)

  return (
    <>
      <section>
        <h1> Welcome to the Shoe List:</h1>
        <h2>Browse the collection, add new shoes, or edit or delete items you have added.</h2>
        {/* map shoes onto shoe card */}
        <ShoeCard shoes={shoes} user={props.user} handleDeleteShoe={props.handleDeleteShoe} />
      </section>
    </>
  )
}

export default ShoesList;