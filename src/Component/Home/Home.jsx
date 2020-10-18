import React, {useEffect, useState} from 'react'
import axios from "axios"

const Home = () => {
    const [daftarFilm, setDaftarFilm] =  useState(null)
  
    useEffect( () => {
      if (daftarFilm === null){
        axios.get(`http://backendexample.sanbercloud.com/api/movies`)
        .then(res => {
          setDaftarFilm(res.data.map(item=>{ return {id: item.id, title: item.title, rating: item.rating, duration: item.duration, genre: item.genre, description: item.description, image: item.image_url}} ))
        })
      }
    }, [daftarFilm])

    return(
        <div>
        <h1 style={{textAlign: "center"}}>Daftar Film Film Terbaik</h1>
        {daftarFilm !== null && daftarFilm.map((item, index)=>{
            return(
                    <div key={index} style={{marginBottom: "50px"}}>
                    <h3>{item.title}</h3>
                    <div style={{display: "flex"}}>
                        <div>
                            <img src={item.image} alt={item.title} style={{width: "500px", height: "auto", marginRight: "15px"}}/>
                        </div>
                        <div>
                            <h3 style={{marginBottom: "-15px"}}>Rating {item.rating}</h3>
                            <h3 style={{marginBottom: "-15px"}}>Durasi {(item.duration / 60).toFixed(1)} Jam</h3>
                            <h3 style={{marginBottom: "-15px"}}>genre: {item.genre}</h3>
                        </div>
                    </div>
                    <p><b>deskripsi: </b>{item.description}</p>
                    </div>
        )
        })
        }
        </div>
    );
}

export default Home