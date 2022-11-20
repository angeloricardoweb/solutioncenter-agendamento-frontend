import { parseCookies } from "nookies";
import { api } from "./axios";

const { 'token': token } = parseCookies()

export async function getAllClientes() {
  try {
    const response = await api.get('/admin/clientes', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data.results.clientes

  } catch (error) {
    return error
  }
}
