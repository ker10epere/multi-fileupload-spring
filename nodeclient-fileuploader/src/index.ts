import axios from 'axios'
import { fileFromPath } from 'formdata-node/file-from-path'
import path from 'path'

const filesDir = path.join(__dirname, '../', 'files')

const ResourceServerClient = axios.create({
  baseURL: 'http://localhost:8080',
})

;(async () => {
  const form = new FormData()
  form.append('file', await fileFromPath(path.join(filesDir, 'file.txt')))
  form.append('content', await fileFromPath(path.join(filesDir, 'content.txt')))
  form.append('blob', new Blob(['Some file']))
  form.append('ignore', 'ignore')

  try {
    const resp = await ResourceServerClient.postForm('/files', form, {
      headers: {
        Accept: 'text/plain',
        'Content-Type': 'multipart/form-data',
      },
    })
    console.log(resp.data)
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.stack)
    } else {
      console.log(e)
    }
  }
})()
