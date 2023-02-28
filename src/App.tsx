// npm modules 
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import ShoesList from './components/Shoes/ShoesList'
import NewShoe from './pages/NewShoes/NewShoes'
import EditShoeForm from './components/EditShoe/EditShoeForm'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import * as shoeService from './services/shoeService'

// stylesheets
import './App.css'

// types
import { User, Profile, Shoe } from './types/models'
import { EditShoeFormData, NewShoeFormData } from './types/forms'

function App(): JSX.Element {
  const navigate = useNavigate()

  const [user, setUser] = useState<User | null>(authService.getUser())

  const [profiles, setProfiles] = useState<Profile[]>([])

  const [shoes, setShoes] = useState<Shoe[]>([])

  useEffect((): void => {

    const fetchProfiles = async (): Promise<void> => {
      try {
        const profileData: Profile[] = await profileService.getAllProfiles()
        setProfiles(profileData)
      } catch (error) {
        console.log(error)
      }
    }
    user ? fetchProfiles() : setProfiles([])
  }, [user])

  useEffect((): void => {
    const fetchShoes = async (): Promise<void> => {
      try {
        const shoeData: Shoe[] = await shoeService.index()
        setShoes(shoeData)
      } catch (error) {
        console.log(error)
      }
    }
    // if (user) fetchShoes()
    fetchShoes()
  }, [])

    const handleAddShoe = async (shoeData: NewShoeFormData): Promise<void> => {
    const newShoe = await shoeService.create(shoeData)
    setShoes([newShoe, ...shoes])
    navigate('/profiles')
  }

  const handleUpdateShoe = async (shoeData: EditShoeFormData) => {
    const updateShoe = await shoeService.update(shoeData)
    const updatedAllShoesData = await shoeService.index()
    setShoes(updatedAllShoesData)

    //this might be a prefered way, but I couldn't get it to work : 

    // const updatedShoeData = shoes.filter(shoe => shoe.id === shoeData.id ? updateShoe : shoe)
    // setShoes(updatedShoeData)
    // setShoes(shoes.filter(shoe => shoe.id === shoeData.id ? updateShoe : shoe))
    navigate('/profiles')
  }

  const handleDeleteShoe = async (id: number): Promise<void> => {
    const deletedShoe = await shoeService.delete(id)
    setShoes(shoes.filter(shoe => shoe.id !== id))
    navigate('/shoes')
  }

  const handleLogout = (): void => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = (): void => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={<Landing user={user} />}
        />
        {/* <Route 
        path="/shoes" 
        element={<ShoesList shoes={shoes} user={user}/>}
        /> */}
        <Route path="/shoes/new"
          element={
            <ProtectedRoute user={user}>
              {<NewShoe handleAddShoe={handleAddShoe} user={user} />}
            </ProtectedRoute>
          }
        />
        <Route path="/shoes"
          element={
            <ProtectedRoute user={user}>
              element={<ShoesList user={user} shoes={shoes} handleDeleteShoe={handleDeleteShoe} />}
            </ProtectedRoute>
          }
        />
        <Route path='/shoes/:id/edit'
          element={
            <ProtectedRoute user={user}>
              element={<EditShoeForm user={user} handleUpdateShoe={handleUpdateShoe} />}
            </ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles profiles={profiles} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
