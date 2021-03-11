import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    link: {
      textDecoration: 'none',
      color: theme.palette.primary.contrastText
    }
  }),
);

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            <Link to='/' className={classes.link}>
              Home
            </Link>

          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Link to='/characters' className={classes.link}>
              Characters
            </Link>

          </Typography>
          <Button color="inherit">
            <a className={classes.link} href='https://github.com/hightower86/marvel-app' target='blank' rel='noopener noreferrer'>
              Code
              </a>
          </Button>
        </Toolbar>
      </AppBar>
    </div >
  );
}

export { Header }