import React, { useState } from 'react'
import '../Signin/Signin.css'


import '../Navbar/Navbar.css'


export default function Signin() {
  
const [email , setEmail] = useState()
const [password , setPassword] = useState()
const [signin , setSignin] = useState(false)

const sub =()=>{
  if(email && password){
   const heet = localStorage.getItem('email')
   const nitin = localStorage.getItem('password')
   if(heet == email && nitin == password)
    alert('Signin Successfully')
    else{
      alert('please enter your valid password')
    }
  }
}

  return (
    <>
   

{/* form in signin */}

    <div className="cont">
        <div className="signin-container">
        <form className="signin-form">
            <h2>Sign In</h2>
            <div className="input-group">
                <label for="Email">Email</label>
                <input type="Email" id="Email" name="Email" onChange={(e)=>setEmail(e.target.value)} required/>
            </div>
            <div className="input-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)} required/>
            </div>
            <button type="submit" className="sum" onClick={()=>sub()}>Sign In</button>
        </form>
    </div>

   


    </div>
    
    </>
    
  )
}



