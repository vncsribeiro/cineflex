import styled from "styled-components";

export default function Header() {
    return (
        <Head>
            <Title>CINEFLEX</Title>
        </Head>
    );
}

const Head = styled.div`
    height: 67px;
    width: 100%;
    background-color: #C3CFD9;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    color: #E8833A;
`