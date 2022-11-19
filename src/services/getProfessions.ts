import { api } from './axios'

export async function getProfessions() {
  try {
    const response = await api.get(`/profissoes`)
    return response.data.results
  } catch (error) {
    console.log(error)
  }
}
