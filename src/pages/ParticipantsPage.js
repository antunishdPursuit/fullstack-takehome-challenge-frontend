import Header from "./Header"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function ParticipantsPage({setRaffleId, raffleId}) {
  let { id } = useParams();
  const [participants, setParticipants] = useState([])
  useEffect(() => {
    setRaffleId(id)
    axios
    .get(`${API}/api/raffles/${raffleId}/participants`)
    .then((res) => {
      setParticipants(res.data)
    })
    .catch((err) => {
      console.error("catch", err)
    })
  }, [setRaffleId, id, raffleId])

  return (
    <div>
      <Header raffleId={raffleId}></Header>
      <h1>Participants: {participants.length} Total</h1>
      <h3>Search Input</h3>
      {participants.length !== 0 ? participants.map(participant => {
        return (
          <div className="card-body border border-primary" key={participant.id}>
            <img src="https://placehold.co/150x100" alt={participant.first_name}></img>
            <h5 className="card-title">{participant.first_name + participant.last_name}</h5>
            <p className="card-text"># {participant.id}</p>
            <p className="card-text">Email: {participant.email}</p>
            <p className="card-text">Phone: {participant.phone}</p>
          </div>
        )
      }) : <h1>No Participants</h1>}
    </div>
  )
}

export default ParticipantsPage