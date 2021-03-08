
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchCharacters } from '../redux-toolkit/actions'
import { charactersData } from './data'

interface Props {

}

const HomePage = (props: Props) => {
  const dispatch = useDispatch()

  const [characters, setCharacters] = useState(charactersData.data.results)

  useEffect(() => {
    const request = async () => {
      await dispatch(fetchCharacters())
    }
    request()
  }, [])

  // useEffect(() => {
  //   const request = async () => {
  //     try {
  //       // const params = {
  //       //   limit: 10,
  //       //   apikey: '1bded6638cafa565ae83ba51bc9e1d43'
  //       // }
  //       // const { data } = await axios('https://gateway.marvel.com/v1/public/comics', { params })

  //       console.log({ data });
  //       setCharacters(data)
  //     } catch (error) {
  //       console.log({ error });
  //     }

  //   }

  //   request()

  // }, [])
  return (
    <div>
      Home sweet home
      <pre>{JSON.stringify(characters, null, 4)}</pre>
    </div>
  )
}

export { HomePage }
