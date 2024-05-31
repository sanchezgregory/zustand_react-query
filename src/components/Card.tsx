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
        <div className="container mx-auto mt-5">
            <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700'>
                Botón con Tail
            </button>
        </div>
        <button className='button' onClick={toggleFavorite}>{!isFavorite ? 'No me gusta' : 'Me gusta'}</button>
        <hr />
    </div>
  )
}

export default Card