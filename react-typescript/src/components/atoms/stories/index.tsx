import React from 'react'

import styles from './styles.module.scss'

interface IStories {
    text: string,
    image: string
}

const Stories = ({image, text}:IStories): JSX.Element => {
  return (
    <div className={styles.containerStories}>
      <div className={styles.imageStories}>
        <img src={image} alt={text} />
        
      </div>
      <div className={styles.title}>{text}</div>
    </div>
  )
}

export { Stories }
