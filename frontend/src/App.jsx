import { Routes, Route } from 'react-router'
import Home from '../pages/Home'
import Create from '../pages/Create'
import Edit from '../pages/Edit'
import Delete from '../pages/Delete'
import Navbar from '../components/Navbar'

function App() {
  return (
    <>
      <Navbar
        content={
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/delete/:id" element={<Delete />} />
          </Routes>
        } />
    </>
  )
}

export default App
