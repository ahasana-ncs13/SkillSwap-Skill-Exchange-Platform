import React from 'react';
import { Link } from 'react-router';

const SkillsCard = ({skills}) => {
    const {image,price,rating,skillName,skillId}=skills
    // console.log(skills)
    return ( 
        <div className="card bg-base-100  shadow-sm p-2">
  <figure>
    <img
      src={image}
      alt="Shoes" className='h-100 object-cover w-100 p-3 rounded-3xl' />
  </figure>
  <div className="card-body">
    <h2 className="text-2xl font-bold">
     {skillName}
    </h2>
    <div className="card-actions justify-end">
      <div className="btn btn-accent btn-outline ">{price}</div>
      <div className="btn btn-accent btn-outline">{rating}</div>
    </div>
  </div>
  <Link to={`/skillDetails/${skillId}`} className='btn  bg-red-900 text-white m-2'>View Details</Link>
</div>
    );
};

export default SkillsCard;