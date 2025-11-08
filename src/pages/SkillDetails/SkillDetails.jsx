import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import DetailsCard from '../../Component/DetailsCard.jsx/DetailsCard';

const SkillDetails = () => {
    const data= useLoaderData()
    const {id}=useParams()
    const [skill , setSkill]=useState({})

    useEffect(()=>{
       const singleSkill = data.find(skill => skill.skillId==id)
       setSkill(singleSkill)
    },[data,id])
    // console.log(data)
    return (
        <div>
            <DetailsCard skill={skill}></DetailsCard>
        </div>
    );
};

export default SkillDetails;