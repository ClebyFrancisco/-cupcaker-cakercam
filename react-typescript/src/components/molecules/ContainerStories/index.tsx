import { Stories } from 'components/atoms'

import styles from './styles.module.scss'

interface IStoriesProps {
  contents: {
    title: string
    image: string
  }[]
}

const ContainerStories = ({ contents }: IStoriesProps): JSX.Element => {
  {
    console.log(contents)
  }
  return (
    <div className={styles.containerStories}>
      <div className={styles.stories}>
        {contents.map(content => {
          return <Stories text={content.title} image={content.image} />
        })}
      </div>
    </div>
  )
}
export { ContainerStories }
