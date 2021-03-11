import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Grid, Paper } from '@material-ui/core'

import { charactersData } from '../api/data'
import { Link } from 'react-router-dom';
import { RootState } from '../redux-toolkit/store';
import { fetchCharacters } from '../redux-toolkit/actions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
    item: {
      // border: '1px solid #dcdcdc',
      //marginBottom: 10
    },
    link: {
      textDecoration: 'none'
    }
  }),
);

const CharactersPage: React.FC = () => {
  const dispatch = useDispatch()
  const { characters } = useSelector((state: RootState) => state.comics)
  //const characters = charactersData.data.results
  const classes = useStyles();

  useEffect(() => {
    const request = async () => {
      await dispatch(fetchCharacters())
    }
    if (!characters?.length) {
      request()
    }
  }, [])

  return (
    <div>
      <List className={classes.root}>
        <Grid container spacing={3} >
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
                        secondary={
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body2"
                              className={classes.inline}
                              color="textPrimary"
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
      <pre>{JSON.stringify(characters, null, 4)}</pre>

    </div>
  )
}

export default CharactersPage


