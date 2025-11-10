import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../ContextApi/AuthContext/AuthContext';
import { FaRegEye } from 'react-icons/fa';
import { LuEyeClosed } from 'react-icons/lu';

const Login = () => {
    const {signInUser,signInWithGoogle}=use(AuthContext)

    const [error , setError]=useState(" ")
    const navigate = useNavigate()
    const location = useLocation();
    // console.log(location)

    const [showPassword,setShowPassword]=useState(false)


    const handleSignIn=(event)=>{
        event.preventDefault()

        const Email = event.target.email.value
        const Password = event.target.password.value

        signInUser(Email,Password)
        .then(result =>{
            const userData =result.user

            navigate( location.state || '/')

            // console.log(userData)
         })
        .catch(error =>{
            setError(error.message)
            // console.log(error.message)
        })
    }

    const handleGoogleSignIn=()=>{
        signInWithGoogle()
        .then(result=>{
            const userData =result.user
             navigate( location.state || '/')
            // console.log(userData)
        })
        .catch(error=>{
            // console.log(error)
        })
        
    }

    const handleShowPassword = ()=>{
        setShowPassword(!showPassword)
    }     
    return (
    <div className="bg-sky-50 p-20">
        <div className="text-center my-10">
            <h1 className='text-4xl text-red-900 font-bold'>Login Now !</h1>
        </div>
    
    <div className="card  bg-white w-full max-w-sm shrink-0 shadow-2xl mx-auto">
      <div className="card-body">
        <form onSubmit={handleSignIn}>
        <fieldset className="fieldset">
            {/* email  */}
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" required/>
   
           {/* password */}
           <div className="relative">
          <label className="label">Password</label>
          <input name='password' type= {showPassword? 'text' :"password" } className="input" placeholder="Password" required />
          <button onClick={handleShowPassword} className=' absolute right-6 top-8'> 
            {showPassword? <FaRegEye /> : <LuEyeClosed />}
          </button>
          </div>

          <p className='text-red-500 font-semibold'> 
            {
             error
            }
          </p>

          <div>
            <Link  to='/forgetPassword'className="link link-hover">Forgot password?</Link>
            </div>
          <button className="btn bg-red-900 text-white mt-4">Login</button>
        </fieldset>
        </form>

        {/* Google */}
      <button onClick={handleGoogleSignIn} className="btn bg-sky-900 text-white  border-[#e5e5e5]">
            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            Login with Google
      </button>

        <div className="">
            <h1 className='font-bold'>Don't Have An Account ? <Link className='text-red-800 font-bold hover:text-blue-900  hover:underline' to={'/signUp'}>Sign Up</Link></h1>
        </div>
      </div>
    </div>
</div>
    );
};

export default Login;