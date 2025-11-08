import React from 'react';

const TopRated = () => {
    return (
        <div className="p-10 mt-5">
            <div className=" max-w-150 mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-3 text-center">
          ⭐ Top Rated Providers
        </h2>
        <p className="text-gray-600 text-center mb-10">
          Learn from the most trusted and highest-rated providers in your
          community. From music to wellness — these experts are ready to share
          their skills with you!
        </p>
        </div>
        <div className="stats stats-vertical lg:stats-horizontal shadow bg-sky-100 w-full ">
  <div className="stat text-center ">
    <div className="stat-title text-xl mb-3 ">Downloads</div>
    <div className="stat-value text-5xl text-red-950 mb-4">31K</div>
    <div className="stat-desc text-xl">Jan 1st - Feb 1st</div>
  </div>

  <div className="stat text-center">
    <div className="stat-title text-xl mb-3">New Users</div>
    <div className="stat-value text-5xl text-red-950 mb-4">4,200</div>
    <div className="stat-desc text-xl">↗︎ 400 (22%)</div>
  </div>

  <div className="stat text-center">
    <div className="stat-title text-xl mb-3">New Registers</div>
    <div className="stat-value text-5xl text-red-950 mb-4">1,200</div>
    <div className="stat-desc  text-xl">↘︎ 90 (14%)</div>
  </div>
</div>
</div>
 )
};

export default TopRated;