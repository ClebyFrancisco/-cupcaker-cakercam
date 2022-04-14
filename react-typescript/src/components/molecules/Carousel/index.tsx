// eslint-disable-next-line
import React from 'react'
import { Carousel } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

import { LabelType } from 'components/atoms'

import styles from './styles.module.scss'

interface ICarouselProps {
  contents: {
    title: string
    image: string
    type: string
    description: string
  }[]
}
const CarouselContainer = ({ contents }: ICarouselProps): JSX.Element => {
  return (
    <div className={styles.containerCarousel}>
      <Carousel fade={true} pause={false} className={styles.carousel}>
        {contents.map(content => {
          return (
            <Carousel.Item interval={5000}>
              <img
                className="d-block w-100"
                src={content.image}
                alt={content.title}
              />
              <div className={styles.label}>
                <LabelType text={'#' + content.type.toUpperCase()} />
              </div>
              <Carousel.Caption className={styles.caption}>
                <h3>{content.title}</h3>
                <p>{content.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  )
}

export { CarouselContainer }
