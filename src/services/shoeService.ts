// services
import * as tokenService from './tokenService'

// types
import { Shoe } from '../types/models'
import { NewShoeFormData } from '../types/forms'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/shoes`

async function index(): Promise<Shoe[]> {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json() as Shoe[]
  } catch (error) {
    throw error
  }
}

const create = async (shoeData: NewShoeFormData) => {
  try {
    const res: Response = await fetch(BASE_URL, {
      method: 'POST',
        headers: { 'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(shoeData)
    })
    return res.json()
  } catch (error) {
    throw error
  }
  }

  const deleteShoe = async (id: number): Promise<Shoe | undefined> => {
    try {
      const res = await fetch (`${BASE_URL}/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
      })
      return res.json();
    } catch (error) {
      console.log(error)
    }
  }

  const update = async (shoeData: Shoe) : Promise<Shoe> => {
    try{
      const res = await fetch(`${BASE_URL}/${shoeData.id}`, {
          method: 'PUT',
            headers: { 'Authorization': `Bearer ${tokenService.getToken()}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(shoeData)
        })
        return res.json()
      } catch (error) {
        throw error
      }
    }
  

  const addPicture = async (shoeData: Shoe, photo: File | null) => {
    if (photo) {
      const photoData = new FormData()
      photoData.append('photo', photo)
      return await addPhoto(
        photoData, 
        shoeData.profileId
      )
    }
    else {
      return shoeData
    }
  }

  // not working
  async function addPhoto(photoData: FormData, id: number) {
    const res = await fetch(`${BASE_URL}/${id}/add-photo`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: photoData
    })
    return await res.json()
  }

export { index , create , addPicture ,update, deleteShoe as delete, }