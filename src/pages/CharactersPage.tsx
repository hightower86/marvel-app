import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createStyles, Theme, makeStyles, fade } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Box, Button, Grid, InputBase, Paper } from '@material-ui/core'

import { Link } from 'react-router-dom';
import { RootState, store } from '../redux-toolkit/store';
import { fetchCharacters } from '../redux-toolkit/actions';
import { Skeleton } from '@material-ui/lab';
import SearchIcon from '@material-ui/icons/Search';
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
    item: {},
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.25),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.80),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: 200,//'100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 200,//'auto',
      },
    },
    searchIcon: {
      color: 'black',
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'black',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }),
);




const CharactersPage: React.FC = () => {
  const dispatch = useDispatch()
  const { characters, isLoading } = useSelector((state: RootState) => state.comics)
  const [filteredCharacters, setFilteredCharacters] = useState(characters)
  const classes = useStyles();
  const limit = 20
  const offset = characters?.length

  useEffect(() => {
    const request = async () => {
      await dispatch(fetchCharacters(limit, offset))
      setFilteredCharacters(store.getState().comics.characters)

    }
    if (!characters?.length) {
      request()
    }
  }, [])

  const getMoreCharacters = useCallback(
    () => {
      const request = async () => {
        await dispatch(fetchCharacters(limit, offset))
        setFilteredCharacters(store.getState().comics.characters)
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

  const handleInputChange = (e: any) => {
    const value = e.target.value;
    const filtered = characters.filter((elem: any) => elem.name.toLowerCase().includes(value.toLowerCase()))
    setFilteredCharacters(filtered)
  }

  return (
    <div className={classes.root}>
      <Box display='flex' justifyContent='center' padding={2}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            onChange={handleInputChange}
          />
        </div>
      </Box>
      <List className={classes.listRoot}>
        <Grid container spacing={3} >
          {isLoading && renderSkeleton}
          {filteredCharacters?.map(({ id, name, description, thumbnail: { path, extension } }: any) => {
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


