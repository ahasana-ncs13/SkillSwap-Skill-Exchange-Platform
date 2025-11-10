import React, { use, useState } from 'react';
import { FaRegEye } from 'react-icons/fa';
import { LuEyeClosed } from 'react-icons/lu';
import { AuthContext } from '../../ContextApi/AuthContext/AuthContext';

const ForgetPassword = () => {
    const {resetPassword}=use(AuthContext)

    const [error , setError]=useState(" ")

    const handleResetPassword=(e)=>{
        e.preventDefault()
         const Email = e.target.email.value
       
        resetPassword( Email)
        .then(()=>{
            
        })
        .catch(error =>{
            setError(error.message)
            console.log(error)
        })
    }


    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-center text-xl font-bold'>Reset Password</h1>
            <div className="card-body w-80 mx-auto">
           <form onSubmit={handleResetPassword}>
        <fieldset className="fieldset">
            {/* email  */}
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
   
          <p className='text-red-500 font-semibold'> 
            {
             error
            }
          </p>

          <button className="btn bg-red-900 text-white mt-4">Reset Password</button>
        </fieldset>
        </form>
        </div>
        </div>
    );
};

export default ForgetPassword;