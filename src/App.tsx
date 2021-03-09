import { Container, CssBaseline, Toolbar } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import CharactersPage from './pages/CharactersPage';
import HeroPage from './pages/HeroPage';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <Router>

      <div className="App">
        <CssBaseline />
        <Header />
        <Toolbar />
        <Container style={{ minHeight: '85vh' }}>
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
