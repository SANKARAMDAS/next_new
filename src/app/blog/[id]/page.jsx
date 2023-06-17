import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </h1>
          <p className={styles.desc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
          </p>
          <div className={styles.auth}>
            <Image src= 'https://images.pexels.com/photos/5778235/pexels-photo-5778235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            width={40}
            height={40}
            className={styles.avator}
             />
             <span className={styles.username}>John Wick</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src= 'https://images.pexels.com/photos/586056/pexels-photo-586056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         
        </p>
      </div>
    </div>
  )
}

export default BlogPost