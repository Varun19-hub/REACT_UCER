import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
 import App from './App.jsx'
 import Welcome from './components/Welcome.jsx'
import Student from './components/Student.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Student name="Varun" />
    <Welcome name = 'Varun Mishra'/>
    <Welcome name = 'Mishra Ji'/>
    <Student name = 'Vansh Jaiswal'/>
    <Student name = 'Vivek Kumar Bind'/>
    <Student name = 'Vishal Singh'/> 

  </StrictMode>,
)
