import styled from "styled-components";

export default function Movie({ value }) {
    return (
        <Image src={value.posterURL} />
    );
}

const Image = styled.img`
    height: 193px;
    width: 129px;
`