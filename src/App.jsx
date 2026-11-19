import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './assets/components/Header'
import GlobalStyle from './styles/globalStyles'
import Movies from './assets/components/Movies'
import Sessions from './assets/components/Sessions'
import Seats from './assets/components/Seats'


function App() {
  return (
    <>
      <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Movies />}/>
            <Route path='/sessoes/:idFilme' element={<Sessions />}/>
            <Route path='/assentos/:idSession' element={<Seats />}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App

