import './App.css'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import UserLayout from './components/Layouts/UserLayout'
import Home from './components/Page/Home'
function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<UserLayout />}>
            <Route path='home' element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
