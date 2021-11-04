import React from 'react';
import { MissionsInfoQuery } from './../../generated/graphql';
import './style.css';

export interface OwnProps {
  handleIdChange: (newId: number) => void
}

interface props extends OwnProps{
  data: MissionsInfoQuery
}

const MissionList: React.FC<props> = ({ data, handleIdChange }) => {
  return (
    <div className="MissionList">
      <h2>Space X Launches</h2>
      <ol className="MissionOl">
        {data.launches?.map((launchObj, ind) => {
          return <li key={ind} className="Mission_items" onClick={() => handleIdChange(launchObj?.flight_number!)}>
            {launchObj?.mission_name} ({launchObj?.launch_year})
          </li>
        })}
      </ol>
    </div>
  )
}
export default MissionList;