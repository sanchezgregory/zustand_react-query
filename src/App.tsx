import Card from "./components/Card"
import { useState } from "react"
import { useFetchRepositories } from "./hooks/useRepos"
import {useFavoriteReposStore} from './storage/favoriteRepos'

function App() {

  const [githubUser, setGithubUser] = useState('')
  const {favoriteReposIds} = useFavoriteReposStore();
  const {data, isLoading} = useFetchRepositories(githubUser)

  const handleSelectGitUser = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedUser = event.target.value;
    setGithubUser(selectedUser)
  }

  return (
    <> 
        <h1>Repos de Github</h1>
        
        <select name="" id="" onChange={handleSelectGitUser}>
          <option value="sanchezgregory">Greg</option>
          <option value="fazt">Fazt</option>
        </select>
        {isLoading ? <div>Loading</div> :
          data && data.length > 0  ?
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
