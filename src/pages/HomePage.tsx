
import { useEffect } from 'react'

import { Link } from 'react-router-dom'
import { fetchCharacters } from '../redux-toolkit/actions'
import { RootState } from '../redux-toolkit/store'
import CharactersPage from './CharactersPage'
import { charactersData } from './data'

interface Props {

}

const HomePage = (props: Props) => {


  return (
    <div>
      Home sweet home
     
      <Link to='/characters' >
        Characters
      </Link>
    </div>
  )
}

export { HomePage }
