import { Repository } from '../hooks/types'
import { useFavoriteReposStore } from '../storage/favoriteRepos'

type CardProps = {
    repository: Repository,
    isFavorite: boolean
}

const Card = ({repository, isFavorite}: CardProps) => {

    const addFavoriteRepo = useFavoriteReposStore(state => state.addFavoriteRepo)
    const removeFavoriteRepo = useFavoriteReposStore(state => state.removeFavoriteRepo)

    const toggleFavorite = () => {
        return isFavorite ? removeFavoriteRepo(repository.id) : addFavoriteRepo(repository.id)
    }

  return (
    <div>
        {repository.name} || 
        {repository.created_at} ||
        <button className='button' onClick={toggleFavorite}>{!isFavorite ? 'No me gusta' : 'Me gusta'}</button>
        <hr />
    </div>
  )
}

export default Card