import Icon from '@mdi/react'

import { mdiMoonWaxingCrescent as moon } from '@mdi/js'

import styles from './styles.module.scss'


const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="logo-black.jpg" alt="" />
        </div>
        
      </div>
      <div className={styles.headerDark}>
        <div className={styles.container}>
            <Icon path={moon}  size={1} color="white"/>
        </div>
      </div>
    </div>
  )
}


export {Header}
