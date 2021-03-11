import { Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HeroCard from '../components/HeroCard'
import ListCard from '../components/ListCard'
// import { RouteComponentProps } from 'react-router'
import { fetchHero } from '../redux-toolkit/actions'
import { RootState } from '../redux-toolkit/store'

const HeroPage: React.FC = ({ match }: any) => {
  const dispatch = useDispatch()
  const heroData = useSelector((state: RootState) => state.comics.hero)
  const { name, description, thumbnail: { path, extension }, comics, series, stories, events } = heroData

  const heroCardProps = { name, description, path, extension }
  //const listCardProps = { title, name, resourseURI }

  useEffect(() => {
    const request = async () => {
      await dispatch(fetchHero(match.params.id))
    }
    request()
  }, [])

  return (
    <Grid container spacing={3} style={{ marginTop: 20 }}>
      <Grid item xs={12} sm={6} lg={4}>
        <HeroCard {...heroCardProps} />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <ListCard title='comics' list={comics.items} />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <ListCard title='series' list={series.items} />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <ListCard title='stories' list={stories.items} />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <ListCard title='events' list={events.items} />
      </Grid>
      {/* <pre>{JSON.stringify(heroData, null, 4)}</pre> */}
    </Grid>
  )
}

export default HeroPage
