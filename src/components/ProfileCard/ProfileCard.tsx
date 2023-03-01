// assets
import defaultPic from '../../assets/icons/profile.png'
import { Link } from 'react-router-dom';
import styles from './ProfileCard.module.css'

// types
import { Profile } from '../../types/models'
// import ShoesList from '../Shoes/ShoesList';

interface ProfileCardProps {
  profile: Profile;
}

const ProfileCard = (props: ProfileCardProps): JSX.Element => {
  const { profile } = props

  const profilePic = profile.photo ? profile.photo : defaultPic

  return (

    <article>
      <img src={profilePic} alt={`${profile.name}'s avatar`} />
      <h1 className={styles.h1}>{profile.name}</h1>
      <Link to={`/shoes`} ><button className={styles.button}>View the Collection</button></Link>
    </article>

  )
}

export default ProfileCard;