import React, { Suspense } from 'react';
import HeroSlider from '../../Component/HeroSlider/HeroSlider';
import { useLoaderData } from 'react-router';
import SkillsCard from '../../Component/SkillsCard/SkillsCard';
import TopRated from '../../Component/TopRated/TopRated';
import HowItWorks from '../../Component/HowItWorks/HowItWorks';
import WhatUserSay from '../../Component/WhatUserSay/WhatUserSay';

const userData = fetch('/usersdata.json')
.then(res => res.json())


const Home = () => {
    const data = useLoaderData()
    // console.log(data)
    return (
        <div>
            
            <HeroSlider data={data}></HeroSlider>

            <div className="bg-sky-100">
                <div className="text-center max-w-200 mx-auto pt-20">
                <h1 className='text-3xl font-semibold'>Popular Skills in Your Community</h1>
                <p className='text-gray-500 mt-2'>Discover the most sought-after skills being shared and learned around you. From guitar lessons to yoga sessions and coding workshops — explore top-rated listings, compare prices, and connect with trusted local skill providers.</p>
                </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 w-11/12 mx-auto gap-10 py-15">
            {
                data.map(skills => <SkillsCard key={skills.skillId} skills={skills}></SkillsCard>)
            }
            </div>
            </div>
            
            <TopRated></TopRated>
            <HowItWorks></HowItWorks>
            
            <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
            <WhatUserSay userData={userData}></WhatUserSay>
           </Suspense>
        </div>
    );
};

export default Home;