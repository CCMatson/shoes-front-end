// services
import * as tokenService from './tokenService'

// types
import { Shoe } from '../types/models'
import { EditShoeFormData, NewShoeFormData } from '../types/forms'

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
  console.log('create function shoeData', shoeData)
  try {
    const res = await fetch(BASE_URL, {
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

  const update = async (shoeData: EditShoeFormData ) : Promise<Shoe> => {
      console.log(shoeData)
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
  
    async function addShoePhoto (
      photoData: FormData,
      shoeData: NewShoeFormData,
      id : number,
    ): Promise<string> {
      try {
        const res = await fetch(`${BASE_URL}/${shoeData.id}/add-photo`, {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${tokenService.getToken}`
          },
          body: photoData
        })
        return await res.json() as string
      } catch (error) {
  throw error
    }
    }

  // const addPicture = async (shoeData: Shoe, photo: File | null) => {
  //   console.log('shoeData' , shoeData)
  //   console.log('photo', photo)
  //   if (photo) {
  //     const photoData = new FormData()
  //     photoData.append('photo', photo)
  //     return await addPhoto(
  //       photoData, 
  //       shoeData.id
  //     )
  //   }
  //   else {
  //     return shoeData
  //   }
  // }


  // async function addPhoto(photoData: FormData, id: number) {
  //   const res = await fetch(`${BASE_URL}/${id}/add-photo`, {
  //     method: 'PUT',
  //     headers: {
  //       'Authorization': `Bearer ${tokenService.getToken()}`
  //     },
  //     body: photoData
  //   })
  //   return await res.json()
  // }

export { index , create , update, deleteShoe as delete , addShoePhoto}