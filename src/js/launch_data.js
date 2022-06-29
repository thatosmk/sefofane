import { React } from 'react';
import { useQuery, gql } from '@apollo/client';
import  spinner  from '../images/spinner.svg';

const launchQuery = gql`
{
  launchesPast(limit: 10) {
    id
    mission_name
  }
}
`;

export default function launchData() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, loading, error } = useQuery(launchQuery);

  if (loading) return (<div className="animate-spin"><img src={spinner} className="text-solink-blue" alt="loading-spinner" /></div>)
  if (error) return (<div className="px-8 py-6 text-solink-green"><h1 className="h1">Sefofane space Launches</h1><p className="p--error">{ error.message }</p></div>)

  return (
    <div>
      <h1>Sefofane space Launches</h1>
      <ul>
        {data.launchesPast.map((launch) => (
          <li key={launch.id}>{launch.mission_name}</li>
        ))}
      </ul>
    </div>
  )
}
