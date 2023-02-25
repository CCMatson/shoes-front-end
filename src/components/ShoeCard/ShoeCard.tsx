import { Shoe } from "../../types/models";


interface ShoeCardProps{
  shoes: Shoe[]
}

const ShoeCard = (props : ShoeCardProps): JSX.Element => {
  const {shoes} = props
  if(!shoes.length) return <p>Loading...</p>
  return (
    <>
    {shoes.map((shoe) => 
    <>
    {console.log("shoeCard", shoe.style)}
    <h4>Style: {shoe.style}</h4>
    </>
    )}
    </>
  );
}

export default ShoeCard;