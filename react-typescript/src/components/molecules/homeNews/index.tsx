import Icon from '@mdi/react'

import { mdiComment } from '@mdi/js'
import moment from 'moment'

import { LabelType, Tag } from 'components/atoms'

import styles from './styles.module.scss'

interface IHomeNews {
  title: string
  description?: string
  author?: string
  createdAt?: string
  comments?: number
  tags?: string[]
  type: string
  image?: string
  date?: string
}
const HomeNews = ({
  title,
  description,
  author,
  comments,
  tags,
  type,
  image,
  date,
}: IHomeNews): JSX.Element => {
  const momentDate = moment(date, 'YYYYMMDD').fromNow()
  return (
    <div className={styles.homeNews}>
      <div className={styles.containerHomeNews}>
        <div className={styles.imageNews}>
          <img src={image ? image : 'noImage.png'} alt={title} />
          <div className={styles.label}>
            <LabelType text={"#"+type.toUpperCase()} />
          </div>
        </div>
        <div className={styles.description}>
          <h2>{title}</h2>
          <h3>{description}</h3>
          <div className={styles.newsFooter}>
            <div className={styles.newsFooterInfo}>
              <div className={styles.containerTags}>
                {tags?.map(i => (
                  <Tag tag={i} />
                ))}
              </div>
              <p>
                por <span>{author}</span>, {date? momentDate:""}
              </p>
            </div>
            <div className={styles.comments}>
              <span>{comments}</span>
              <Icon path={mdiComment} size={0.6} color="#676767" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { HomeNews }
