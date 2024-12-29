
import { Outlet } from 'react-router'
import './App.css'
import MainScreen from './Component/MainScreen'
import NavScreen from './Component/NavScreen'
import SectionScreen from './Component/SectionsScreen'

function App() {
  return (
    <>
     <NavScreen/>
     {/* <Outlet/> */}

     <SectionScreen/>
     </>
  )
}

export default App
