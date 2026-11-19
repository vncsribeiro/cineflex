import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Seat from "./Seat";


export default function Seats () {
    const { idSession } = useParams();
    const URL = 'https://mock-api.driven.com.br/api/v7/cineflex/showtimes';
    const [seats, setSeats] = useState([]);
    const [sessionInfo, setSessionInfo] = useState([]);

    console.log(seats)

    useEffect(() => {
        const promise = axios.get(`${URL}/${idSession}/seats`)
        
        promise.then(res => {
            setSessionInfo(res.data);
            setSeats(res.data.seats)
        })

    }, []);

    return (
        <>
            <Title>
                <h1>Selecione o(s) assento(s)</h1>
            </Title>
            <ul>
                {seats.map(seat => (
                    <Seat 
                    seats={seats} 
                    setSeats={setSeats}
                    seat={seat}
                    />
                    
                ))}
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