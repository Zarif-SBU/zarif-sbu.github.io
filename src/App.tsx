import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import About from './pages/About'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import CompBio from './pages/CompBio'
import KuraCustoms from './pages/KuraCustoms'
import './App.css'

function App() {
  
  return (
    <div className="flex flex-col h-screen bg-background">
      <Router>
        <Navbar />
        <main className="flex-1 overflow-hidden">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
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
