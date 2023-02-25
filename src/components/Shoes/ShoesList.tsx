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
      <h1>There is a margin here</h1>
      <h1>The nav bar is taking up this space</h1>
      <h1>This is a list of all the shoes</h1>
      <ShoeCard shoes={shoes}/>
    </section>
    </>
  )
}

export default ShoesList;