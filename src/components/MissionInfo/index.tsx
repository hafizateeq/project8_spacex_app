import React, { useEffect } from 'react';
import { useLauncheMissionInfoQuery } from './../../generated/graphql';
import MissionInfo from './MissionInfo';

interface OwnProps {
  id: number
}

const MissionInfoContainer: React.FC<OwnProps> = ({ id }) => {
  const { data, loading, error } = useLauncheMissionInfoQuery({
    variables: {
      id: String(id)
    },
  });

  useEffect(() => {
    fetch(String(id));
  }, [fetch, id]);

  if (loading)
    return <h2>Loading</h2>

  if (error || !data)
    return <h2>Error..</h2>
  //  console.log(data);

  return (
    <div>
      <MissionInfo data={data} />
    </div>
  )
}
export default MissionInfoContainer;