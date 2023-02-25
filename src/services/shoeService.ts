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


export { index , create }