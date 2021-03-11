import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Box, Button, Grid, Paper } from '@material-ui/core'

import { Link } from 'react-router-dom';
import { RootState } from '../redux-toolkit/store';
import { fetchCharacters } from '../redux-toolkit/actions';
import { Skeleton } from '@material-ui/lab';
import BG from '../images/home-background.jpg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '88vh',
      //maxWidth: '100%',
      background: BG,
    },
    listRoot: {

    },
    inline: {
      display: 'inline',
    },
    link: {
      textDecoration: 'none',
      color: '#dadada'
    },
    item: {}
  }),
);




const CharactersPage: React.FC = () => {
  const dispatch = useDispatch()
  const { characters, isLoading } = useSelector((state: RootState) => state.comics)
  const classes = useStyles();
  const limit = 20
  const offset = characters?.length

  useEffect(() => {
    const request = async () => {
      await dispatch(fetchCharacters(limit, offset))
    }
    if (!characters?.length) {
      request()
    }
  }, [])

  const getMoreCharacters = useCallback(
    () => {
      const request = async () => {
        await dispatch(fetchCharacters(limit, offset))
      }
      request()
    },
    [offset, dispatch],
  )

  const renderSkeleton =
    <Grid container spacing={3} >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((elem) => (
        <Grid key={elem} item xs={12} sm={6} md={4}>

          <Skeleton height={150} width={400} />
        </Grid>
      ))}
    </Grid>

  return (
    <div className={classes.root}>
      <List className={classes.listRoot}>
        <Grid container spacing={3} >
          {isLoading && renderSkeleton}
          {characters?.map(({ id, name, description, thumbnail: { path, extension } }: any) => {
            return (
              <Grid key={id} item xs={12} sm={6} md={4} >
                <Paper elevation={1} style={{ minHeight: '100%' }}>
                  <Link to={`/characters/${id}`} className={classes.link}>

                    <ListItem alignItems="flex-start" className={classes.item}>
                      <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={`${path}.${extension}`} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={name}
                        color="primary"
                        secondary={
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body2"
                              className={classes.inline}
                            //color="textPrimary"
                            >
                              {description}
                            </Typography>
                          </React.Fragment>
                        }
                      />
                    </ListItem>

                  </Link>
                </Paper>
              </Grid>
            )
          }
          )}

          <Divider variant="inset" component="li" />
        </Grid>
      </List>
      <Box justifyContent='center' display='flex'>

        <Button variant='outlined' onClick={getMoreCharacters} > Load more ...</Button>
      </Box>
      {/* <pre>{JSON.stringify(characters, null, 4)}</pre> */}

    </div>
  )
}

export default CharactersPage


