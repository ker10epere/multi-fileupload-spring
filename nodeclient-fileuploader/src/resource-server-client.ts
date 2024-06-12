import { AxiosInstance, RawAxiosRequestHeaders } from 'axios'
import { fileFromPath } from 'formdata-node/file-from-path'
import path from 'path'

const filesDir = path.join(__dirname, '../', 'files')

export class ResourceServerClient {
  constructor(private client: AxiosInstance) {}

  public post = async () =>
    await this.client.postForm('/files', await this.formData(), {
      headers: this.headers(),
    })

  private formData = async (): Promise<FormData> => {
    const form = new FormData()
    form.append('file', await fileFromPath(path.join(filesDir, 'file.txt')))
    form.append(
      'content',
      await fileFromPath(path.join(filesDir, 'content.txt'))
    )
    form.append('blob', new Blob(['Some file']))
    form.append('ignore', 'ignore')
    return form
  }

  private headers = (): RawAxiosRequestHeaders => {
    return {
      Accept: 'text/plain',
      'Content-Type': 'multipart/form-data',
    }
  }
}
