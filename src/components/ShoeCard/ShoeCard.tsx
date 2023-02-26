import { Shoe , User } from "../../types/models";


interface ShoeCardProps{
  shoes: Shoe[],
  user: User | null | number;
  handleDeleteShoe: (id: number) => void
}


const ShoeCard = (props : ShoeCardProps): JSX.Element => {
  const {shoes} = props
  if(!shoes.length) return <p>Loading...</p>
  return (
    <>
    {shoes.map((shoe) => 
    <>
    <div key={shoe.profileId}>
    <h4>Shoe Card:</h4>
    <h4>Style: {shoe.style}</h4>
    <h4>Info: {shoe.info}</h4>
    <img src={shoe.photo} alt="user photo" />

    {shoe.profileId === props.user.id && 
    <div>
      <button onClick={() => props.handleDeleteShoe(shoe.id)}>Delete Shoe</button>
    </div> }
    </div>
    </>
    )}
    </>
  );
}

export default ShoeCard;