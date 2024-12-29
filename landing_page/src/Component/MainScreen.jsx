import React  from "react"
import NavScreen from "./NavScreen"
import SectionScreen from "./SectionsScreen"
import { Outlet } from "react-router"
const  MainScreen= ()=>{
return (
  <>
   <main className='mainScreen'>
        <NavScreen/>

 <SectionScreen/>
 {/* <Outlet/> */}

      
      </main>

  </>
)
}
export default MainScreen