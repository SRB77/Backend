import './App.css'
import Songs from './Components/Songs'
import FacialExpression from './Components/FacialExpression'

function App() {
  return (
    <div className="app-container">
      <nav className='Navbar'>
        <div className="nav-content">
          <i className="ri-music-2-fill"></i>
          <h1>Moody Player</h1>
        </div>
      </nav>
      <main className="main-content">
        <FacialExpression/>
        <Songs/>
      </main>
    </div>
  )
}

export default App
