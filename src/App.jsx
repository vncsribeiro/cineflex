import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import Header from './assets/components/Header'
import GlobalStyle from './styles/globalStyles'
import Movies from './assets/components/Movies'


function App() {
  return (
    <>
      <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Movies />}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App

