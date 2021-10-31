import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

const url='http://localhost:3000/api/photosController'

export default function Home() {
  const[seachPhoto,setSeachPhoto]=useState('');
  const[photos,setPhotos]=useState([])

  useEffect(()=>{
       fetch(url)
        
       .then((res)=>res.json())
       .then((res)=>{
        setPhotos(res.photos)
       })
       .catch((err)=>{console.log(err)})
        
   },[seachPhoto])


  function photosRender(){

   return photos?.map((photos)=>{
      <li key={photos.id}>{photos.id}</li>
    })
 
   }
  

  return (
    <div >
      <Head>
        <title>Electron e NextJS</title>
      </Head>
      teste
      <ul>
        {photos.length>0?photosRender() : <p>No results</p>}
      </ul> 
      {console.log(photos)}
     
      

    </div>
  )
}
