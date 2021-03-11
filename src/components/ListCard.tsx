import React from 'react';
import { useSelector } from 'react-redux'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Paper } from '@material-ui/core';
import { RootState } from '../redux-toolkit/store'
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: '100%',
      backgroundColor: theme.palette.background.paper,
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
      alignItems: 'left'
    }
  }),
);

const renderSkeleton =
  [1, 2, 3, 4, 5, 6, 7, 8].map(elem => (

    <Skeleton key={elem} height={100} />
  ))


export default function PinnedSubheaderList({ title, list }: any) {
  const classes = useStyles();
  const { isLoading } = useSelector((state: RootState) => state.comics)



  return (
    <>
      <Paper elevation={1}>
        <List component="nav" className={classes.root} subheader={<li />}>
          <ul className={classes.ul}>
            <ListSubheader>{title}</ListSubheader>
            {isLoading && renderSkeleton}
            {list?.map(({ name, resourceURI }: any) => (
              <li key={`item-${resourceURI}-${name}`} className={classes.listSection}>
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
