import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'

async function getData(id){
  const res = await fetch(`http://localhost:3000/api/posts/${id}`,{cache: 'no-cache'});

  if(!res.ok) {
  //  throw new Error('Failed to fetch data');
  return notFound()
  }

  return res.json();
}

export async function generateMetadata({params}) {
  const post = await getData(params.id)
  return{
    title: post.title,
    description: post.desc,
  };
}

const BlogPost =async ({params}) => {    //(using params)passing id according to the posts to server
  const data = await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
          {data.title}
          </h1>
          <p className={styles.desc}>
          {data.desc}
          </p>
          <div className={styles.auth}>
            <Image src= {data.img}
            alt=''
            width={40}
            height={40}
            className={styles.avator}
             />
             <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src= {data.img}
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