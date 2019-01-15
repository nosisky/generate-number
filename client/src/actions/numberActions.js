import axios from "axios";


export const generateNumbers = () => {
  return axios.get('api/generate')
}


export const listNumbers = () => {
  return axios.get('api/list')
}
