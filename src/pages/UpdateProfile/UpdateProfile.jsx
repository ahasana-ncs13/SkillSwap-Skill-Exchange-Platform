import React, { use } from 'react';
import { AuthContext } from '../../ContextApi/AuthContext/AuthContext';
import { useNavigate } from 'react-router';

const UpdateProfile = () => {
    const {updateUserProfile,setUser,user}=use(AuthContext)
    // console.log(user)
    const navigate = useNavigate()

    const handleUpdateProfile =(e)=>{
        e.preventDefault() 
           
        const Name = e.target.Name.value
        const PhotoURL = e.target.photoUrl.value

        console.log(Name,PhotoURL)

        updateUserProfile({displayName: Name , photoURL: PhotoURL })
        .then(
            ()=>{
                setUser({...user,displayName: Name , photoURL: PhotoURL})
            }
        )
        .catch(error =>{
              setUser(user)
              console.log(error)
            })

            navigate('/myProfile')
    }
    return (
        <div className='py-20 bg-sky-50'>
            <h1 className='text-center text-4xl font-black my-5'>Update Profile</h1>
<div className="w-80 mx-auto">
            <form onSubmit={handleUpdateProfile} >
             <fieldset className="fieldset">
           {/* name  */}
          <label required className="label">Name</label>
          <input name='Name' type="text" className="input" placeholder="Name" />

            {/* photoUrl  */}
          <label  className="label">Photo URL</label>
          <input required name='photoUrl' type="url" className="input" placeholder="Photo URL" />

          <button className="btn bg-red-800 text-white mt-4">Update</button>
        </fieldset>
        </form>
    </div>
        </div>
    );
};

export default UpdateProfile;