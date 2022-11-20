import { api } from './axios'

export async function getRooms() {
  try {
    const response = await api.get(`https://api-temp.vercel.app/api/sca/rooms`)
    return response.data.results
  } catch (error) {
    console.log(error)
    return error
  }
}
