import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { fetchHero } from '../redux-toolkit/actions'
import { RootState } from '../redux-toolkit/store'

const HeroPage: React.FC = ({ match }: any) => {
  const dispatch = useDispatch()
  const heroData = useSelector((state: RootState) => state.comics.hero)

  useEffect(() => {
    const request = async () => {
      await dispatch(fetchHero(match.params.id))
    }
    request()
  }, [])

  return (
    <div>
      <div>HeroPage with id {match.params.id}</div>
      Hero data:
      <pre>{JSON.stringify(heroData, null, 4)}</pre>
    </div>
  )
}

export default HeroPage
