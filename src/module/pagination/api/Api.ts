import { ApiService } from 'app/system/api'

export const getPosts = async () => {
  try {
    return await ApiService.get('posts')
  } catch (error) {
    return error
  }
}