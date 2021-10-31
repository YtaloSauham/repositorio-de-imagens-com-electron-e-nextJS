import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

const url='http://localhost:3000/api/photosController'

export default function Home() {
  const[seachPhoto,setSeachPhoto]=useState('');
  const[photos,setPhotos]=useState({})

  useEffect(()=>{
     if(!seachPhoto){
       fetch(url)
       .then((res)=>res.json())
       .then((res)=>{
         console.log(res)
       })
       .catch((err)=>{console.log(err)})
        }
   },[seachPhoto])


  //  function photosRender(){
  //    return photos.photos.map((photos)=>{
  //      <li key={photos.id}>{photos.url}</li>
  //    })
  //  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Electron e NextJS</title>
      </Head>
      teste
      {/* <ul>
        {photosRender()}
      </ul> */}
     
      

    </div>
  )
}
