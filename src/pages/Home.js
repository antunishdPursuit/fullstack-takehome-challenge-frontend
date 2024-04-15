import { Link } from "react-router-dom"
import { useState } from "react";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function Home({raffles}) {
  const [createdRaffle, setCreatedRaffle] = useState({
    raffle_name: '',
    secret_token: ''
  })

  const addRaffle = (newRaffle) => {
    axios
      .post(`${API}/api/raffles`, newRaffle)
      .then((res) => {
        console.log("Success!")
      })
      .catch((err) => {
        console.error("catch", err)
      })
  }


  const handleTextChange = (event) =>{
    setCreatedRaffle({...createdRaffle, [event.target.id]: event.target.value})
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    addRaffle(createdRaffle)
  }

  return (
    <div>
      <h1 className="d-flex justify-content-center">Raffle App</h1>
      <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="raffle_name" className="form-label">Raffle Name*</label>
          <input type="text" className="form-control" id="raffle_name" onChange={handleTextChange} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="secret_token" className="form-label">Raffle Sercet Token*</label>
          <input type="text" className="form-control" id="secret_token" onChange={handleTextChange} required/>
        </div>
        <div id="emailHelp" className="form-text">You must remeber the secret token.</div>
        <button type="submit" className="btn btn-primary">Create a new raffle</button>
      </form>

      <div className="card text-center">
        <div className="card-header">
          All Raffles:
        </div>
        {raffles.map(raffle => {
          return (
            <div className="card-body border border-primary" key={raffle.id}>
              <h5 className="card-title"><Link to={`/raffles/${raffle.id}/participants`}>{raffle.raffle_name}</Link></h5>
              <p className="card-text">Created On: {raffle.created_at}</p>
              <p className="card-text">{raffle.winner_id ? "Winner Id: " + raffle.winner_id : "No one won yet"}</p>
              <p className="card-text">{raffle.raffle_date ? "Raffle Date: " + raffle.raffle_date : "Not raffled yet"}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home