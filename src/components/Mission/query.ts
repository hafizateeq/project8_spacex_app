import { gql } from '@apollo/client';

export const MissionsInfo = gql`
query MissionsInfo{
  launches {
    flight_number
    mission_name
    mission_id
    launch_year
    launch_success
  }
}
`