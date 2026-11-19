import styled from "styled-components";


export default function Seats () {
    return (
        <>
            <Title>
                <h1>Selecione o(s) assento(s)</h1>
            </Title>
            <ul>
                
            </ul>
        </>
    );
}


const Title = styled.div`
    width: 100%;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 24px;
        line-height: 100%;
        letter-spacing: 4%;
       color: #293845;
    }
`