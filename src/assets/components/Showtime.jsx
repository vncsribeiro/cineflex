import { Link } from "react-router-dom";


export default function Showtime({time, idSession}) {
    
    return (
        <Link to={`/assentos/${idSession}`}>
            {time}
        </Link>
    );
}