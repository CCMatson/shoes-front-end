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
    <div key={shoe.profileId}>
    <h4>Shoe Card:</h4>
    <h4>Style: {shoe.style}</h4>
    <h4>Info: {shoe.info}</h4>
    <img src={shoe.photo} alt="" />
    </div>
    </>
    )}
    </>
  );
}

export default ShoeCard;