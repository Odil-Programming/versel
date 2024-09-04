import './App.css'
import Header from './components/Header'
import { useState } from 'react'
import Data from './utils/mookData'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  const [routs, setRouts] = useState(Data)
  return (
    <>
      <Header />

      <Routes>
        <Route path='*' element='not found' />
        <Route path='/' element={<Home />} />
        {
          routs.map((v) => (
            v.child ? (
              <Route path={v.path} element={v.element}>
                {
                  v.child?.map((value) => (
                    <Route path={value.path} element={value.element} />
                  ))
                }
              </Route>
            ) : (
              <Route path={v.path} element={v.element} />
            )
          ))
        }
      </Routes>
    </>
  )
}

export default App
