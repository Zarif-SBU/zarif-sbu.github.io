import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import About from './pages/About'
import Research from './pages/Research'
import Projects from './pages/Projects'
import CompBio from './pages/CompBio'
import KuraCustoms from './pages/KuraCustoms'
import './App.css'

function App() {
  
  return (
    <div className="flex flex-col ">
      <Router>
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/comp-bio" element={<CompBio />} />
            <Route path="/Kura" element={<KuraCustoms />}/>
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
