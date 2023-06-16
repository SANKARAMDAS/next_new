import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div>©2023 Das. All right reserved.</div>
        <div className={styles.social}>
          <Image src='/2.png' className={styles.icon} width={15} height={15} alt='Das' />
          <Image src='/3.png' className={styles.icon} width={15} height={15} alt='Das' />
          <Image src='/1.png' className={styles.icon} width={15} height={15} alt='Das' />
          <Image src='/4.png' className={styles.icon} width={15} height={15} alt='Das' />
        </div>
    </div>
  )
}

export default Footer