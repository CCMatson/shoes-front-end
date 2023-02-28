// stylesheets
import styles from './Landing.module.css'

// types
import { User } from '../../types/models'

interface LandingProps {
  user: User | null;
}

const Landing = (props: LandingProps): JSX.Element => {
  const { user } = props

  return (
    <main className={styles.container}>
      <h1>Hi, {user ? user.name : 'friend'}</h1>
      <h1>Welcome to the Shoe Collection</h1>
    </main>
  )
}

export default Landing
