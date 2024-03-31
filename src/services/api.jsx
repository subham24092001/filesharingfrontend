import axios from "axios"

// const API_URL = import.meta.env.VITE_BASE_URI
const API_URL = "https://filesharingbackend-1.onrender.com"

export const uploadFile = async(data)=>{
  try {
    let response = await axios.post(`${API_URL}/upload`,data)
    return response.data
  } catch (error) {
    console.log("Error while calling the api ",error.message)
  }
}