import { parseCookies } from "nookies";
import { api } from "./axios";

const { 'token': token } = parseCookies()

export async function getCliente(clienteId: any) {
  try {
    const response = await api.get(`/admin/clientes/${clienteId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.results;
  } catch (error) {
    return error;
  }
}
