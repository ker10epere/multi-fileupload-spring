import axios from 'axios'
import { fileFromPath } from 'formdata-node/file-from-path'
import path from 'path'
const filesDir = path.join(__dirname, '../', 'files')

;(async () => {
  const form = new FormData()
  form.append('file', await fileFromPath(path.join(filesDir, 'file.txt')))
  form.append('content', await fileFromPath(path.join(filesDir, 'content.txt')))
  form.append('blob', new Blob(['Some file']))

  try {
    const resp = await axios.post('http://localhost:8080/files', form)
    console.log(resp.data)
  } catch (e) {
    console.log(e)
  }
})()
