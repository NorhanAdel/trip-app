import React, { useState } from 'react'
import './Navbar.css'
const Navbar = ()=> {
    const[active,setactive]=useState('navbar')
    const[trapernt,settransparent]=useState('header')
    const addBy= ()=>{
        if(window.scrollY >=10){
            settransparent('header activeHeader')
        }else{
            settransparent('header')
        }
    }
    window.addEventListener('scroll',addBy)
    const show=()=>{
        setactive('navbar activebar')
    }
    const remove=()=>{
        setactive('navbar')
    }

  return (
     <section className='navbarsection'>
<div className={trapernt}>
<div className="logo">
    <a href="#">
        <h1 className='flex'><i class="fa fa-plane-up"></i>Dot</h1>
    </a>
</div>
<div className={active}>
    <ul className='navlist flex'>
<li><a href="#">Home</a></li>
<li><a href="#">Products</a></li>
<li><a href="#">Resources</a></li>
<li><a href="#">Contact</a></li>
<li><a href="#">Blog</a></li>
 
 <div className="headerbtn flex">
<button className='btn loginbtn'> <a href="#">Login</a></button>
<button className='btn '> <a href="#">Sign Up</a></button>
 </div>
    </ul>
    <div onClick={remove} className="closeNavbar">
        <i className='fa fa-close'></i>
    </div>

</div>
<div onClick={show} className="toggleNavbar">
<i class="fa fa-bars"></i>
</div>
</div>
     </section>
  )
}

export default Navbar