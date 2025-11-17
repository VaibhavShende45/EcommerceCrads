import React from 'react'
import { Bookmark } from 'lucide-react';

const Card = (props) => {
  const {brandLogo,companyName,datePosted,post,tag1,tag2,pay,location}=props.data;
  return (
         <div className="card">
          <h1>{name}</h1>
        <div>
          <div className="top">
          <img src={brandLogo} alt="" />
          <button>Save<Bookmark /></button>

        </div>
        <div className="center">
          <h3>{companyName} <span>{datePosted}</span></h3>
          <h2>{post}</h2>
          <div className='tag'>
          <h4>{tag1} </h4>
          <h4>{tag2}</h4>
          </div>
        </div>
        </div>
        <div className="bottom">
          <div>
            <h3>{pay}</h3>
            <p>{location}</p>
          </div>
          <button>Apply now</button>
        </div>
      </div>
  )
}

export default Card;