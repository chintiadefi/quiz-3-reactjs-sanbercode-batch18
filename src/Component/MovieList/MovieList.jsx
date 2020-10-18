import React, {useEffect, useState} from 'react'
import axios from "axios"

const MovieList = () => {

    const [daftarFilm, setDaftarFilm] =  useState(null)
    const [input, setInput]  =  useState({title: "", rating: 0, duration: 120, genre: "", description: "", image: "", year: 2020, id: null})
  
    useEffect( () => {
      if (daftarFilm === null){
        axios.get(`http://backendexample.sanbercloud.com/api/movies`)
        .then(res => {
          setDaftarFilm(res.data.map(item=>{ return {id: item.id, title: item.title, rating: item.rating, duration: item.duration, genre: item.genre, description: item.description, image: item.image_url, year: item.year}} ))
        })
      }
    }, [daftarFilm])

    const handleDelete = (event) => {
        let idDaftarFilm = parseInt(event.target.value)
        axios.delete(`http://backendexample.sanbercloud.com/api/movies/${idDaftarFilm}`)
        .then(() => {
          setDaftarFilm(null)
        })
      }

      const handleChange = (event) =>{
        let typeOfInput = event.target.name
    
        switch (typeOfInput){
          case "title":
          {
            setInput({...input, title: event.target.value});
            break
          }
          case "rating":
          {
            setInput({...input, rating: event.target.value});
            break
          }
          case "duration":
          {
            setInput({...input, duration: event.target.value});
              break
          }
          case "genre":
          {
            setInput({...input, genre: event.target.value});
              break
          }
          case "description":
            {
              setInput({...input, description: event.target.value});
                break
            }
            case "image":
                {
                  setInput({...input, image: event.target.value});
                    break
                }
                case "year":
                  {
                    setInput({...input, year: event.target.value});
                      break
                  }
        default:
          {break;}
        }
      }

      const handleSubmit = (event) =>{
        event.preventDefault()
    
        let title = input.title
        let rating = input.rating
        let duration = input.duration
        let genre = input.genre
        let description = input.description
        let image = input.image
        let year = input.year
        
    
        if (input.id === null){        
          axios.post(`http://backendexample.sanbercloud.com/api/movies`, {title, rating, duration, genre, description, image, year})
          .then(res => {
              setDaftarFilm([
                ...daftarFilm, 
                { id: res.data.id, 
                  title, rating, duration, genre, description, image, year
                }])
          })
        }else{
          axios.put(`http://backendexample.sanbercloud.com/api/movies/${input.id}`, {title, rating, duration, genre, description, image, year})
          .then(() => {
              let daftarFilm = daftarFilm.find(item=> item.id === input.id)

              daftarFilm.title = title
              daftarFilm.rating = rating
              daftarFilm.duration = duration
              daftarFilm.genre = genre
              daftarFilm.description = description
              daftarFilm.image = image
              daftarFilm.year = year
              setDaftarFilm([...daftarFilm])
          })
        }
    
        setInput({title: "", rating: 0, duration: 120, genre: "", description: "", image: "", year: 2020, id: null})
    
      }

    return(
        <React.Fragment>
            <form style={{margin: "0 35% 15px 35%"}}>
                <input/>
                <button>search</button>
            </form>
            <h1>Daftar Film</h1>
            <table rules="rows" style={{textAlign: "left", margin: "0 5% 0 5%"}}>
                <tr>
                <th style={{width: "30px", marginRight: "15px"}}>No</th>
                <th style={{width: "300px", marginRight: "15px"}}>Title</th>
                <th style={{width: "200px", marginRight: "15px"}}>Description</th>
                <th style={{width: "75px", marginRight: "15px"}}>Year</th>
                <th style={{width: "150px", marginRight: "15px"}}>Duration</th>
                <th style={{width: "200px", marginRight: "15px"}}>Genre</th>
                <th style={{width: "50px", marginRight: "15px"}}>Rating</th>
                <th style={{width: "100px", marginRight: "15px"}}>Action</th>
                </tr>

                {daftarFilm !== null && daftarFilm.map((item, index) => {
                return(
                <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.description.slice(0, 20)}...</td>
                <td>{item.year}</td>
                <td>{(item.duration / 60).toFixed(1)} Jam</td>
                <td>{item.genre}</td>
                <td>{item.rating}</td>
                <td>
                    <button>Edit</button>
                    <button onClick={handleDelete} value={item.id}>Delete</button>
                </td>
                </tr>
                   )
                    })
                    }
            </table>
            <div>
                <h1>Movies Form</h1>
                <form onSubmit={handleSubmit} style={{width: "50%", margin: "0 30% 0 30%"}}>
                    <label><b>Title:</b></label>
                    <input style={{float: "right"}} name="title" value={input.title} type="text" required onChange={handleChange}/>
                    <br/><br/>
                    <label><b>Descrition:</b></label>
                    <textarea style={{float: "right"}} value={input.description} cols="30" rows="4" required onChange={handleChange}></textarea>
                    <br/><br/><br/><br/><br/>
                    <label><b>Year:</b></label>
                    <input style={{float: "right"}} name="year" value={input.year} type="number" min="1998" max="2020" required onChange={handleChange}/>
                    <br/><br/>
                    <label><b>Duration:</b></label>
                    <input style={{float: "right"}} name="duration" value={input.duration} type="number" required onChange={handleChange}/>
                    <br/><br/>
                    <label><b>Genre:</b></label>
                    <input style={{float: "right"}} name="genre" value={input.genre} type="text" required onChange={handleChange}/>
                    <br/><br/>
                    <label><b>Rating:</b></label>
                    <input style={{float: "right"}} name="rating" value={input.rating} type="number" min="0" max="10" required onChange={handleChange}/>
                    <br/><br/>
                    <label><b>Image Url:</b></label>
                    <textarea style={{float: "right"}} name="image" value={input.image} cols="30" rows="4" required onChange={handleChange}></textarea>
                    <br/><br/><br/><br/><br/>
                    <button style={{margin: "0 45% 0 45%"}} type="submit">submit</button>
                </form>
            </div>
        </React.Fragment>
    );
}

export default MovieList