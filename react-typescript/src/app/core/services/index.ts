import { AxiosResponse } from 'axios'

import { http } from 'interfaces/http'

const API_NEWS = '/v1/news/'
const API_STORIES = '/v1/stories'

const getNews = async (): Promise<AxiosResponse> => {
  return http.get(API_NEWS)
}
const getStories = async (): Promise<AxiosResponse> => {
  return http.get(API_STORIES)
}

const Response = {
  getNews,
  getStories,
}

export { Response }
