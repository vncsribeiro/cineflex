import { useEffect, useState } from "react";
import axios from 'axios'
import styled from "styled-components";
import Movie from "./Movie";


export default function Movies() {
    const URL = 'https://mock-api.driven.com.br/api/v7/cineflex/movies';
    const [movies, setMovies] = useState([])


    useEffect(() => {
        const promise = axios.get(URL);

        promise.then(res => {
            setMovies(res.data)
        });

    }, [])


    return (
        <>
            <Title>
                <h1>Selecione o filme</h1>
            </Title>
            <List>
                {movies.map((value, index) => (
                    <li key={index}><Movie value={value}/></li>
                ))}
            </List>
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

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    
    li {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 145px;
        height: 209px;
        opacity: 0.95;
        border-radius: 3px;
        background-color: #FFFFFF;
        box-shadow: 0px 2px 4px 2px #0000001A;
        margin: 6px 12px;
        cursor: pointer;
    }

`