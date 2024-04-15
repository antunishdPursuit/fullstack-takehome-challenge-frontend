import Header from "./Header"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function Register({setRaffleId, raffleId}) {
  const [createdParticipant, setCreatedParticipant] = useState({
    first_name: "", 
    last_name: "", 
    email: "", 
    phone: null
  })
  let { id } = useParams();
  useEffect(() => {
    setRaffleId(id)
  }, [setRaffleId, id])

  const addParticipant = (newParticipant) => {
    axios
      .post(`${API}/api/raffles/${id}/participants`, newParticipant)
      .then((res) => {
        console.log("Success!")
      })
      .catch((err) => {
        console.error("catch", err)
      })
  }

  const handleTextChange = (event) =>{
    setCreatedParticipant({...createdParticipant, [event.target.id]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addParticipant(createdParticipant)
  }
  return (
    <div>
      <Header raffleId={raffleId}></Header>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="first_name">First Name*</label>
            <input type="text" className="form-control" id="first_name" placeholder="First Name" onChange={handleTextChange} required/>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="last_name">Last Name*</label>
            <input type="text" className="form-control" id="last_name" placeholder="Last Name" onChange={handleTextChange} required/>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email*</label>
          <input type="email" className="form-control" id="email" placeholder="test@gmail.com" onChange={handleTextChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="number" className="form-control" id="phone" placeholder="***-***-****" onChange={handleTextChange}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Register