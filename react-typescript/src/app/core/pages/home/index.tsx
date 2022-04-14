import React, { useCallback, useEffect, useState } from 'react'

import { Footer, Header } from 'components/atoms'
import {
  CarouselContainer,
  ContainerStories,
  HomeNews,
} from 'components/molecules'

import { Response } from 'app/core/services'

export interface IDataProps {
  title: string
  description: string
  author: string
  comments: number
  tags: string[]
  type: string
  image: string
  createdAt: string
  id: string
}

const Home = (): JSX.Element => {
  const [newsData, setNewsData] = useState<IDataProps[]>([])
  const [storiesData, setStoriesData] = useState<IDataProps[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const getNews = useCallback(async () => {
    setIsLoading(true)

    await Response.getNews().then(response => {
      setNewsData(response.data)
    })

    setIsLoading(false)
  }, [])
  const getStories = useCallback(async () => {
    await Response.getStories().then(response => {
      setStoriesData(response.data)
    })

    setIsLoading(false)
  }, [])

  useEffect(() => {
    getNews()
    getStories()
  }, [])
  newsData.sort((a, b) => {
    return a.createdAt > b.createdAt ? -1 : a.createdAt < b.createdAt ? 1 : 0
  })

  storiesData.sort((a, b) => {
    return a.createdAt > b.createdAt ? -1 : a.createdAt < b.createdAt ? 1 : 0
  })

  return (
    <main>
      <Header />
      {newsData ? <CarouselContainer contents={newsData.slice(0, 5)} /> : ''}
      {storiesData ? <ContainerStories contents={storiesData} /> : ''}
      {newsData
        ? newsData.map(content => {
            return (
              <HomeNews
                title={content.title}
                description={content.description}
                tags={content.tags}
                image={content.image}
                type={content.type}
                author={content.author}
                date={content.createdAt}
                comments={content.comments}
              />
            )
          })
        : ''}

      <Footer />
    </main>
  )
}

export default Home
