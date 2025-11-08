import React from 'react';
import toast, { Toaster } from 'react-hot-toast';


const DetailsCard = ({skill}) => {
    const {image,price,rating,skillName,category,description,providerEmail,providerName,slotsAvailable}= skill

    const handleBookForm =(e)=>{
        e.preventDefault()
        toast("Submission successfull")
        e.target.reset()
    }

    return (
        <div className='w-11/12 mx-auto bg-sky-50 pb-10'>
            
            <div className=" py-10">
                <h1 className='text-2xl font-bold text-center mb-5'>{skillName}</h1>
                <img className='lg:w-200 w-150 mx-auto lg:h-150 h-100 object-cover rounded-2xl' src={image} alt="" />
            </div>
            <div className="w-10/12 mx-auto">
            <div className="pb-5">
                <p className='pb-3'> <span className='font-black text-xl '>Description : </span>{description} </p>
                <p><span className='font-black text-xl'>Category : </span>{category}</p>
            </div>
            <div className="pt-5 border-t border-t-sky-500 flex justify-between lg:flex-row flex-col border-b border-b-sky-500 mb-10">
                <div className="grid grid-cols-1 gap-5 mb-10">
                    <p className='text-center text-lg font-bold'>Info</p>
                <p className='btn btn-outline btn-primary'> <span className='font-black text-sm'>Price :</span> {price}</p>
                <p className='btn btn-outline btn-primary'><span className='font-black text-sm'>Slots Available :</span> {slotsAvailable}</p>
                 
                <p className='btn btn-outline btn-primary'><span className='font-black text-sm'>Rating :</span> {rating}</p>
                
                </div>
                <div className="grid grid-cols-1 gap-5">
                    <p className='text-center text-lg font-bold'>Provider Info</p>
                    <p className='btn btn-outline btn-primary'><span className='font-black text-sm '>Email : </span>{providerEmail}</p>
                    <p className='btn btn-outline btn-primary'><span className='font-black text-sm'>Name : </span>{providerName}</p>
                </div>
            </div>
            </div>


<div className=" w-85 mx-auto ">
<p className='text-center text-blue-900 text-2xl font-bold'>Book Session</p>
           <form onSubmit={handleBookForm} >
                <fieldset className="fieldset p-2">
          <label className="label">Name</label>
          <input required type="text" className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input required type="email" className="input" placeholder="Email" />
          <button className="btn bg-red-900 text-white mt-4">Submit</button>
        </fieldset>
             </form>
</div>

<Toaster />
        </div>
    );
};

export default DetailsCard;