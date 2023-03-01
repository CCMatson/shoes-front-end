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
      <h1>Hello, {user ? user.name : 'shoe collector'}</h1>
      <h1>Welcome to the Shoe Collection</h1>
      <h2>Click the links above to visit the shoe gallery or to add new shoes.</h2>
      <div className={styles.icons}>
        <div><img src="https://i.imgur.com/uSgCzyu.png" alt="" /></div>
        <div><img src="https://i.imgur.com/D4hhViw.png" alt="" /></div>
        <div><img src="https://i.imgur.com/ACAgjTN.png" alt="" /></div>
      </div>
    </main>
  )
}

export default Landing
