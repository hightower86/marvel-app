import { Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HeroCard from '../components/HeroCard'
// import { RouteComponentProps } from 'react-router'
import { fetchHero } from '../redux-toolkit/actions'
import { RootState } from '../redux-toolkit/store'

const HeroPage: React.FC = ({ match }: any) => {
  const dispatch = useDispatch()
  const heroData = useSelector((state: RootState) => state.comics.hero)
  const { name, description, thumbnail: { path, extension } } = heroData

  const heroCardProps = { name, description, path, extension }

  useEffect(() => {
    const request = async () => {
      await dispatch(fetchHero(match.params.id))
    }
    request()
  }, [])

  return (
    <Grid container spacing={3} style={{ marginTop: 20 }}>
      <Grid item>
        <HeroCard {...heroCardProps} />
      </Grid>
      <div>HeroPage with id {match.params.id}</div>
      Hero data:
      <pre>{JSON.stringify(heroData, null, 4)}</pre>
    </Grid>
  )
}

export default HeroPage
