import axios from 'axios'
import { ResourceServerClient } from './resource-server-client'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
})

const client = new ResourceServerClient(axiosInstance)
client.post().then((v) => {
  console.log(v.data)
})
