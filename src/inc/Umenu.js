import { Link } from "react-router-dom";

export default function Umenu() {
  return (
    <div>
      <div className="overlay toggle-icon"></div>
      <Link to="#" className="back-to-top"><i className='bx bxs-up-arrow-alt'></i></Link>
    </div>
  )
};
