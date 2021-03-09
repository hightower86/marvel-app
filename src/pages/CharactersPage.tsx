import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCharacters } from '../redux-toolkit/actions'
import { RootState } from '../redux-toolkit/store'
import { charactersData } from './data'

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core'

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
      marginBottom: 10
    }
  }),
);



const CharactersPage: React.FC = () => {
  const dispatch = useDispatch()
  //const { characters } = useSelector((state: RootState) => state.comics)
  const characters = charactersData.data.results
  const classes = useStyles();

  // useEffect(() => {
  //   const request = async () => {
  //     await dispatch(fetchCharacters())
  //   }
  //   request()
  // }, [])

  return (
    <div>
      <List className={classes.root}>
        {characters.map(({ id, name, description, thumbnail: { path, extension } }) => {
          return (
            <Paper elevation={1}>

              <ListItem key={id} alignItems="flex-start" className={classes.item}>
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
            </Paper>
          )
        }
        )}

        <Divider variant="inset" component="li" />
      </List>
      <pre>{JSON.stringify(characters, null, 4)}</pre>

    </div>
  )
}

export default CharactersPage


