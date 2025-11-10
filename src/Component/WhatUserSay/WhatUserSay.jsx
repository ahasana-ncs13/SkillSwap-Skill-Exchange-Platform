
import UserSay from './UserSay';
import { use } from 'react';


const WhatUserSay = ({userData}) => {
    const data = use(userData)
    return (
        <div className='mt-10 w-11/12 mx-auto'>
            <div className="w-170 mx-auto text-center">
            <h1 className='text-3xl font-bold'>What Our Users Say</h1>
            <p className='text-gray-500 py-5'>See how learners and skill providers are growing together through SkillSwap. Real stories from real people who shared, taught, and learned new skills within their community.</p>
            </div>
            <div className=" flex justify-between my-10 gap-5">
            {
                 data.map(singleData => <UserSay key={singleData.id} singleData={singleData}></UserSay> )
            }
           </div>
        </div>
    );
};

export default WhatUserSay;