import React ,{useState} from 'react'
import '../Signup/Signup.css'

import Signin from '../Signin/Signin';
export default function Signup() {
    const [username , setUsername] = useState();
    const [email , setEmail] = useState();
    const [password , setPassword] = useState();
    const [confirmpassword , setConfirmpassword] = useState();
    const [signup ,setSignup] = useState(false);
  
   const sumit =()=>{
  if(username && email && password && confirmpassword){
    localStorage.setItem('username', username)
    localStorage.setItem('email', email)
    localStorage.setItem('password', password)
    localStorage.setItem('confirmpassword', confirmpassword)
    localStorage.setItem('signup', email)
    alert('Signup Successfully')
    setSignup('true')
 
}
}
  return (
   <>
   


{/* form in signup */}
{signup?<Signin/>:
    
    <div className="cont">
        <div className="signin-container">
        <form className="signin-form">
            <h2>Sign Up</h2>
            <div className="input-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" onChange={(e)=>setUsername(e.target.value)} required/>
            </div>
            <div className="input-group">
                <label for="Email">Email</label>
                <input type="text" id="Email" name="Email" onChange={(e)=>setEmail(e.target.value)} required/>
            </div>

            <div className="input-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)} required/>
            </div>

            <div className="input-group">
                <label for="Comfirmpassword">Comfirm Password</label>
                <input type="Comfrimpassword" id="Comfrimpassword" name="Comfrimpassword" onChange={(e)=>setConfirmpassword(e.target.value)} required/>
            </div>
            <button type="submit" className="sum" onClick={()=>sumit()}>Sign In</button>
        </form>
    </div>

    </div>
  }
    </>
  );
};