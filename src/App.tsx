import { Container, CssBaseline, makeStyles, Toolbar } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import CharactersPage from './pages/CharactersPage';
import HeroPage from './pages/HeroPage';
import { HomePage } from './pages/HomePage';
import BG from './images/home-background.webp'
import BGmob from './images/home-background.webp'

const useStyles = makeStyles((theme) => ({
  app: {
    backgroundColor: 'black'
  },

  container: {
    position: 'relative',
    //width: '100%',
    minHeight: '88vh',//'100%',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundImage: `url(${BG})`,
    backgroundColor: theme.palette.primary.main,
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat-y',
    backgroundPosition: 'top center',
    [theme.breakpoints.down('sm')]: {
      backgroundImage: `url(${BGmob})`,
    },
  },

}));

function App() {

  const classes = useStyles()
  return (
    <Router>

      <div className={classes.app}>
        <CssBaseline />
        <Header />
        <Toolbar />
        <Container className={classes.container}>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/characters' component={CharactersPage} />
            <Route path='/characters/:id' component={HeroPage} />
          </Switch>
        </Container>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
