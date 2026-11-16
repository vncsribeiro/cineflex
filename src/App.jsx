import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import Header from './assets/components/Header'
import GlobalStyle from './styles/globalStyles'


function App() {
  return (
    <>
      <GlobalStyle />
      <MobileContainer>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path='/' />
          </Routes>
        </BrowserRouter>
      </MobileContainer>
    </>

  )
}

export default App

const MobileContainer = styled.div`
  width: 100%;
  max-width: 375px;
`