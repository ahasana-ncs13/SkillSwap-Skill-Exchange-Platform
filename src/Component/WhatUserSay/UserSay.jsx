import React from 'react';

const UserSay = ({singleData}) => {
    const {feedback,image,name}=singleData
    // console.log(singleData,feedback,image,name)
    return (
       <div className="card lg:card-side bg-sky-100 shadow-sm p-5 ">
  <figure>
    <img className='w-50 h-30 rounded-full object-cover border-5 border-red-700 '
      src={image}
      alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{feedback}</p>
    <div className="card-actions justify-end">
      <div className="rating">
  <input type="checkbox" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
  <input type="checkbox" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
  <input type="checkbox" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
  <input type="checkbox" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" defaultChecked  />
  <input type="checkbox" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
</div>
    </div>
  </div>
</div>
    );
};

export default UserSay;