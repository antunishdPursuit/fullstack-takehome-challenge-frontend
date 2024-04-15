import Header from "./Header"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function WinnerPage({setRaffleId, raffleId}) {
  const [winner, setWinner] = useState({})
  const [secretToken, setSecretToken] = useState({
    secret_token: "",
    raffle_date: new Date()
  })
  let { id } = useParams();

  useEffect(() => {
    setRaffleId(id)
    axios
    .get(`${API}/api/raffles/${id}/winner`)
      .then((res) => {
        setWinner(res.data.data)
      })
      .catch((err) => {
        console.error("catch", err)
      })
  }, [setRaffleId, id])

  const addWinner = (newWinner) =>{
    axios
    .put(`${API}/api/raffles/${id}/winner`, newWinner)
      .then((res) => {
        console.log("Success!")
      })
      .catch((err) => {
        console.error("catch", err)
      })
  }
  const handleTextChange = (event) => {
    setSecretToken({...secretToken, [event.target.id]: event.target.value})

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addWinner(secretToken)
  }

  const parseDate = (date) => {
    let raffleDate = new Date(date)
    return raffleDate.toDateString() + ' at ' + raffleDate.toLocaleTimeString()
  }
  return (
    <div>
      <Header raffleId={raffleId}></Header>
      {!winner ?
        <form className="form-inline" onSubmit={handleSubmit}>
          <div className="form-group mx-sm-3 mb-2">
            <label htmlFor="secret_token" className="sr-only">Pick A Winner*</label>
            <input type="text" className="form-control" id="secret_token" placeholder="Secret Token" onChange={handleTextChange} required/>
          </div>
          <button type="submit" className="btn btn-primary mb-2">Pick A Winner</button>
          <div className="form-group row">
            <h1>Secret Token</h1>
            <p>The secret token used when creating the raffle must be provided.</p>
          </div>
        </form>
           : 
        <div className="card">
           <img className="img-thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPpyqM-Ze7nEXPQcX_glnlWAnLDYpLzFKzeQ&s" alt="Card cap"/>
           <div className="card-body">
             <h5 className="card-title">{winner.first_name + ' ' + winner.last_name} </h5>
             <p className="card-text">Registered on {parseDate(winner.raffle_date)} </p>
             <p className="card-text">{id}</p>
             <p className="card-text">{winner.email}</p>
             <p className="card-text">{winner.phone}</p>
             
           </div>
         </div>
      }

    </div>
  )
}

export default WinnerPage