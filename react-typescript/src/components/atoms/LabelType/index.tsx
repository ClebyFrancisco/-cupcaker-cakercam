import React from 'react'

import styles from './styles.module.scss'

interface ILabelTypeProps {
  text: string
}
const LabelType = ({ text }: ILabelTypeProps): JSX.Element => {
  return <div className={styles.containerLabel}>{text}</div>
}

export { LabelType }