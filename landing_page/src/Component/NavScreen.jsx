import { useState } from "react"
import NavTwoScreen from "./NavTwoScreen"

const NavScreen=()=>{
  
  const [getClicks,setClick]=useState(false); 

const OnIconClick=()=>{
 setClick((prev)=>{
  const newState=!prev;
  console.log(newState);
  return newState;
 })

}
 
return (
  <>
  <nav className='navScreen'>
          <div className="logo">Logo</div>
           <div className="nav2">

              <NavTwoScreen/>
            <button>Sign In</button>
          </div>
          
          <div className="bi bi-list  icons" onClick={OnIconClick}>  </div>

        </nav>

   
   {
     getClicks&&    <div className="Sidebar">
      
     <div className="innerSidebar"  >
       
     <h2>Home</h2>
     <h2>About</h2>
     <h2>Blog</h2>
     <h2>Contact</h2>
     <h2>Help</h2>

     </div>
   </div>
   
     
   }




  </>
)
}
export default NavScreen