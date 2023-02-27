// types
import { Profile } from '../../types/models'


// components
import ProfileCard from '../../components/ProfileCard/ProfileCard'

interface ProfilesProps {
  profiles: Profile[];
  // handleVote: (formData: VoteManagerFormData) => void;
}

const Profiles = (props: ProfilesProps): JSX.Element => {
  const { profiles } = props

  if(!profiles.length) return <p>No profiles yet</p>

  return (
    <main className='list'>
      <h1>Welcome to the shoe collection, this is the profiles page:</h1>
      {profiles.map((profile: Profile) =>
        <ProfileCard profile={profile} key={profile.id}  />
      )}
    </main>
  )
}

export default Profiles

