import React, { use, useState } from 'react';
import { Link, useNavigate} from 'react-router';
import { AuthContext } from '../../ContextApi/AuthContext/AuthContext';
import { GoogleAuthProvider } from 'firebase/auth';
import { FaRegEye } from 'react-icons/fa';
import { LuEyeClosed } from 'react-icons/lu';

const SignUp = () => {
    const {createUser,signInWithGoogle} = use(AuthContext)
    const [error , setError]=useState("")
    const [showPassword , setShowPassword]=useState(false)
    const navigate = useNavigate()

   
 const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    const handleSignUp = (e)=>{
        e.preventDefault()

        const Name = e.target.Name.value
        const PhotoURL = e.target.photoUrl.value
        const Email = e.target.email.value
        const Password = e.target.password.value

         if(!passwordValidation.test(Password)){
            setError("Password must have at least one uppercase, one lowercase, and be at least 6 characters long.")
            return 
        }

         console.log(Name,PhotoURL,Email,Password)

         createUser(Email,Password)
         .then(result=>{
            const userData =result.user
            console.log(userData)
         })
         .catch(error =>{
             setError(error.message) 
            console.log(error.message)
         })

         navigate('/')
    }

    const handleGoogleSignIn=()=>{
        signInWithGoogle()
        .then(result=>{
            const userData =result.user
            console.log(userData)
        })
        .catch(error=>{
            console.log(error)
        })
        navigate('/') 
    }


    const handleShowPassword = ()=>{
      setShowPassword(!showPassword)
    }

    return (
    <div className="bg-sky-50 p-20">
        <div className="text-center my-10">
            <h1 className='text-4xl text-red-900 font-bold'>SignUp Now !</h1>
        </div>
    
    <div className="card  bg-white w-full max-w-sm shrink-0 shadow-2xl mx-auto">
      <div className="card-body">
        <form onSubmit={handleSignUp}>
        <fieldset className="fieldset">

            {/* name  */}
          <label required className="label">Name</label>
          <input name='Name' type="text" className="input" placeholder="Name" />

            {/* photoUrl  */}
          <label  className="label">Photo URL</label>
          <input required name='photoUrl' type="url" className="input" placeholder="Photo URL" />

            {/* email  */}
          <label className="label">Email</label>
          <input required  name='email' type="email" className="input" placeholder="Email" />

          {/* password  */}
          <div className="">
          <label className="label">Password</label>
          <input required name='password' type= {showPassword? "text": "password"  } className="input relative" placeholder="Password" />
          <button onClick={handleShowPassword}  className=' absolute bottom-53 left-80'>
            {showPassword?  <LuEyeClosed /> : <FaRegEye />}
          </button>

          </div>
         

          <div><a className="link link-hover">Forgot password?</a></div>
          <p className='text-red-500 font-semibold'>
            {
                error
            }
          </p>
          <button className="btn bg-red-900 text-white mt-4">SignUp</button>
        </fieldset>
        </form>

         {/* Google */}
      <button onClick={handleGoogleSignIn} className="btn bg-sky-900 text-white  border-[#e5e5e5]">
            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            Login with Google
      </button>

    
        <div className="">
            <h1 className='font-bold'>Already Have An Account ? <Link className='text-red-800 font-bold hover:text-blue-900  hover:underline' to={'/login'}>Login</Link></h1>
        </div>
      </div>
    </div>
</div>
    );
};

export default SignUp;