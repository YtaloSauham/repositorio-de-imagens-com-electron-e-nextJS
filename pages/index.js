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
        setPhotos(res)
       })
       .catch((err)=>{console.log(err)})
        
   },[seachPhoto])



   function photosRender(){
    return photos.photos && photos?.photos.map((photos)=>{
       return(<>
       
      <li key={photos.id}><img src={photos.src.large} />{photos.id}</li></>)
      })
     }
  

  return (
    <div >
      <Head>
        <title>Electron e NextJS</title>
      </Head>
      teste
      <ul>
        {photosRender()}
      </ul> 
      {console.log(photos)}
     
      

    </div>
  )
}
