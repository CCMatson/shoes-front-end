// types
import { Shoe } from '../../types/models';
import ShoeCard from "../ShoeCard/ShoeCard";

interface ShoeProps {
  shoes: Shoe[];
}

const ShoesList = (props: ShoeProps) => {
	const { shoes } = props
  console.log('shoesList props', props)
  console.log('shoes', shoes)

  return (
    <>
    <section>
      <h2>test messages</h2>    
      <ShoeCard shoes={shoes}/>
    </section>
    </>
  )
}

export default ShoesList;