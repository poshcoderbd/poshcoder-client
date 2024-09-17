import React from 'react'
import './TeamCard.scss'

const TeamCard = ({data}) => {
  return (
    <div className="team-card">
      <div className="team-img">
        <img src={data?.imgUrl} alt={data?.name} />
      </div>
      <div className="card-bottom">
        <span>{data?.title}</span>
        <div className='card-name'>{data?.name}</div>
      </div>
    </div>
  )
}

export default TeamCard