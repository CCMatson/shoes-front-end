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
      <h1>Hello, here is the list of  profiles</h1>
      {profiles.map((profile: Profile) =>
        <ProfileCard profile={profile} key={profile.id}  />
      )}
    </main>
  )
}

export default Profiles

