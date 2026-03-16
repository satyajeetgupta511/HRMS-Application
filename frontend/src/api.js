import axios from "axios"

const API = axios.create({

  baseURL: "https://hrms-application-backend.onrender.com/"
})

export default API
