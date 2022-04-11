import React from 'react'

import { getTagType, TagType } from 'components/enums'

import styles from './style.module.scss'

interface ITagProps {
  tag: string
}

const Tag = ({ tag }: ITagProps): JSX.Element => {
  const type = getTagType(tag as TagType)
  return (
    <div
      className={styles.containerTag}
      style={{ backgroundColor: type ? type.color : '#ef6c00' }}
    >
      {type?.name || tag}
    </div>
  )
}

export { Tag }
