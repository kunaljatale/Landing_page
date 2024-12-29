import { useState } from "react";
import { Link, useLocation } from "react-router";

const NavTwoScreen=()=>{

  const [active,setActive]=useState('');

  const location=useLocation();
  var arr=[
    {name:'Home',link:'/home'},
  {name:'About', link:'/about'},
  {name:'Blog', link:'/blog'},
  {name:'contact', link:'/contact'},
  {name:'Help', link:'/help'},

    
    ];
  
    useState(()=>{
setActive(location.pathname);
    },[location]);
  return (
 <>
{
  arr.map((item,index)=>(
    <div className={`menu ${active===item.link?"active":""}`} key={index}  
    onClick={()=>setActive(item.link)}
    >

      {/* {item.name} */}
    <Link to={item.link} style={{

      textDecoration:active===item.link?"none":"none",
      color:active===item.link?'gray':'inherit'}} > {item.name}</Link>
    
    
    </div>
  
  ))
}


</> 

)

}
export default NavTwoScreen