import { React } from 'react';
import { useQuery, gql } from '@apollo/client';
import  spinner  from '../../images/spinner.svg';

const launchQuery = gql`
  query getLaunches($size: Int) {
    launchesPast(limit: $size) {
      id
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
    }
  }
`;
export default function Launches(props) {
  const { data, loading, error } = useQuery(launchQuery, { variables: { size: props.size }});

  if (loading) return (<div className="animate-spin"><img src={spinner} className="text-solink-blue" alt="loading-spinner" /></div>)
  if (error) return (<div className="px-8 py-6 text-solink-green"><h1 className="h1">Sefofane space Launches</h1><p className="text--error">{ error.message }</p></div>)

  return (
    <div>
      <h1 className="h1">Sefofane space Launches</h1>
      <table className="table">
        <thead className="thead">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Launch Time</th>
            <th scope="col">Launch Site</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {data.launchesPast.map((launch) => (
            <tr key={launch.id}>
              <td>{launch.mission_name}</td>
              <td>{launch.launch_date_local}</td>
              <td>{launch.launch_site.site_name_long}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
  }
