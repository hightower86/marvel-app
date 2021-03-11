import React from 'react';
import { useSelector } from 'react-redux'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Paper, Typography } from '@material-ui/core';
import { RootState } from '../redux-toolkit/store'
import { Skeleton } from '@material-ui/lab';
import { randomBytes } from 'crypto'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {

    },
    root: {
      width: '100%',
      maxWidth: '100%',
      position: 'relative',
      overflow: 'auto',
      maxHeight: 500,
      padding: 10
    },
    listSection: {
      backgroundColor: 'inherit',
    },
    ul: {
      backgroundColor: 'inherit',
      padding: 0,
    },
    listItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
      color: 'white'
    },
    header: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      textTransform: 'uppercase'
    }
  }),
);

const renderSkeleton =
  [1, 2, 3, 4, 5, 6, 7, 8].map(elem => (

    <Skeleton key={elem} height={100} width={400} />
  ))


export default function PinnedSubheaderList({ title, list }: any) {
  const classes = useStyles();
  const { isLoading } = useSelector((state: RootState) => state.comics)



  return (
    <>
      <Paper elevation={1} className={classes.paper}>
        <Paper className={classes.header}>
          <Typography variant='h5' >
            {title}
          </Typography>
        </Paper>
        <List component="nav" className={classes.root} subheader={<li />}>
          <ul className={classes.ul}>
            {isLoading && renderSkeleton}
            {list?.map(({ name, resourceURI }: any) => (
              <li key={randomBytes(4).toString('hex')} className={classes.listSection}>
                <ListItem className={classes.listItem}>
                  <ListItemText primary={name} />
                  <ListItemText secondary={resourceURI} />
                </ListItem>
                <hr />
              </li>
            ))}
          </ul>
        </List>
      </Paper>
    </>
  );
}
