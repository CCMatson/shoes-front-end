// types
import { Shoe } from '../../types/models';

interface ShoeProps {
  shoes: Shoe[];
}

const ShoesList = (props: ShoeProps): JSX.Element => {
	const { shoes } = props
  console.log('shoesList props', props)

  return (
    <section>
      <h1>Shoes List</h1>
      {/* {ratingOptions.map((rating: number): JSX.Element => (
        <img
          id={rating.toString()}
          key={rating}
          src={noBean}
					alt="Bean Symbol"
        />
      ))} */}
    </section>
  )
}

export default ShoesList;