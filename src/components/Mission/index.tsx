import React from 'react';
import { useMissionsInfoQuery } from './../../generated/graphql';
import MissionList, { OwnProps } from './MissionList';


const MissionContainer: React.FC<OwnProps> = (props) => {
  const { data, error, loading } = useMissionsInfoQuery();
  if (loading)
    return <h2>Loading</h2>

  if (error || !data)
    return <h2>Error..</h2>
  console.log(data);

  return (
    <div>
      <MissionList data={data} {...props}/>
    </div>
  )
}
export default MissionContainer;