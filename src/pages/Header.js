import { Link } from "react-router-dom"

function Header({raffleId}) {
  
  return (
    <div className="d-flex flex-column justify-content-center">
      <h1 className="d-flex justify-content-center">Raffle App</h1>
      <div className="d-flex flex-row justify-content-around">
        <div>
          <Link className="btn btn-primary" to="/"> All Raffles </Link>
        </div>
        <div>
          <Link className="btn btn-primary" to={`/raffles/${raffleId}`}> Register </Link>
        </div>
        <div>
          <Link className="btn btn-primary" to={`/raffles/${raffleId}/participants`}> Participants </Link>
        </div>
        <div>
          <Link className="btn btn-primary" to={`/raffles/${raffleId}/winner`}> Pick A Winner </Link>
        </div>
      </div>
    </div>
  )
}

export default Header