// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./pages/Home"
import Register from "./pages/Register"
import ParticipantsPage from "./pages/ParticipantsPage"
import WinnerPage from "./pages/WinnerPage"
import { useEffect, useState } from "react";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function App() {
  const [raffles, setRaffles] = useState([])
  // const [raffle, setRaffle] = useState({})
  const [raffleId, setRaffleId] = useState(1)
  useEffect(() => {
    axios
      .get(`${API}/api/raffles`)
      .then((res) => {
        setRaffles(res.data.data)
      })
      .catch((err) => {
        console.error("catch", err)
      })
  }, [])
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home raffles={raffles}/>}/>
          <Route path="/raffles/:id" element={<Register setRaffleId={setRaffleId} raffleId={raffleId}/>}/>
          <Route path="/raffles/:id/participants" element={<ParticipantsPage setRaffleId={setRaffleId} raffleId={raffleId}/>}/>
          <Route path="/raffles/:id/winner" element={<WinnerPage setRaffleId={setRaffleId} raffleId={raffleId}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
