import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './assets/components/Header'
import GlobalStyle from './styles/globalStyles'
import Movies from './assets/components/Movies'
import Sessions from './assets/components/Sessions'


function App() {
  return (
    <>
      <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Movies />}/>
            <Route path='/sessoes/:idFilme' element={<Sessions />}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App

