import React, { use } from 'react';
import { AuthContext } from '../../ContextApi/AuthContext/AuthContext';
import { Link } from 'react-router';

const MyProfile = () => {
    const {user}=use(AuthContext)
    console.log(user)
    return (
        <div className='w-10/12 mx-auto text-center mt-5'>
           
            <div className='bg-blue-50 p-5 mb-5 rounded-4xl'>
                 <h1 className='text-4xl font-bold my-5  '> Profile</h1>
            <img className='w-30 h-30 mx-auto my-2 rounded-full border-5 border-red-800' src={user.photoURL} alt="" />
            </div>
            <div className="">
                <h1 className='text-2xl font-medium'>{user.displayName}</h1>
                <p className='text-xl my-2 text-gray-500'>{user.email}</p>
            </div>
            <Link to='/updateProgile' className='btn my-10 bg-red-800 text-white border-0'>Update Profile </Link>
            
        </div>
    );
};

export default MyProfile;