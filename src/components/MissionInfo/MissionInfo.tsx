import React from 'react';
import { LauncheMissionInfoQuery } from './../../generated/graphql';
import './style.css';
interface props {
  data: LauncheMissionInfoQuery
}

const MissionInfo: React.FC<props> = ({ data }) => {
  if (!data.launch) {
    return <div>Launch unavailable</div>;
  }
  return (
    <div className="MissionInfo">
      <div className="MissionInfoStatus"></div>
      <span>Flight {data.launch.flight_number}: </span>
      {data.launch.launch_success ?
        <span className="success">Success</span> :
        <span className="failed">Failed</span>}
      <h1 className="Mission_title">
        {data.launch.mission_name} - {data.launch.rocket?.rocket_name}
      </h1>
      <p>Lounch from {data.launch.launch_site?.site_name} in {data.launch.launch_year}</p>
      <p>{data.launch.details}</p>
      {!!data.launch.links && !!data.launch.links.flickr_images && (
        <div className="img_List">
          {data.launch.links.flickr_images.map(image =>
            image ? <img className="img" src={image} /> : null
          )}
        </div>
      )}
    </div>
  )
}
export default MissionInfo;