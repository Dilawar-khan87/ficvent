'use client'

import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
})

axiosInstance.interceptors.request.use(
  async function (config) {
    const accessToken = await getAccessToken()
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// Function to fetch access token (replace with your logic)
async function getAccessToken() {
  // Implement your logic to retrieve access token, for example from localStorage, sessionStorage, or via an API call
  return process.env.NEXT_PUBLIC_TOKEN
}

export default axiosInstance
