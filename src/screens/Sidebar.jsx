import React,{useState} from 'react';
import logo from '../log/logo-coral.svg';


const Sidebar = () => {
   
   const {nav,setNav}=useState([{label:"Home",slug:"/",icon:"icon-home"},
   {label:"Discover",slug:"discover",icon:"icon-home"},
   {label:"Category",slug:"category",icon:"icon-home"},
   {label:"My courses",slug:"my-courses",icon:"icon-home"}])


   var navigation=[];
   for(let i=0;i<nav.length;i++){
       navigation.push()
   }
   
    return (
        <div className="sidebar fixed"> 
             <a href="#" className="logo bl">
                 <img src={logo} className="bl"></img>
             </a>

             <ul className="nav">

                 <li>
                     <a  href="#" className="link bl noul flex c333" > 
                     <div className="ico icon-home s20">
                        </div>
                         <h2 className="lbl s20">Home</h2>
                        </a>
                 </li> </ul>


        </div>
    );
}

export default Sidebar;
