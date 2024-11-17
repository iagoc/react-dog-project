import React from 'react'
import useFetch from '../../Hooks/useFetch'
import Loading from '../Helper/Loading'
import { STATS_GET } from '../../api'
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'))

const UserStats = () => {
  const { data, error, loading, request } = useFetch()

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET()
      await request(url, options)
    }
    getData()
  }, [request])

  if (loading) return <Loading />
  if (data)
    return (
      <React.Suspense fallback={<Loading />}>
        <UserStatsGraphs data={data} />
      </React.Suspense>
    )
  else return null
}

export default UserStats
