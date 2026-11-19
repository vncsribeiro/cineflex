import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Showtime from "./Showtime";

export default function Sessions() {
    const URL = 'https://mock-api.driven.com.br/api/v7/cineflex/movies';
    const { idFilme } = useParams();
    const [session, setSession] = useState([]);
    const [poster, setPoster] = useState([]);
    

    useEffect(() => {
        const promise = axios.get(`${URL}/${idFilme}/showtimes`);

        promise.then(res => {
            setSession(res.data.days);
            setPoster(res.data)
        });

    }, [])

    return (
        <>
            <Title>
                <h1>Selecione o horário</h1>
            </Title>

            {session.map((value) => (
                <Wrapper key={value.id}>
                    <p>{value.weekday} - {value.date}</p>

                    <Container>
                        {value.showtimes.map((time) => (

                            <Hours key={time.id}> <Showtime time={time.name} idSession={time.id}/> </Hours>

                        ))}
                    </Container>
                </Wrapper>
            ))}

            <Poster>

                <div>
                    <img src={poster.posterURL} />
                </div>

                <p>{poster.title}</p>
            </Poster>


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
const Wrapper = styled.div`
    margin-left: 24px;
    margin-top: 10px;
    margin-bottom: 40px;

    p {
        height: 35px;
        width: 256px;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 100%;
        letter-spacing: 0.02em;
        color: #293845;
    }

`
const Container = styled.div`
    display: flex;
    gap: 14px;
`

const Hours = styled.div`
    height: 43px;
    width: 83px;
    background-color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 18px;
    letter-spacing: 2%;
    border-radius: 3px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    &:hover {
        opacity: 0.8;
    }
`

const Poster = styled.div`
    display: flex;
    width: 100%;
    height: 117px;
    background-color: rgb(223, 230, 237);
    border: 1px solid rgb(158, 173, 186);
    align-items: center;
    position: fixed;
    bottom: 0;
    gap: 20px;

    div {
        width: 64px;
        height: 89px;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px 0px #0000001A;
        margin-left: 10px; 
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 3px;
    }
    
    img {
        width: 48px;
        height: 72px;
    }

    p {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 26px;
        line-height: 100%;
        letter-spacing: 0%;
        vertical-align: middle;
        color: #293845;
    }
`