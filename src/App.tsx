import Card from "./components/Card"
import { useFetchRepositories } from "./hooks/useRepos"
import {useFavoriteReposStore} from './storage/favoriteRepos'

function App() {

  const {favoriteReposIds} = useFavoriteReposStore();
  const {data, isLoading} = useFetchRepositories('sanchezgregory')
  if (isLoading) {return <div>Loading</div>}
  console.log(data)

  return (
    <>
        <h1>Repos de Github</h1>
        <hr />
        {data && data.length > 0  ?
          data?.map(repo => (
            <div key={repo.id}>
              <Card repository={repo} isFavorite = {favoriteReposIds.includes(repo.id)}/>
            </div>
          ))
          :
          <h3>No hay repos</h3>
        }
    </>
  )
}

export default App
