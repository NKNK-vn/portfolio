import { Navigate, useRoutes } from 'react-router-dom'
import './App.css'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import Porfolio from './pages/Porfolio'
import ResumePage from './pages/ResumePage'

function App() {
    const elements = useRoutes([
        {
            path: '/portfolio',
            element: <Navigate to='/portfolio/home' replace />
        },
        {
            path: '/portfolio/home',
            element: <HomePage />
        },
        {
            path: '/portfolio/about',
            element: <AboutPage />
        },
        {
            path: '/portfolio/contact',
            element: <ContactPage />
        },
        {
            path: '/portfolio/resume',
            element: <ResumePage />
        }
    ])
    return (
        <div className='App'>
            <Porfolio>{elements}</Porfolio>
        </div>
    )
}

export default App
