import './App.css'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import UserLayout from './components/Layouts/UserLayout'
import Home from './components/Page/Home'
import Analytics from './components/Page/Analytics'
import Conversations from './components/Page/Conversations'
import ChatDetailView from './components/Page/ChatDetailView'
function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<UserLayout />}>
            <Route path='home' element={<Home />} />
            <Route path='Analytics' element={<Analytics />} />
            <Route path='Conversations' element={<Conversations />} >
              <Route path=':conversationId' element={<ChatDetailView />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
