import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Movie({ value }) {
    return (
        <Link to={`/sessoes/${value.id}`}>
            <Image src={value.posterURL} />
        </Link>
    );
}

const Image = styled.img`
    height: 193px;
    width: 129px;
`